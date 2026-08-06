export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function apiBaseUrl() {
  return String(
    process.env.ARK_SUPPORT_API_BASE_URL
      || process.env.NEXT_PUBLIC_CLIENT_CENTER_URL
      || "",
  ).trim().replace(/\/$/, "");
}

export async function POST(request) {
  const baseUrl = apiBaseUrl();

  if (!baseUrl) {
    return Response.json(
      { ok: false, error: "Support delivery is not configured right now." },
      { status: 503 },
    );
  }

  try {
    const formData = await request.formData();
    const response = await fetch(`${baseUrl}/api/support/contact`, {
      method: "POST",
      body: formData,
      cache: "no-store",
    });
    const data = await response.json().catch(() => ({}));

    return Response.json(data, { status: response.status });
  } catch (error) {
    console.error("Unable to deliver ARK support request", error);
    return Response.json(
      { ok: false, error: "Your request could not be submitted right now." },
      { status: 502 },
    );
  }
}
