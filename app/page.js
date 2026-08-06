import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import OpportunityCalculator from "./components/OpportunityCalculator";
import config from "./homeConfig";

const featureCards = [
  {
    label: "Calls",
    title: "Calls get answered while you keep working.",
    detail: "ARK handles the first conversation so the job in front of you keeps moving.",
  },
  {
    label: "Leads",
    title: "Real lead details show up in one place.",
    detail: "See who called, what they need, where the job is, and when they want help.",
  },
  {
    label: "Focus",
    title: "Spam and sales calls stop wasting your time.",
    detail: "Unknown callers do not get to control your workday anymore.",
  },
  {
    label: "Team",
    title: "Send the right lead to the right employee.",
    detail: "Pass the next step to someone on your team without losing the details.",
  },
];

const conversation = [
  ["customer", "Hi, I need an estimate for painting three rooms."],
  ["business", "Absolutely. What address is the project at?"],
  ["customer", "18 Maple Street. The living room and two bedrooms."],
  ["business", "Thanks. Are the walls currently a dark color or light color?"],
  ["customer", "Two are light gray and one is dark blue."],
  ["business", "Got it. Are you looking for walls only, or ceilings and trim too?"],
  ["customer", "Walls and trim. Maybe the ceilings depending on price."],
  ["business", "No problem. What day would be best for an estimate?"],
  ["customer", "Tuesday after 2 would be ideal, but Wednesday morning works too."],
  ["business", "Tuesday at 2:30 is available. Would you like me to hold that time?"],
  ["customer", "Yes please."],
  ["business", "Perfect. What is the best name and email for the estimate?"],
  ["customer", "Jordan Reed, jordan@example.com."],
  ["business", "Thanks, Jordan. I have Tuesday at 2:30 for 18 Maple Street."],
  ["customer", "Great. Do I need to move furniture before then?"],
  ["business", "Not for the estimate. The painter can review access and prep with you on site."],
  ["customer", "Sounds good. There are a few small drywall spots too."],
  ["business", "I added that to the notes so the painter can look at them."],
  ["customer", "Thank you."],
  ["business", "You are all set. The business will follow up through this number if anything changes."],
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
    <main className={`${config.font} min-h-screen ${config.theme.pageBg} ${config.theme.pageText}`}>
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-orange-200 bg-[#fff8ef] px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.18),transparent_34%),radial-gradient(circle_at_85%_35%,rgba(15,23,42,0.08),transparent_28%)]" />
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-orange-700">AI receptionist for service businesses</p>
          <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.05em] text-slate-950 sm:text-7xl lg:text-[5.25rem]">Keep working. ARK answers first.</h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl font-black leading-8 text-slate-700 sm:text-2xl">Stop answering calls that waste your time. Get the real leads in your app.</p>
        </div>
      </section>

      <section id="missed-call-math" className="scroll-mt-24 bg-slate-950 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionMarker number="01" label="The problem" tone="dark" />
          <h2 className="mb-8 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl">What could missed calls be costing you?</h2>
          <OpportunityCalculator />
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionMarker number="02" label="The solution" />
          <div className="max-w-3xl">
            <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">What you get</h2>
            <p className="mt-4 text-lg font-bold leading-8 text-slate-600">The things a business owner actually needs after a call comes in.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {featureCards.map((feature, index) => (
              <article key={feature.title} className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-[0_18px_50px_-38px_rgba(15,23,42,0.5)] sm:p-8">
                <span className="absolute right-6 top-5 text-6xl font-black text-slate-200">{index + 1}</span>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-700">{feature.label}</p>
                <h3 className="relative mt-4 max-w-xl text-3xl font-black leading-tight tracking-tight text-slate-950">{feature.title}</h3>
                <p className="relative mt-4 max-w-xl text-lg font-semibold leading-7 text-slate-600">{feature.detail}</p>
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
              <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">A call comes in. A lead comes out.</h2>
              <p className="mt-5 max-w-xl text-lg font-bold leading-8 text-slate-600">One simple path from a ringing phone to something you can act on.</p>
            </div>
            <div className="grid gap-4">
              {["Customer calls.", "ARK gets the details.", "You choose what happens next."].map((title, index) => (
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
          <SectionMarker number="04" label="The cost" />
          <div className="max-w-3xl">
            <h2 className="text-4xl font-black tracking-tight sm:text-6xl">Simple pricing</h2>
            <p className="mt-4 text-lg font-bold leading-8 text-slate-600">See the base price and the only usage charges that matter.</p>
          </div>
          <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 text-white shadow-2xl">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
              <div className="border-b border-slate-800 p-8 lg:border-b-0 lg:border-r">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-400">Base plan</p>
                <p className="mt-4 text-6xl font-black">$50<span className="text-xl text-slate-400">/month</span></p>
              </div>
              <div className="grid sm:grid-cols-3">
                {[["$2", "per call lead"], ["$1", "to start texting"], ["$1", "per 50 segments"]].map(([price, unit]) => <div key={unit} className="border-b border-slate-800 p-7 text-center last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"><p className="text-4xl font-black">{price}</p><p className="mt-2 text-xl font-black text-orange-400">{unit}</p></div>)}
              </div>
            </div>
          </div>

          <details className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-3xl border border-orange-200 bg-orange-50">
            <summary className="cursor-pointer list-none p-6 text-xl font-black sm:p-8">What do 50 message segments look like?</summary>
            <div className="border-t border-orange-200 p-4 sm:p-8">
              <p className="mb-4 text-center text-sm font-black text-orange-700">Scroll down to see the full example ↓</p>
              <div className="mx-auto max-h-[34rem] max-w-md overflow-y-auto rounded-[2.25rem] border-[10px] border-slate-950 bg-white p-4 shadow-xl">
                <div className="space-y-3">
                  {conversation.map(([side, message], index) => (
                    <div key={`${side}-${index}`} className={side === "business" ? "ml-10 rounded-2xl rounded-tr-sm bg-orange-600 p-3 text-sm font-semibold leading-6 text-white" : "mr-10 rounded-2xl rounded-tl-sm bg-slate-100 p-3 text-sm leading-6 text-slate-700"}>{message}</div>
                  ))}
                </div>
              </div>
            </div>
          </details>
        </div>
      </section>

      <section className="border-t border-orange-200 bg-orange-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-orange-700">One more step</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">Want to learn more?</h2>
          <Link href="/about" className="mt-8 inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-slate-950 px-7 py-4 text-lg font-black text-white transition hover:-translate-y-0.5 hover:bg-slate-800 sm:w-auto">
            Learn More
          </Link>
          <p className="mt-8 text-2xl font-black text-slate-600">Or</p>
          <div className="mx-auto mt-5 flex w-32 flex-col items-center" aria-hidden="true">
            <span className="h-12 w-4 rounded-full bg-orange-600" />
            <span className="-mt-1 block h-16 w-16 rotate-45 border-b-[14px] border-r-[14px] border-orange-600" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
