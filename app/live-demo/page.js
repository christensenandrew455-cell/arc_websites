import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import TopicNav from "../components/TopicNav";
import { GetAppLink } from "../components/AppStoreRouting";
import { demoPhone, demoPhoneHref } from "../productLinks";

export const metadata = {
  title: "Live Demo",
  description: "Call the ARK receptionist demo with a sample estimate request and hear how the conversation works for yourself.",
};

const scenarios = [
  {
    title: "Painting estimate",
    prompt: "I need three rooms painted next week. One room is currently dark blue.",
  },
  {
    title: "Landscaping request",
    prompt: "I need spring cleanup and new mulch at my house. Friday afternoon would be best.",
  },
  {
    title: "A business question",
    prompt: "What areas do you serve, and can I also request an estimate while I am here?",
  },
];

const listenFor = [
  "Does it understand what service you need?",
  "Does it ask for the missing details one at a time?",
  "Can you correct or change an answer naturally?",
  "Does it summarize the request before submitting it?",
  "Does it ask whether you have another question before ending?",
];

export default function LiveDemoPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <SiteHeader />

      <section className="relative overflow-hidden bg-orange-600 px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-8">
        <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full border-[55px] border-white/10" />
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-100">Live receptionist demo</p>
          <h1 className="mt-4 text-5xl font-black leading-[0.96] tracking-[-0.045em] sm:text-7xl">Do not take our word for it. Call it.</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg font-semibold leading-8 text-orange-50 sm:text-xl">Pretend you are a customer, make up an estimate request, and test how ARK handles the conversation.</p>
          {demoPhoneHref ? (
            <a href={demoPhoneHref} className="mt-8 inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-black text-slate-950 shadow-xl transition hover:-translate-y-0.5 hover:bg-orange-50 sm:w-auto">Call the Demo: {demoPhone}</a>
          ) : (
            <Link href="/support" className="mt-8 inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-black text-slate-950 shadow-xl transition hover:-translate-y-0.5 hover:bg-orange-50 sm:w-auto">Ask for the Demo Number</Link>
          )}
          <p className="mt-4 text-sm font-bold text-orange-100">The demo button calls the receptionist. It does not send you to an app store.</p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">Try a sample call</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">You do not need to know what to say.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Pick one of these examples, use made-up customer information, and let the receptionist guide you from there.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {scenarios.map((scenario) => (
              <article key={scenario.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
                <h3 className="text-2xl font-black">{scenario.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">“{scenario.prompt}”</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-950 px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-400">What to listen for</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Test the parts that matter to your business.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">Do more than hear the voice. Pay attention to whether the conversation produces information you could actually use.</p>
          </div>
          <ol className="space-y-3">
            {listenFor.map((item, index) => (
              <li key={item} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 font-black">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-orange-500 text-sm text-slate-950">{index + 1}</span>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          <article className="rounded-3xl border border-orange-200 bg-orange-50 p-7">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-orange-700">Push it a little</p>
            <h2 className="mt-3 text-2xl font-black">Change an answer halfway through.</h2>
            <p className="mt-4 leading-7 text-slate-600">Correct the address, choose a different day, or add another project detail and see how the conversation recovers.</p>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Keep it fictional</p>
            <h2 className="mt-3 text-2xl font-black">Use sample information.</h2>
            <p className="mt-4 leading-7 text-slate-600">You are testing the experience, so there is no reason to give a real customer name, private address, or sensitive business information.</p>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Then picture your day</p>
            <h2 className="mt-3 text-2xl font-black">Imagine not stopping for that call.</h2>
            <p className="mt-4 leading-7 text-slate-600">The caller gets helped while you stay focused, and the useful details wait for you in the client center.</p>
          </article>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-orange-50 px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">Heard enough?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">The app download is a separate next step when you are ready to use ARK for your business.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <GetAppLink className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-orange-600 px-7 py-3.5 font-black text-white transition hover:bg-orange-700 sm:w-auto">Get the App</GetAppLink>
            <Link href="/how-it-works" className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-7 py-3.5 font-black text-slate-950 transition hover:border-orange-400 sm:w-auto">Review How It Works</Link>
          </div>
        </div>
      </section>

      <TopicNav current="/live-demo" />
      <SiteFooter />
    </main>
  );
}
