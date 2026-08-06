import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import config from "../homeConfig";
import { demoPhone, demoPhoneHref, loginUrl, signupUrl } from "../productLinks";

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
  const androidUrl = process.env.NEXT_PUBLIC_ANDROID_DOWNLOAD_URL || "";
  const iosUrl = process.env.NEXT_PUBLIC_IOS_DOWNLOAD_URL || "";

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <SiteHeader />
      <section className="border-b border-orange-200 bg-gradient-to-b from-orange-50 to-white px-4 py-10 text-center sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">Get started</p>
          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Open ARK Client Center.</h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">Use the web app now. Mobile store downloads can be added here when their listings are ready.</p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-4 px-3 py-6 sm:space-y-5 sm:px-6 sm:py-14">
        <section className="rounded-3xl border border-orange-300 bg-orange-50 p-4 shadow-sm sm:p-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-600">Available now</p>
          <h2 className="mt-2 text-2xl font-black">Web app</h2>
          <p className="mt-3 leading-7 text-slate-600">Create an owner account to start setup, or sign in if your business already has an account.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href={signupUrl} className={config.theme.button}>Start Setup</a>
            <a href={loginUrl} className={config.theme.secondaryButton}>Existing Customer Sign In</a>
          </div>
        </section>

        <section id="live-demo" className="scroll-mt-24 rounded-3xl border border-orange-200 bg-white p-4 shadow-sm sm:p-8">
          <h2 className="text-2xl font-black">Try the live receptionist</h2>
          <p className="mt-3 leading-7 text-slate-600">Call the demo number to hear the receptionist handle a real conversation before you sign up.</p>
          {demoPhoneHref ? (
            <a href={demoPhoneHref} className={`mt-6 ${config.theme.button}`}>Call {demoPhone}</a>
          ) : (
            <span className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-slate-300 bg-slate-50 px-5 py-3 text-center text-sm font-black text-slate-500 sm:w-auto">Live demo number coming soon</span>
          )}
        </section>

        <div className="grid gap-5 md:grid-cols-2">
          <StoreOption title="Android" description="Install ARK Client Center from Google Play when the official listing becomes available." href={androidUrl} label="Open Google Play" />
          <StoreOption title="iPhone and iPad" description="Install ARK Client Center from the App Store when the official listing becomes available." href={iosUrl} label="Open App Store" />
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
