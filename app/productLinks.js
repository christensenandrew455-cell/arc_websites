export const demoPhone = String(process.env.NEXT_PUBLIC_DEMO_PHONE || "+17742316164").trim();
export const demoPhoneHref = demoPhone
  ? `tel:${demoPhone.replace(/[^+\d]/g, "")}`
  : "";
const demoDigits = demoPhone.replace(/\D/g, "").replace(/^1(?=\d{10}$)/, "");
export const demoPhoneDisplay = /^\d{10}$/.test(demoDigits)
  ? `${demoDigits.slice(0, 3)}-${demoDigits.slice(3, 6)}-${demoDigits.slice(6)}`
  : demoPhone;

const clientCenterUrl = String(
  process.env.NEXT_PUBLIC_CLIENT_CENTER_URL || "https://www.arkclientcenter.com",
).trim().replace(/\/+$/, "");

export const clientCenterSignupUrl = String(
  process.env.NEXT_PUBLIC_CLIENT_CENTER_SIGNUP_URL || `${clientCenterUrl}/signup`,
).trim();
