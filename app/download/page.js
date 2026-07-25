import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

function StoreCard({ title, description, href, label }) {
  const available = Boolean(href);
  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
      <h2 className="text-2xl font-black">{title}</h2>
      <p className="mt-3 leading-7 text-slate-300">{description}</p>
      {available ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-black text-slate-950 hover:bg-cyan-300">
          {label}
        </a>
      ) : (
        <span className="mt-6 inline-flex rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-black text-slate-400">
          Store listing coming soon
        </span>
      )}
    </article>
  );
}

export default function DownloadPage() {
  const androidUrl = process.env.NEXT_PUBLIC_ANDROID_DOWNLOAD_URL || "";
  const iosUrl = process.env.NEXT_PUBLIC_IOS_DOWNLOAD_URL || "";
  const webUrl = process.env.NEXT_PUBLIC_CLIENT_CENTER_URL || "https://ark-websites-ocm-xi.vercel.app";

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <SiteHeader />
      <section className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">Get the client center</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-[-0.04em] sm:text-6xl">Choose the version that works for your device.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">The secure web version is available now. App-store buttons will activate when the official Android and iPhone listings are published.</p>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <StoreCard title="Android" description="Install ARK Client Center from the Google Play listing when it becomes available." href={androidUrl} label="Open Google Play" />
            <StoreCard title="iPhone & iPad" description="Install ARK Client Center from the Apple App Store when the iOS listing becomes available." href={iosUrl} label="Open App Store" />
            <article className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-7">
              <h2 className="text-2xl font-black">Secure Web App</h2>
              <p className="mt-3 leading-7 text-slate-200">Open the hosted client center in a modern browser without installing anything.</p>
              <a href={webUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-black text-slate-950 hover:bg-cyan-300">
                Open Client Center
              </a>
            </article>
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-7">
            <h2 className="text-2xl font-black">Before installing</h2>
            <p className="mt-3 leading-7 text-slate-300">Use only an official ARK Client Center download or store listing. Do not install copies sent by unknown accounts or hosted on unrelated websites.</p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
