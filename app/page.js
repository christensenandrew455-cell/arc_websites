import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import OpportunityCalculator from "./components/OpportunityCalculator";
import { GetAppLink } from "./components/AppStoreRouting";
import config from "./homeConfig";
import { demoPhone, demoPhoneHref } from "./productLinks";

const featureCards = [
  {
    eyebrow: "Calls",
    title: "ARK answers first.",
    body: "Keep working while the receptionist handles the first conversation.",
    href: "#how-it-works",
  },
  {
    eyebrow: "Lead intake",
    title: "Get the details, not a mystery number.",
    body: "Name, service, address, timing, and notes arrive together as one lead.",
    href: "#how-it-works",
  },
  {
    eyebrow: "Private number",
    title: "Keep your personal number personal.",
    body: "Customer calls and follow-up texts stay on your ARK business number.",
    href: "#private-number",
  },
  {
    eyebrow: "Your team",
    title: "Send the lead to the right employee.",
    body: "Accept it, message the customer, save the date, or assign the next step.",
    href: "#team",
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

function DemoButton({ className, children }) {
  if (demoPhoneHref) {
    return <a href={demoPhoneHref} className={className}>{children || `Call ${demoPhone}`}</a>;
  }
  return <a href="#live-demo" className={className}>{children || "Try the Live Demo"}</a>;
}

function SectionIntro({ eyebrow, title, body }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-600">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-black tracking-[-0.035em] text-slate-950 sm:text-6xl">{title}</h2>
      {body ? <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">{body}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <main className={`${config.font} min-h-screen ${config.theme.pageBg} ${config.theme.pageText}`}>
      <SiteHeader />

      <section className="relative isolate overflow-hidden border-b border-slate-200 bg-[#fffaf5] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,rgba(249,115,22,0.2),transparent_30%),radial-gradient(circle_at_88%_18%,rgba(15,23,42,0.08),transparent_28%)]" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <div>
            <p className="inline-flex rounded-full border border-orange-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-orange-700 shadow-sm">Built for busy service businesses</p>
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.05em] text-slate-950 sm:text-7xl lg:text-[5.25rem]">Keep working. ARK answers first.</h1>
            <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-slate-700 sm:text-xl">Stop interrupting paid work for spam, sales calls, and unknown numbers. ARK handles the call and sends real leads to your app.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <DemoButton className={config.theme.button}>{demoPhoneHref ? `Call the Demo: ${demoPhone}` : "Try the Live Demo"}</DemoButton>
              <GetAppLink className={config.theme.secondaryButton}>Get the App</GetAppLink>
            </div>
            <div className="mt-7 flex flex-wrap gap-3 text-sm font-black text-slate-700">
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">Real lead details</span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">Private business number</span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">Employee assignment</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-orange-200/50 blur-3xl" />
            <div className="rounded-[2rem] border border-slate-800 bg-slate-950 p-4 shadow-[0_40px_100px_-35px_rgba(15,23,42,0.75)] sm:p-6">
              <div className="rounded-[1.5rem] bg-white p-5 sm:p-7">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div><p className="text-xs font-black uppercase tracking-[0.18em] text-orange-600">Incoming call</p><p className="mt-1 text-xl font-black">ARK is answering</p></div>
                  <span className="rounded-full bg-emerald-50 px-3 py-2 text-xs font-black text-emerald-700">Live</span>
                </div>
                <div className="mt-5 space-y-3 text-sm leading-6">
                  <div className="mr-8 rounded-2xl rounded-tl-sm bg-slate-100 p-4 text-slate-700">I need an estimate for interior painting next week.</div>
                  <div className="ml-8 rounded-2xl rounded-tr-sm bg-orange-600 p-4 font-semibold text-white">I can help with that. What is the project address?</div>
                </div>
                <div className="mt-5 rounded-2xl border border-orange-200 bg-orange-50 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-orange-700">Lead ready</p>
                  <p className="mt-1 text-lg font-black">Interior painting estimate</p>
                  <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                    <div><p className="font-bold text-slate-500">Address</p><p className="mt-1 font-black">18 Maple Street</p></div>
                    <div><p className="font-bold text-slate-500">Preferred time</p><p className="mt-1 font-black">Tuesday · 2:30 PM</p></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-2 rounded-2xl border border-orange-200 bg-white px-4 py-3 shadow-xl sm:-left-8"><p className="text-xs font-bold text-slate-500">You kept working.</p><p className="font-black">ARK captured the lead.</p></div>
          </div>
        </div>
      </section>

      <section id="missed-call-math" className="scroll-mt-24 bg-slate-950 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-2xl"><p className="text-xs font-black uppercase tracking-[0.2em] text-orange-400">Use your own numbers</p><h2 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">What could missed calls be costing you?</h2></div>
          <OpportunityCalculator />
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="What you get" title="Four things. No brochure." body="Scan the answer you need. Open the deeper page only when you want more detail." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featureCards.map((feature) => (
              <a key={feature.title} href={feature.href} className="group rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-orange-300 hover:bg-orange-50 hover:shadow-lg">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-600">{feature.eyebrow}</p>
                <h3 className="mt-3 text-2xl font-black tracking-tight">{feature.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{feature.body}</p>
                <span className="mt-6 inline-flex font-black text-orange-700 transition group-hover:translate-x-1">Learn more →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-24 border-y border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="How it works" title="A call comes in. A useful lead comes out." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              ["01", "Customer calls", "They call your ARK business number instead of interrupting your personal line."],
              ["02", "ARK gathers the details", "The receptionist asks what they need, where the job is, and when they want help."],
              ["03", "You choose the next step", "Accept, decline, text, save the contact, add the date, or assign an employee."],
            ].map(([number, title, body]) => (
              <article key={number} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-sm font-black text-orange-400">{number}</span><h3 className="mt-6 text-2xl font-black">{title}</h3><p className="mt-3 leading-7 text-slate-600">{body}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section id="private-number" className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div><p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">Your own business number</p><h2 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">Customers do not need your personal number.</h2><p className="mt-5 text-lg leading-8 text-slate-600">ARK answers calls on your dedicated number. After you accept a lead, you can continue the conversation by text without exposing your private line.</p></div>
          <div className="rounded-[2rem] bg-slate-950 p-7 text-white shadow-2xl"><p className="text-sm font-black uppercase tracking-[0.18em] text-orange-400">Unknown number calls</p><p className="mt-4 text-4xl font-black">You keep working.</p><p className="mt-4 text-lg leading-8 text-slate-300">Spam, scams, and sales pitches stop controlling your day. Real customers still make it through as organized leads.</p></div>
        </div>
      </section>

      <section id="team" className="scroll-mt-24 bg-orange-50 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl"><SectionIntro eyebrow="Lead actions" title="Everything you need after the call." />
          <div className="mt-10 flex flex-wrap justify-center gap-3">{["Accept or decline", "Message the customer", "Save to contacts", "Add to calendar", "Assign an employee"].map((item) => <span key={item} className="rounded-full border border-orange-200 bg-white px-5 py-3 font-black text-slate-800 shadow-sm">{item}</span>)}</div>
        </div>
      </section>

      <section id="pricing" className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="Pricing" title="Easy to find. Easy to understand." />
          <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 text-white shadow-2xl">
            <div className="grid gap-0 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="border-b border-slate-800 p-8 lg:border-b-0 lg:border-r"><p className="text-sm font-black uppercase tracking-[0.18em] text-orange-400">Base plan</p><p className="mt-4 text-6xl font-black">$50<span className="text-xl text-slate-400">/month</span></p><p className="mt-4 leading-7 text-slate-300">Your receptionist, private business number, lead inbox, and core app tools.</p></div>
              <div className="grid sm:grid-cols-3">
                {[
                  ["$2", "per call lead", "Charged when a caller becomes a lead sent to you."],
                  ["$1", "to start texting", "Starts a new customer text conversation."],
                  ["$1", "per 50 segments", "Covers each block of 50 SMS message segments."],
                ].map(([price, unit, body]) => <div key={unit} className="border-b border-slate-800 p-7 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"><p className="text-4xl font-black">{price}</p><p className="mt-1 font-black text-orange-400">{unit}</p><p className="mt-3 text-sm leading-6 text-slate-300">{body}</p></div>)}
              </div>
            </div>
          </div>

          <details className="mx-auto mt-6 max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 open:bg-white open:shadow-lg">
            <summary className="cursor-pointer list-none p-6 font-black text-slate-950 sm:p-7"><span className="flex items-center justify-between gap-4"><span><span className="block text-xs uppercase tracking-[0.18em] text-orange-600">Message pricing example</span><span className="mt-2 block text-xl sm:text-2xl">What do 50 message segments look like?</span></span><span className="rounded-full bg-orange-100 px-4 py-2 text-sm text-orange-700">Open ↓</span></span></summary>
            <div className="border-t border-slate-200 p-5 sm:p-7">
              <p className="mx-auto max-w-2xl text-center leading-7 text-slate-600">A segment is not the same thing as one text bubble. Long messages can use multiple segments. Scroll through this example to see how much back-and-forth 50 segments can cover.</p>
              <div className="mx-auto mt-6 max-w-md rounded-[2.5rem] border-[10px] border-slate-950 bg-slate-950 p-1 shadow-xl">
                <div className="rounded-[1.85rem] bg-white p-4">
                  <div className="border-b border-slate-200 pb-3 text-center"><p className="font-black">Customer conversation</p><p className="text-xs font-bold text-slate-500">Scroll down to see the full example ↓</p></div>
                  <div className="mt-4 h-[28rem] space-y-3 overflow-y-auto pr-1">
                    {conversation.map(([side, message], index) => <div key={`${side}-${index}`} className={side === "business" ? "ml-10 rounded-2xl rounded-tr-sm bg-orange-600 p-3 text-sm leading-6 text-white" : "mr-10 rounded-2xl rounded-tl-sm bg-slate-100 p-3 text-sm leading-6 text-slate-700"}>{message}</div>)}
                    <div className="rounded-2xl border border-dashed border-orange-300 bg-orange-50 p-4 text-center text-sm font-bold text-orange-800">This is an illustration, not an exact meter. Actual segment count changes with message length, emojis, and special characters.</div>
                  </div>
                </div>
              </div>
            </div>
          </details>
        </div>
      </section>

      <section id="live-demo" className="scroll-mt-24 bg-slate-950 px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl text-center"><p className="text-xs font-black uppercase tracking-[0.22em] text-orange-400">Live demo</p><h2 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">Call it like a real customer.</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">Ask for an estimate, give it a fake project, and hear how the receptionist gathers the details.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><DemoButton className={config.theme.button}>{demoPhoneHref ? `Call ${demoPhone}` : "Try the Live Demo"}</DemoButton><GetAppLink className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 px-7 py-3.5 font-black text-white transition hover:border-orange-400 hover:bg-slate-800">Get the App</GetAppLink></div></div>
      </section>

      <SiteFooter />
    </main>
  );
}
