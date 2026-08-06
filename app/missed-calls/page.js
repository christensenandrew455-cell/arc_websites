import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import TopicNav from "../components/TopicNav";
import OpportunityCalculator from "../components/OpportunityCalculator";
import { GetAppLink } from "../components/AppStoreRouting";
import config from "../homeConfig";

export const metadata = {
  title: "Missed-call Math",
  description: "Use your own missed-call volume and average job value to understand the opportunities ARK can help you capture.",
};

const valueCards = [
  {
    title: "Fewer interruptions",
    body: "You can keep painting, driving, quoting, cleaning, or finishing the job in front of you instead of stopping for every unknown number.",
  },
  {
    title: "Real leads are obvious",
    body: "Instead of a mystery number, you receive the service, customer, address, timing, and notes needed to decide what happens next.",
  },
  {
    title: "Spam stops owning your day",
    body: "ARK takes the first conversation, so you do not have to personally answer every sales call or robocall just in case it is a customer.",
  },
];

export default function MissedCallsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <SiteHeader />

      <section className="border-b border-slate-200 bg-[#fffaf5] px-4 py-14 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">Missed-call math</p>
          <h1 className="mt-4 text-5xl font-black leading-[0.96] tracking-[-0.045em] sm:text-7xl">Put a number behind the calls you cannot answer.</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg font-semibold leading-8 text-slate-700 sm:text-xl">You already know how many calls you miss and roughly what a job is worth. Start there, then decide whether letting those opportunities disappear makes sense.</p>
          <Link href="/" className="mt-7 inline-flex font-black text-orange-700 underline decoration-2 underline-offset-4">← Back to the quick overview</Link>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-9 max-w-3xl text-center">
            <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">Use your real numbers.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">The result is potential job value behind those calls—not a promise that every caller becomes a customer.</p>
          </div>
          <OpportunityCalculator />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">The honest version</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Not every missed call is a lost job.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Some calls are spam. Some customers will choose somebody else. The point is not to inflate the number—it is to show how much opportunity enters through the phone before you ever get a chance to qualify it.</p>
          </div>
          <div className="rounded-[2rem] border border-orange-200 bg-orange-50 p-6 sm:p-9">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-orange-700">A realistic example—not a guarantee</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                ["12", "calls went unanswered"],
                ["6", "were real estimate requests"],
                ["3", "became booked jobs"],
              ].map(([number, label]) => (
                <div key={label} className="rounded-2xl bg-white p-5 text-center ring-1 ring-inset ring-orange-200">
                  <p className="text-4xl font-black text-slate-950">{number}</p>
                  <p className="mt-2 text-sm font-bold leading-6 text-slate-600">{label}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-lg font-black text-slate-950">At $1,200 per job, that example represents $3,600 in booked work.</p>
            <p className="mt-2 text-center text-sm leading-6 text-slate-600">Your lead quality, close rate, and average job value will be different. Use the calculator above for your business.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">The value is not only the job you might save.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {valueCards.map((card) => (
              <article key={card.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="text-2xl font-black">{card.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-orange-200 bg-orange-50 p-7 sm:p-12">
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">See what happens when ARK answers.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">Follow a call from the first hello to the organized lead waiting in your app.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/how-it-works" className={config.theme.secondaryButton}>See How It Works</Link>
            <GetAppLink className={config.theme.button}>Get the App</GetAppLink>
          </div>
        </div>
      </section>

      <TopicNav current="/missed-calls" />
      <SiteFooter />
    </main>
  );
}
