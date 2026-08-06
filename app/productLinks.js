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
const androidStoreSearchUrl = "https://play.google.com/store/search?q=ARK%20Client%20Center&c=apps";
const iosStoreSearchUrl = "https://apps.apple.com/us/search?term=ARK%20Client%20Center";

export const androidDownloadUrl = String(process.env.NEXT_PUBLIC_ANDROID_DOWNLOAD_URL || androidStoreSearchUrl).trim();
export const iosDownloadUrl = String(process.env.NEXT_PUBLIC_IOS_DOWNLOAD_URL || iosStoreSearchUrl).trim();
