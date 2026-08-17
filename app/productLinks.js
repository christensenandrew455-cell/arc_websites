export const demoPhone = String(process.env.NEXT_PUBLIC_DEMO_PHONE || "+17742316164").trim();
export const demoPhoneHref = demoPhone
  ? `tel:${demoPhone.replace(/[^+\d]/g, "")}`
  : "";
const demoDigits = demoPhone.replace(/\D/g, "").replace(/^1(?=\d{10}$)/, "");
export const demoPhoneDisplay = /^\d{10}$/.test(demoDigits)
  ? `${demoDigits.slice(0, 3)}-${demoDigits.slice(3, 6)}-${demoDigits.slice(6)}`
  : demoPhone;
const androidStoreSearchUrl = "https://play.google.com/store/search?q=ARK%20Client%20Center&c=apps";
const iosStoreSearchUrl = "https://apps.apple.com/us/search?term=ARK%20Client%20Center";

export const androidDownloadUrl = String(process.env.NEXT_PUBLIC_ANDROID_DOWNLOAD_URL || androidStoreSearchUrl).trim();
export const iosDownloadUrl = String(process.env.NEXT_PUBLIC_IOS_DOWNLOAD_URL || iosStoreSearchUrl).trim();
