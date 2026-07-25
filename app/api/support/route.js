import { Resend } from "resend";
import emailConfig from "../../contact/emailConfig";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_SCREENSHOT_BYTES = 5 * 1024 * 1024;
const ALLOWED_SCREENSHOT_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);

function text(value, maximum = 4000) {
  return String(value || "").trim().slice(0, maximum);
}

function escapeHtml(value) {
  return text(value).replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character]);
}

function validPhone(value) {
  const digits = text(value, 40).replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

export async function POST(request) {
  try {
    const apiKey = text(process.env.RESEND_API_KEY, 300);
    if (!apiKey) {
      return Response.json({ success: false, error: "Support delivery is not configured." }, { status: 503 });
    }
    const resend = new Resend(apiKey);

    const formData = await request.formData();
    const name = text(formData.get("name"), 120);
    const contactPhone = text(formData.get("contactPhone"), 40);
    const senderNumber = text(formData.get("senderNumber"), 40);
    const businessName = text(formData.get("businessName"), 160);
    const description = text(formData.get("description"), 4000);
    const consent = text(formData.get("consent"), 10) === "true";
    const honeypot = text(formData.get("website"), 200);
    const screenshot = formData.get("screenshot");

    if (honeypot) return Response.json({ success: true });
    if (!name || !validPhone(contactPhone) || !validPhone(senderNumber) || !description || !consent) {
      return Response.json({ success: false, error: "Complete the required name, phone numbers, description, and contact permission." }, { status: 400 });
    }

    const attachments = [];
    if (screenshot && typeof screenshot.arrayBuffer === "function" && Number(screenshot.size || 0) > 0) {
      if (!ALLOWED_SCREENSHOT_TYPES.has(screenshot.type)) {
        return Response.json({ success: false, error: "The screenshot must be a JPG, PNG, or WebP image." }, { status: 400 });
      }
      if (screenshot.size > MAX_SCREENSHOT_BYTES) {
        return Response.json({ success: false, error: "The screenshot must be 5 MB or smaller." }, { status: 400 });
      }
      attachments.push({
        filename: text(screenshot.name, 180) || "messaging-report-screenshot",
        content: Buffer.from(await screenshot.arrayBuffer()),
      });
    }

    const submittedAt = new Date().toISOString();
    const result = await resend.emails.send({
      from: "ARK Client Center Reports <onboarding@resend.dev>",
      to: [emailConfig.recipientEmail],
      subject: `Messaging concern involving ${senderNumber}`,
      html: `
        <h1>New ARK Client Center messaging report</h1>
        <p><strong>Reporter:</strong> ${escapeHtml(name)}</p>
        <p><strong>Reporter phone:</strong> ${escapeHtml(contactPhone)}</p>
        <p><strong>Number that sent the message:</strong> ${escapeHtml(senderNumber)}</p>
        <p><strong>Business name:</strong> ${escapeHtml(businessName || "Not provided")}</p>
        <p><strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p>
        <h2>Description</h2>
        <p style="white-space:pre-wrap">${escapeHtml(description)}</p>
        <hr />
        <p>The reporter agreed that ARK Client Center may call or text the supplied phone number only about this report.</p>
      `,
      attachments,
    });

    if (result?.error) throw new Error(result.error.message || "Resend rejected the report.");
    return Response.json({ success: true });
  } catch (error) {
    console.error("Unable to submit ARK messaging report", error);
    return Response.json({ success: false, error: "The report could not be submitted right now." }, { status: 500 });
  }
}
