import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { AppStoreRedirect } from "../components/AppStoreRouting";

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <SiteHeader />
      <section className="border-b border-slate-200 bg-gradient-to-b from-orange-50 to-white px-4 py-14 text-center sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">Get the app</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">How to install ARK Client Center</h1>
          <AppStoreRedirect />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-16">
        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-3xl border border-orange-200 bg-orange-50 p-6 sm:p-8">
            <h2 className="text-3xl font-black">Android</h2>
            <p className="mt-4 text-lg font-semibold leading-8 text-slate-700">Open Google Play, search for “ARK Client Center,” and tap Install.</p>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h2 className="text-3xl font-black">iPhone or iPad</h2>
            <p className="mt-4 text-lg font-semibold leading-8 text-slate-700">Open the App Store, search for “ARK Client Center,” and tap Get.</p>
          </article>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
