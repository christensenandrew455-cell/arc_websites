import Link from "next/link";
import InfoTip from "./components/InfoTip";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

const featureCards = [
  {
    label: "Calls",
    title: "Calls answered",
    detail: "ARK handles the first conversation.",
  },
  {
    label: "Intake",
    title: "Details together",
    detail: "Get the service, address, preferred time, and notes.",
  },
  {
    label: "Decision",
    title: "You choose",
    detail: "Accept or decline each request.",
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
        </div>
      </section>

      <section id="what-you-get" className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionMarker number="01" label="What you get" />
          <div className="grid gap-5 lg:grid-cols-3">
            {featureCards.map((feature, index) => (
              <article key={feature.title} className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-[0_18px_50px_-38px_rgba(15,23,42,0.5)] sm:p-8">
                <span className="absolute right-6 top-5 text-6xl font-black text-slate-200">{index + 1}</span>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-700">{feature.label}</p>
                <h3 className="relative mt-4 text-3xl font-black leading-tight tracking-tight text-slate-950">{feature.title}</h3>
                <p className="relative mt-4 text-lg font-semibold leading-7 text-slate-600">{feature.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-24 border-y border-orange-200 bg-orange-50 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionMarker number="02" label="The handoff" />
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">From call to lead.</h2>
                <InfoTip label="About requested times">The caller picks a preferred day and a morning or afternoon window. It is not booked until you confirm it.</InfoTip>
              </div>
            </div>
            <div className="grid gap-4">
              {[
                "A customer calls your ARK number.",
                "ARK collects the request.",
                "You accept or decline it.",
              ].map((title, index) => (
                <article key={title} className="grid grid-cols-[3.5rem_1fr] items-center gap-5 rounded-3xl border border-orange-200 bg-white p-5 shadow-sm sm:p-6">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-slate-950 text-2xl font-black text-orange-400">{index + 1}</span>
                  <h3 className="text-2xl font-black leading-tight text-slate-950 sm:text-3xl">{title}</h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionMarker number="03" label="Pricing" />
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
