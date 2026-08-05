const clientCenterBase = String(
  process.env.NEXT_PUBLIC_CLIENT_CENTER_URL || "https://ark-websites-ocm-xi.vercel.app",
).replace(/\/$/, "");

export const clientCenterUrl = clientCenterBase;
export const signupUrl = `${clientCenterBase}/signup`;
export const loginUrl = `${clientCenterBase}/login`;
export const demoPhone = String(process.env.NEXT_PUBLIC_DEMO_PHONE || "").trim();
export const demoPhoneHref = demoPhone
  ? `tel:${demoPhone.replace(/[^+\d]/g, "")}`
  : "";
