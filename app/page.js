import Link from "next/link";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

const featureCards = [
  {
    label: "Calls",
    title: "Calls get answered while you keep working.",
    detail: "ARK handles the first conversation without asking you to stop the job in front of you.",
  },
  {
    label: "Intake",
    title: "The useful details arrive together.",
    detail: "Review the requested service, project address, preferred day and time window, and project notes.",
  },
  {
    label: "Decision",
    title: "You decide which requests become clients.",
    detail: "Accept or decline each request. Only a request you accept uses your monthly accepted-lead allowance.",
  },
];

const plans = [
  { name: "Starter", price: "$24.99", leads: 25, fit: "Just getting going" },
  { name: "Standard", price: "$47.49", leads: 50, fit: "Established small business" },
  { name: "Growth", price: "$89.99", leads: 100, fit: "Higher-volume business" },
  { name: "Scale", price: "$169.99", leads: 200, fit: "Very high lead volume" },
];

function SectionMarker({ number, label, tone = "light" }) {
  const dark = tone === "dark";
  return (
    <div className={`mb-6 flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] ${dark ? "text-orange-300" : "text-orange-700"}`}>
      <span className={`grid h-8 w-8 place-items-center rounded-full ${dark ? "bg-white/10 text-white" : "bg-orange-100 text-orange-700"}`}>{number}</span>
      <span>{label}</span>
      <span className={`h-px flex-1 ${dark ? "bg-white/15" : "bg-orange-200"}`} />
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
          <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.05em] text-slate-950 sm:text-7xl lg:text-[5.25rem]">Keep working. ARK answers first.</h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl font-black leading-8 text-slate-700 sm:text-2xl">ARK gathers the service-request details. You review the lead and choose what happens next.</p>
        </div>
      </section>

      <section id="why-ark" className="scroll-mt-24 bg-slate-950 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionMarker number="01" label="Why ARK" tone="dark" />
          <h2 className="max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl">A ringing phone should not decide whether the work in front of you gets finished.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["Stay on the job", "ARK answers the incoming call and guides the caller through one service request."],
              ["Get complete context", "The request is delivered only after the required details and caller consent are collected."],
              ["Pay for accepted leads", "Calls and declined requests do not use the monthly accepted-lead allowance."],
            ].map(([title, detail]) => (
              <article key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-7">
                <h3 className="text-2xl font-black text-white">{title}</h3>
                <p className="mt-3 text-base font-semibold leading-7 text-slate-300">{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionMarker number="02" label="What you get" />
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
          <SectionMarker number="03" label="The handoff" />
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">A call comes in. A reviewable lead comes out.</h2>
              <p className="mt-5 max-w-xl text-lg font-bold leading-8 text-slate-600">ARK records a preferred day and broad morning or afternoon window. If you accept the request, you follow up to confirm the exact date and time.</p>
            </div>
            <div className="grid gap-4">
              {[
                "The customer calls your ARK number.",
                "ARK collects the required service-request details.",
                "You review the request and accept or decline it.",
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
          <SectionMarker number="04" label="Pricing" />
          <div className="max-w-4xl">
            <h2 className="text-4xl font-black tracking-tight sm:text-6xl">Choose how many leads you expect to accept.</h2>
            <p className="mt-4 text-lg font-bold leading-8 text-slate-600">Every plan includes ARK Client Center and the AI receptionist. Calls do not count toward the plan.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {plans.map((plan) => (
              <article key={plan.name} className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-lg">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-400">{plan.name}</p>
                <p className="mt-4 text-4xl font-black">{plan.price}<span className="text-sm text-slate-400"> / month</span></p>
                <p className="mt-4 text-xl font-black">{plan.leads} accepted leads</p>
                <p className="mt-2 text-sm font-semibold text-slate-400">{plan.fit}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 rounded-3xl border border-orange-200 bg-orange-50 p-6 text-base font-semibold leading-7 text-slate-700 sm:p-8">
            <p><strong className="text-slate-950">What counts:</strong> one unique service request counts only when the owner taps Accept. Repeated taps, calls, declines, edits, and deletions do not count.</p>
            <p className="mt-3"><strong className="text-slate-950">Need more:</strong> additional accepted leads cost $1 each for the current billing period and expire at the next allowance reset.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-orange-200 bg-orange-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-orange-700">Learn more</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">See what ARK does—and what stays in your hands.</h2>
          <Link href="/about" className="mt-8 inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-slate-950 px-7 py-4 text-lg font-black text-white transition hover:-translate-y-0.5 hover:bg-slate-800 sm:w-auto">
            About ARK
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
