import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import TopicNav from "../components/TopicNav";
import { GetAppLink } from "../components/AppStoreRouting";

export const metadata = {
  title: "How It Works",
  description: "See how ARK answers a customer, collects an estimate request, confirms the details, and sends an organized lead to your app.",
};

const stages = [
  {
    number: "01",
    title: "The customer calls your ARK business number.",
    body: "You keep working. ARK starts the conversation and finds out whether the caller needs an estimate request or has a question about the business.",
  },
  {
    number: "02",
    title: "ARK gathers the information you need.",
    body: "For an estimate request, the receptionist collects the service, customer name, project address, preferred date and time, optional notes, and permission to be contacted.",
  },
  {
    number: "03",
    title: "The caller confirms the summary.",
    body: "Before anything is submitted, ARK reads the important details back and asks for a clear yes or no. The caller can correct something before the lead reaches you.",
  },
  {
    number: "04",
    title: "A complete lead appears in your app.",
    body: "You can review it, accept the customer, add an estimate time, continue the conversation through the business number, or assign the next step to an approved employee.",
  },
];

const collected = [
  "Requested service",
  "Customer name",
  "Project address",
  "Preferred date and time",
  "Additional notes when needed",
  "Permission for your business to follow up",
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <SiteHeader />

      <section className="border-b border-slate-200 bg-[#fffaf5] px-4 py-14 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">How it works</p>
          <h1 className="mt-4 text-5xl font-black leading-[0.96] tracking-[-0.045em] sm:text-7xl">A call comes in. A useful lead comes out.</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg font-semibold leading-8 text-slate-700 sm:text-xl">ARK handles the first conversation without forcing you to stop the job, take notes, or hand out your personal number.</p>
          <Link href="/" className="mt-7 inline-flex font-black text-orange-700 underline decoration-2 underline-offset-4">← Back to the quick overview</Link>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2">
            {stages.map((stage) => (
              <article key={stage.number} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 sm:p-8">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-slate-950 text-sm font-black text-orange-400">{stage.number}</span>
                <h2 className="mt-6 text-3xl font-black tracking-tight">{stage.title}</h2>
                <p className="mt-4 leading-7 text-slate-600">{stage.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-950 px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-400">What reaches you</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">No mystery number. No half-finished voicemail.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">The lead is organized around the questions you would have needed to ask anyway.</p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {collected.map((item) => (
              <li key={item} className="flex min-h-20 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 font-black">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-orange-500 text-sm text-slate-950">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="rounded-[2rem] border border-orange-200 bg-orange-50 p-7 sm:p-9">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-700">For the caller</p>
            <h2 className="mt-3 text-3xl font-black">A normal conversation, not a long form.</h2>
            <p className="mt-4 leading-7 text-slate-600">The customer explains what they need in their own words. ARK asks the next useful question, allows corrections, summarizes the request, and confirms it before submission.</p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 sm:p-9">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">For your business</p>
            <h2 className="mt-3 text-3xl font-black">You still decide what happens next.</h2>
            <p className="mt-4 leading-7 text-slate-600">ARK handles intake. You decide which leads to accept, when to schedule an estimate, what to say next, and which employee should take over.</p>
          </div>
        </div>
      </section>

      <section className="bg-orange-600 px-4 py-16 text-center text-white sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-black tracking-tight sm:text-6xl">The best way to understand it is to call it.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-orange-50">Use a sample estimate request, change one detail, and listen for the final confirmation.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/live-demo" className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-white px-7 py-3.5 font-black text-slate-950 transition hover:bg-orange-50 sm:w-auto">Try the Live Demo</Link>
            <GetAppLink className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-white/30 bg-orange-700 px-7 py-3.5 font-black text-white transition hover:bg-orange-800 sm:w-auto">Get the App</GetAppLink>
          </div>
        </div>
      </section>

      <TopicNav current="/how-it-works" />
      <SiteFooter />
    </main>
  );
}
