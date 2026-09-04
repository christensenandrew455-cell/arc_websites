import Link from "next/link";
import GetStartedLink from "../components/GetStartedLink";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { demoPhoneDisplay, demoPhoneHref } from "../productLinks";

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <SiteHeader />

      <section className="border-b border-orange-200 bg-orange-50 px-4 py-16 text-center sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-700">Live demo</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">Call this number and see what you think.</h1>
          <a
            href={demoPhoneHref}
            className="mt-8 inline-flex min-h-16 w-full items-center justify-center rounded-2xl bg-slate-950 px-7 py-5 text-3xl font-black text-white transition hover:bg-slate-800 sm:w-auto sm:text-4xl"
          >
            {demoPhoneDisplay}
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <h2 className="text-3xl font-black tracking-tight sm:text-5xl">Test it however you want.</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            "Pretend to be one of your customers.",
            "Ask the kinds of questions your customers ask.",
            "Try to throw it off and see how it handles the call.",
          ].map((item) => (
            <article key={item} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <p className="text-2xl font-black leading-tight">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-orange-200 bg-orange-50 px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-black tracking-tight sm:text-6xl">Like it? Get started.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-bold leading-8 text-slate-600">If not, tell us what could be better. We’re always improving.</p>
          <div className="mx-auto mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
            <GetStartedLink className="inline-flex min-h-14 items-center justify-center rounded-xl bg-slate-950 px-7 py-4 text-lg font-black text-white transition hover:-translate-y-0.5 hover:bg-orange-600" />
            <Link href="/support?topic=feedback" className="inline-flex min-h-14 items-center justify-center rounded-xl border border-orange-300 bg-white px-7 py-4 text-lg font-black text-slate-950 transition hover:-translate-y-0.5 hover:border-orange-500">
              Give Feedback
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
