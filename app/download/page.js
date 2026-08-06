import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { AppStoreRedirect } from "../components/AppStoreRouting";
import config from "../homeConfig";
import { androidDownloadUrl, iosDownloadUrl } from "../productLinks";

function StoreOption({ title, description, href, label }) {
  return (
    <article className="rounded-3xl border border-orange-200 bg-white p-4 shadow-sm sm:p-8">
      <h2 className="text-2xl font-black">{title}</h2>
      <p className="mt-3 leading-7 text-slate-600">{description}</p>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={`mt-6 ${config.theme.secondaryButton}`}>
          {label}
        </a>
      ) : (
        <span className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-slate-300 bg-slate-50 px-5 py-3 text-center text-sm font-black text-slate-500 sm:w-auto">Store listing coming soon</span>
      )}
    </article>
  );
}

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <SiteHeader />
      <section className="border-b border-slate-200 bg-gradient-to-b from-orange-50 to-white px-4 py-12 text-center sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">Get the app</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">Install ARK Client Center.</h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">On Android or iPhone, this page opens the correct store automatically. Desktop visitors can choose a store below, then continue on their phone.</p>
          <AppStoreRedirect />
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-3 py-8 sm:px-6 sm:py-16">
        <div className="grid gap-5 md:grid-cols-2">
          <StoreOption title="Android" description="Install ARK Client Center from Google Play. If needed, search for “ARK Client Center” in the store." href={androidDownloadUrl} label="Open Google Play" />
          <StoreOption title="iPhone and iPad" description="Install ARK Client Center from the App Store. If needed, search for “ARK Client Center” in the store." href={iosDownloadUrl} label="Open App Store" />
        </div>

        <section className="mt-6 rounded-3xl bg-slate-950 p-6 text-white sm:p-9">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-400">Search the store</p>
          <h2 className="mt-2 text-2xl font-black sm:text-3xl">Look for “ARK Client Center.”</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">If you opened this page on a computer, switch to your phone, open Google Play or the App Store, and search the exact app name above.</p>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
