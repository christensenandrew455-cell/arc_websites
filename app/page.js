import Link from "next/link";
import GetStartedLink from "./components/GetStartedLink";
import InfoTip from "./components/InfoTip";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

const callSteps = [
  {
    label: "Answer",
    title: "ARK picks up",
    detail: "The receptionist answers with your business information.",
  },
  {
    label: "Ask",
    title: "The caller explains the job",
    detail: "ARK gathers the service, address, preferred time, and notes.",
  },
  {
    label: "Send",
    title: "You get the request",
    detail: "Review it when you have time, then accept or decline it.",
  },
];

const customizationOptions = [
  "Business name and details",
  "Business type",
  "Services you offer",
  "Service area",
  "Days and hours",
  "Emergency availability",
  "Extra information callers should know",
];

const testimonials = [
  {
    name: "Taper Painting",
    type: "Painting",
    quote: "I’m working when the notifications come in. I keep going until my break, look through the requests, decide which ones are worth my time, and get right back to work. I don’t have to stop and answer every call anymore.",
  },
  {
    name: "Robert",
    type: "Emergency electrical work",
    quote: "Even with a small business, an emergency call could get blocked by spam or someone trying to sell me something. ARK can answer more than one call at a time, so the real emergencies can get through instead of landing in voicemail.",
  },
  {
    name: "Zahara",
    type: "Plumbing business owner",
    quote: "I run a small plumbing business with two employees. I accept the lead, find a time that works while I get to know the customer, and send the saved details to my employees. I don’t have to dig through texts or remember what was said on the call.",
  },
];

const plans = [
  { name: "Starter", price: "$24.99", leads: 25 },
  { name: "Standard", price: "$47.49", leads: 50 },
  { name: "Growth", price: "$89.99", leads: 100 },
  { name: "Scale", price: "$169.99", leads: 200 },
];

function SectionMarker({ number, label }) {
  return (
    <div className="mb-6 flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-orange-700">
      <span className="grid h-8 w-8 place-items-center rounded-full bg-orange-100 text-orange-700">{number}</span>
      <span>{label}</span>
      <span className="h-px flex-1 bg-orange-200" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-950">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-orange-200 bg-[#fff8ef] px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.18),transparent_34%),radial-gradient(circle_at_85%_35%,rgba(15,23,42,0.08),transparent_28%)]" />
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-orange-700">AI receptionist for service businesses</p>
          <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.05em] text-slate-950 sm:text-7xl lg:text-[5.25rem]">ARK answers. You keep working.</h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl font-black leading-8 text-slate-700 sm:text-2xl">Get the request. Choose what happens next.</p>
          <div className="mx-auto mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
            <GetStartedLink className="inline-flex min-h-14 items-center justify-center rounded-xl bg-slate-950 px-7 py-4 text-lg font-black text-white transition hover:-translate-y-0.5 hover:bg-orange-600" />
            <Link href="/demo" className="inline-flex min-h-14 items-center justify-center rounded-xl border border-orange-300 bg-white px-7 py-4 text-lg font-black text-slate-950 transition hover:-translate-y-0.5 hover:border-orange-500">
              Try a Live Demo
            </Link>
          </div>
        </div>
      </section>

      <section id="how-calls-work" className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionMarker number="01" label="How each call is handled" />
          <div className="grid gap-5 lg:grid-cols-3">
            {callSteps.map((step, index) => (
              <article key={step.title} className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-[0_18px_50px_-38px_rgba(15,23,42,0.5)] sm:p-8">
                <span className="absolute right-6 top-5 text-6xl font-black text-slate-200">{index + 1}</span>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-700">{step.label}</p>
                <h3 className="relative mt-4 text-3xl font-black leading-tight tracking-tight text-slate-950">{step.title}</h3>
                <p className="relative mt-4 text-lg font-semibold leading-7 text-slate-600">{step.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="customize" className="scroll-mt-24 border-y border-orange-200 bg-orange-50 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionMarker number="02" label="What your business can customize" />
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">Set it up for your business.</h2>
              <p className="mt-5 text-lg font-bold leading-8 text-slate-600">You choose the information ARK uses on every call.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {customizationOptions.map((option) => (
                <article key={option} className="flex min-h-20 items-center gap-4 rounded-2xl border border-orange-200 bg-white p-5 shadow-sm">
                  <span aria-hidden="true" className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-slate-950 text-base font-black text-orange-400">✓</span>
                  <h3 className="text-lg font-black leading-6 text-slate-950">{option}</h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionMarker number="03" label="From business owners" />
          <h2 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">What it’s like day to day.</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.name} className="flex h-full flex-col rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-[0_18px_50px_-38px_rgba(15,23,42,0.5)] sm:p-8">
                <div>
                  <p className="text-2xl font-black text-slate-950">{testimonial.name}</p>
                  <p className="mt-1 text-xs font-black uppercase tracking-[0.16em] text-orange-700">{testimonial.type}</p>
                </div>
                <p className="mt-6 text-lg font-semibold leading-8 text-slate-700">“{testimonial.quote}”</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="scroll-mt-24 border-t border-orange-200 bg-orange-50 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionMarker number="04" label="Pricing" />
          <div className="max-w-4xl">
            <h2 className="text-4xl font-black tracking-tight sm:text-6xl">Pick a monthly lead limit.</h2>
            <p className="mt-4 text-lg font-bold leading-8 text-slate-600">Calls are included. Only accepted leads count.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {plans.map((plan) => (
              <article key={plan.name} className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-lg">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-400">{plan.name}</p>
                <p className="mt-4 text-4xl font-black">{plan.price}<span className="text-sm text-slate-400"> / month</span></p>
                <p className="mt-4 text-xl font-black">{plan.leads} accepted leads</p>
              </article>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3 rounded-3xl border border-orange-200 bg-orange-50 p-5 text-sm font-black text-slate-950 sm:p-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
              Accepted lead
              <InfoTip label="What counts as an accepted lead">One request counts once when you tap Accept. Calls, declines, edits, and deletions do not count.</InfoTip>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
              Extra leads: $1 each
              <InfoTip label="About extra leads" align="right">Extra leads are for the current billing period and expire at your next reset.</InfoTip>
            </span>
          </div>
        </div>
      </section>

      <section className="border-t border-orange-200 bg-orange-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-orange-700">Learn more</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">See how ARK works.</h2>
          <Link href="/about" className="mt-8 inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-slate-950 px-7 py-4 text-lg font-black text-white transition hover:-translate-y-0.5 hover:bg-slate-800 sm:w-auto">
            About ARK
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
