import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import OpportunityCalculator from "./components/OpportunityCalculator";
import config from "./homeConfig";

const featureCards = [
  "Calls get answered while you keep working.",
  "Real lead details show up in one place.",
  "Spam and sales calls stop wasting your time.",
  "Send the right lead to the right employee.",
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

export default function Home() {
  return (
    <main className={`${config.font} min-h-screen ${config.theme.pageBg} ${config.theme.pageText}`}>
      <SiteHeader />

      <section className="border-b border-slate-200 bg-[#fffaf5] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] text-slate-950 sm:text-7xl lg:text-[5.25rem]">Keep working. ARK answers first.</h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl font-black leading-8 text-slate-700 sm:text-2xl">Stop answering calls that waste your time. Get the real leads in your app.</p>
        </div>
      </section>

      <section id="missed-call-math" className="scroll-mt-24 bg-slate-950 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-4xl font-black tracking-tight text-white sm:text-5xl">What could missed calls be costing you?</h2>
          <OpportunityCalculator />
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">What you get</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featureCards.map((title) => (
              <div key={title} className="grid min-h-52 place-items-center rounded-3xl border border-slate-200 bg-slate-50 p-7 text-center">
                <h3 className="text-3xl font-black leading-tight tracking-tight text-slate-950">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-24 border-y border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-4xl font-black tracking-tight sm:text-6xl">A call comes in. A lead comes out.</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {["Customer calls.", "ARK gets the details.", "You choose what happens next."].map((title, index) => (
              <article key={title} className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
                <span className="text-2xl font-black text-orange-600">{index + 1}</span>
                <h3 className="mt-4 text-3xl font-black leading-tight">{title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-4xl font-black tracking-tight sm:text-6xl">Pricing</h2>
          <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 text-white shadow-2xl">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
              <div className="border-b border-slate-800 p-8 lg:border-b-0 lg:border-r"><p className="text-6xl font-black">$50<span className="text-xl text-slate-400">/month</span></p></div>
              <div className="grid sm:grid-cols-3">
                {[["$2", "per call lead"], ["$1", "to start texting"], ["$1", "per 50 segments"]].map(([price, unit]) => <div key={unit} className="border-b border-slate-800 p-7 text-center last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"><p className="text-4xl font-black">{price}</p><p className="mt-2 text-xl font-black text-orange-400">{unit}</p></div>)}
              </div>
            </div>
          </div>

          <details className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
            <summary className="cursor-pointer list-none p-6 text-xl font-black sm:p-8">What do 50 message segments look like?</summary>
            <div className="border-t border-slate-200 p-4 sm:p-8">
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

      <SiteFooter />
    </main>
  );
}
