import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import config from "../homeConfig";

function DownloadOption({ title, description, href, label, featured = false }) {
  return (
    <article className={`rounded-3xl border p-6 sm:p-8 ${featured ? "border-orange-300 bg-orange-50" : "border-orange-200 bg-white shadow-sm"}`}>
      <h2 className="text-2xl font-black">{title}</h2>
      <p className="mt-3 leading-7 text-slate-600">{description}</p>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={`mt-6 ${featured ? config.theme.button : config.theme.secondaryButton}`}>
          {label}
        </a>
      ) : (
        <span className="mt-6 inline-flex rounded-xl border border-slate-300 bg-slate-50 px-5 py-3 text-sm font-black text-slate-500">Store listing coming soon</span>
      )}
    </article>
  );
}

export default function DownloadPage() {
  const androidUrl = process.env.NEXT_PUBLIC_ANDROID_DOWNLOAD_URL || "";
  const iosUrl = process.env.NEXT_PUBLIC_IOS_DOWNLOAD_URL || "";
  const webUrl = process.env.NEXT_PUBLIC_CLIENT_CENTER_URL || "https://ark-websites-ocm-xi.vercel.app";

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <SiteHeader />
      <section className="border-b border-orange-200 bg-gradient-to-b from-orange-50 to-white px-4 py-14 text-center sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">Download</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Open ARK Client Center on your device.</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">Use the secure web version now. The store buttons will become available when the official Android and iPhone listings are published.</p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-5 px-4 py-10 sm:px-6 sm:py-14">
        <DownloadOption title="Secure Web App" description="Open the client center in a modern browser without installing anything." href={webUrl} label="Open Client Center" featured />
        <DownloadOption title="Android" description="Install ARK Client Center from the official Google Play listing when it becomes available." href={androidUrl} label="Open Google Play" />
        <DownloadOption title="iPhone and iPad" description="Install ARK Client Center from the official Apple App Store listing when it becomes available." href={iosUrl} label="Open App Store" />

        <section className="rounded-3xl border border-orange-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-black">Use official downloads only</h2>
          <p className="mt-3 leading-7 text-slate-600">Do not install copies sent by unknown accounts or hosted on unrelated websites. Official download options will always be listed on this page.</p>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
