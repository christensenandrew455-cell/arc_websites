import Image from "next/image";
import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import OpportunityCalculator from "./components/OpportunityCalculator";
import { GetAppLink } from "./components/AppStoreRouting";
import config from "./homeConfig";
import { demoPhone, demoPhoneHref } from "./productLinks";

const quickLinks = [
  {
    eyebrow: "Run the numbers",
    title: "What are missed calls worth?",
    body: "Use your own call volume and average job value.",
    href: "#missed-call-math",
  },
  {
    eyebrow: "See the process",
    title: "What happens after hello?",
    body: "Follow one caller from first question to organized lead.",
    href: "#how-it-works",
  },
  {
    eyebrow: "Hear it yourself",
    title: "Try the live receptionist",
    body: "Call with a sample estimate request and test the conversation.",
    href: "#live-demo",
  },
  {
    eyebrow: "Know the cost",
    title: "See simple pricing",
    body: "Review the monthly base and usage charges before you decide.",
    href: "#pricing",
  },
];

const steps = [
  {
    number: "01",
    title: "Your customer calls the ARK business number",
    body: "ARK takes the first conversation while you keep painting, landscaping, driving, quoting, or finishing the job in front of you.",
  },
  {
    number: "02",
    title: "The receptionist handles the intake",
    body: "It gathers the caller's name, requested service, project address, preferred date and time, extra notes, and permission to be contacted—then confirms the request with the caller.",
  },
  {
    number: "03",
    title: "A complete lead reaches your app",
    body: "Review what the customer needs, accept the lead, set the estimate, message them through the business number, or assign the next step to an approved employee.",
  },
];

const benefits = [
  {
    label: "Keep working",
    title: "You do not have to stop for every ring.",
    body: "ARK handles the first conversation so a customer inquiry—or a spam call—does not pull you away from the work that is already paying you.",
  },
  {
    label: "Know who is real",
    title: "Get the details, not a mystery number.",
    body: "A real estimate request arrives with the service, address, timing, and notes you need to decide what happens next.",
  },
  {
    label: "Protect your number",
    title: "Keep business conversations off your personal line.",
    body: "Calls and follow-up messages use a dedicated ARK business number, so your private number stays private.",
  },
  {
    label: "Move leads forward",
    title: "Keep intake, follow-up, and your team together.",
    body: "Accept clients, add estimate times, continue conversations, save contacts, and assign work without digging through notes and text threads.",
  },
];

const pricingItems = [
  {
    price: "$2",
    unit: "per call",
    title: "AI receptionist calls",
    body: "Pay for each call handled by the receptionist instead of buying a large call bundle you may not use.",
  },
  {
    price: "$1",
    unit: "per 50 parts",
    title: "Business SMS",
    body: "Customer messages stay connected to the dedicated business number inside the client center.",
  },
  {
    price: "$5",
    unit: "per employee / month",
    title: "Approved employee access",
    body: "Add active team members only when they need access to the shared business workspace.",
  },
];

const faqItems = [
  {
    question: "Is ARK just a voicemail service?",
    answer: "No. The receptionist has a real intake conversation, asks for the information your business needs, confirms the request with the caller, and creates an organized lead for you.",
  },
  {
    question: "What information does the receptionist collect?",
    answer: "For an estimate request, ARK can collect the requested service, customer name, project address, preferred date and time, optional notes, and permission for your business to contact the customer.",
  },
  {
    question: "Will I still have to stop working for spam calls?",
    answer: "ARK takes the first conversation on the business line. That means every unknown caller does not have to interrupt your day, while real estimate requests are organized for you to review.",
  },
  {
    question: "Do customers get my personal phone number?",
    answer: "No. Receptionist calls and customer conversations use the business's dedicated ARK number, so your personal phone number stays private.",
  },
  {
    question: "Can my employees use the client center?",
    answer: "Yes. Owners can approve employee accounts, control access, assign accepted clients, and keep the team's customer work in the same workspace.",
  },
  {
    question: "How does payment work?",
    answer: "ARK Client Center is $50 per month, plus $2 per AI receptionist call, $1 per 50 SMS message parts, and $5 per active approved employee account each month.",
  },
];

function DemoButton({ className, children }) {
  if (demoPhoneHref) {
    return <a href={demoPhoneHref} className={className}>{children || `Call ${demoPhone}`}</a>;
  }

  return <a href="#live-demo" className={className}>{children || "See the Live Demo"}</a>;
}

export default function Home() {
  return (
    <main className={`${config.font} min-h-screen ${config.theme.pageBg} ${config.theme.pageText}`}>
      <SiteHeader />

      <section className="relative isolate overflow-hidden border-b border-slate-200 bg-[#fffaf5] px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(249,115,22,0.18),transparent_28%),radial-gradient(circle_at_88%_10%,rgba(15,23,42,0.08),transparent_30%)]" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-orange-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              Built for service businesses
            </div>
            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[0.96] tracking-[-0.045em] text-slate-950 sm:text-7xl lg:text-[5.25rem]">
              Stop losing jobs to missed calls.
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-slate-700 sm:text-xl sm:leading-9">
              ARK answers when you cannot, gathers the estimate details you need, and sends every real opportunity to one simple app.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <GetAppLink className={config.theme.button}>Get the App</GetAppLink>
              <DemoButton className={config.theme.secondaryButton}>
                {demoPhoneHref ? `Call the Demo: ${demoPhone}` : "Try the Live Demo"}
              </DemoButton>
            </div>
            <ul className="mt-7 grid gap-3 text-sm font-bold text-slate-700 sm:grid-cols-3">
              <li className="flex items-center gap-2"><span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-orange-100 text-xs text-orange-700">✓</span>Lead intake handled</li>
              <li className="flex items-center gap-2"><span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-orange-100 text-xs text-orange-700">✓</span>Spam stops interrupting</li>
              <li className="flex items-center gap-2"><span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-orange-100 text-xs text-orange-700">✓</span>Personal number stays private</li>
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-orange-200/50 blur-3xl" />
            <div className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 p-3 shadow-[0_40px_100px_-35px_rgba(15,23,42,0.75)] sm:p-5">
              <div className="rounded-[1.5rem] bg-white p-4 sm:p-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-600">ARK is answering</p>
                    <p className="mt-1 text-lg font-black text-slate-950">New estimate call</p>
                  </div>
                  <span className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-xs font-black text-emerald-700"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />Live</span>
                </div>

                <div className="mt-5 space-y-3 text-sm leading-6">
                  <div className="mr-8 rounded-2xl rounded-tl-sm bg-slate-100 p-4 text-slate-700">
                    I need an estimate for interior painting next week.
                  </div>
                  <div className="ml-8 rounded-2xl rounded-tr-sm bg-orange-600 p-4 font-semibold text-white">
                    I can help with that. What is the project address?
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-orange-200 bg-orange-50 p-4 sm:p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-orange-700">Lead ready</p>
                      <p className="mt-1 font-black text-slate-950">Interior painting estimate</p>
                    </div>
                    <span className="rounded-full bg-slate-950 px-3 py-2 text-xs font-black text-white">Open in app</span>
                  </div>
                  <dl className="mt-4 grid grid-cols-2 gap-3 text-xs sm:text-sm">
                    <div><dt className="font-bold text-slate-500">Address</dt><dd className="mt-1 font-black text-slate-800">18 Maple Street</dd></div>
                    <div><dt className="font-bold text-slate-500">Preferred time</dt><dd className="mt-1 font-black text-slate-800">Tuesday · 2:00 PM</dd></div>
                  </dl>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-3 rounded-2xl border border-orange-200 bg-white px-4 py-3 shadow-xl sm:-left-8">
              <p className="text-xs font-bold text-slate-500">You kept working.</p>
              <p className="mt-0.5 font-black text-slate-950">ARK captured the lead.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">Already spoke with us?</p>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">Pick up exactly where the conversation left off.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-500">Every option stays on this page, so you can get the answer without hunting through a menu.</p>
          </div>
          <nav className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" aria-label="Page shortcuts">
            {quickLinks.map((item) => (
              <a key={item.title} href={item.href} className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:border-orange-300 hover:bg-orange-50 hover:shadow-md">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-orange-700">{item.eyebrow}</p>
                <h3 className="mt-2 font-black text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
                <span className="mt-4 inline-flex text-sm font-black text-orange-700 transition group-hover:translate-x-1">Go there →</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section id="missed-call-math" className="scroll-mt-24 bg-slate-950 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <OpportunityCalculator />
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-600">From ring to ready lead</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">Here is what actually happens.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">No vague promise about “automation.” One call comes in, the right information is collected, and you get something useful to act on.</p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-start lg:gap-14">
            <div className="space-y-4">
              {steps.map((step) => (
                <article key={step.number} className="grid gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:grid-cols-[4rem_1fr] sm:p-7">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-slate-950 text-sm font-black text-orange-400">{step.number}</span>
                  <div>
                    <h3 className="text-xl font-black text-slate-950 sm:text-2xl">{step.title}</h3>
                    <p className="mt-2 leading-7 text-slate-600">{step.body}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mx-auto w-full max-w-sm rounded-[2.5rem] border-[10px] border-slate-950 bg-slate-950 p-1 shadow-[0_35px_80px_-35px_rgba(15,23,42,0.7)]">
              <div className="overflow-hidden rounded-[1.85rem] bg-slate-100">
                <Image src="/client-center-leads.svg" alt="ARK Client Center lead list showing organized customer requests" width={709} height={1536} className="h-auto w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="what-you-get" className="scroll-mt-24 border-y border-slate-200 bg-[#fffaf5] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-600">More than answering the phone</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">The first call is handled. The next step is clearer.</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {benefits.map((benefit) => (
              <article key={benefit.title} className="rounded-3xl border border-orange-200 bg-white p-6 shadow-[0_20px_50px_-38px_rgba(15,23,42,0.55)] sm:p-8">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-700">{benefit.label}</p>
                <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">{benefit.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{benefit.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-600">Inside your client center</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Everything tied back to the customer.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">New receptionist leads, accepted clients, estimate timing, messages, and employee access stay in one workspace instead of spreading across missed calls, paper notes, and personal texts.</p>
            <ul className="mt-7 space-y-3 font-bold text-slate-700">
              {["See new leads before they get buried", "Continue the conversation from the business number", "Add estimate times and assign the next step", "Keep unread messages and team access visible"].map((item) => (
                <li key={item} className="flex gap-3"><span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-orange-100 text-xs text-orange-700">✓</span>{item}</li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 items-end gap-3 sm:gap-6">
            <div className="overflow-hidden rounded-[1.75rem] border-[7px] border-slate-950 bg-slate-950 shadow-2xl">
              <Image src="/client-center-leads.svg" alt="ARK Client Center leads screen" width={709} height={1536} className="h-auto w-full" />
            </div>
            <div className="mb-8 overflow-hidden rounded-[1.75rem] border-[7px] border-slate-950 bg-slate-950 shadow-2xl sm:mb-14">
              <Image src="/client-center-messages.svg" alt="ARK Client Center business messages screen" width={709} height={1536} className="h-auto w-full" />
            </div>
          </div>
        </div>
      </section>

      <section id="live-demo" className="scroll-mt-24 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-orange-600 px-5 py-10 text-white shadow-[0_35px_90px_-45px_rgba(234,88,12,0.8)] sm:px-10 sm:py-14 lg:px-14">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border-[45px] border-white/10" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-14">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-100">Live receptionist demo</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">Do not take our word for it. Call it.</h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-orange-50">Pretend you are a customer requesting an estimate. Give it a service, an address, and a preferred time. Ask a business question. Change your answer halfway through. The demo is where you test the conversation itself.</p>
              <div className="mt-6 flex flex-wrap gap-2 text-sm font-bold text-orange-50">
                <span className="rounded-full bg-white/10 px-3 py-2">Try an estimate request</span>
                <span className="rounded-full bg-white/10 px-3 py-2">Ask a real question</span>
                <span className="rounded-full bg-white/10 px-3 py-2">Listen for the final confirmation</span>
              </div>
            </div>
            <div className="lg:text-right">
              {demoPhoneHref ? (
                <a href={demoPhoneHref} className="inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-white px-7 py-4 text-center font-black text-slate-950 shadow-xl transition hover:-translate-y-0.5 hover:bg-slate-50 sm:w-auto">Call {demoPhone}</a>
              ) : (
                <div className="rounded-2xl border border-white/20 bg-white/10 p-5 text-left backdrop-blur sm:max-w-sm">
                  <p className="font-black">The live number is being connected.</p>
                  <p className="mt-2 text-sm leading-6 text-orange-50">Send ARK a sales question and we will give you the current demo details.</p>
                  <Link href="/support" className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-black text-slate-950 sm:w-auto">Ask for the Live Demo</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-600">Straightforward pricing</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">Know what you are paying for.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Start with the client center and receptionist, then pay for the calls, messages, and employee access your business actually uses.</p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_1.95fr]">
            <article className="flex min-h-full flex-col rounded-[2rem] bg-slate-950 p-7 text-white shadow-2xl sm:p-9">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-400">ARK Client Center</p>
              <p className="mt-5 text-6xl font-black tracking-tight">$50<span className="text-lg text-slate-400"> / month</span></p>
              <p className="mt-4 leading-7 text-slate-300">Your business workspace, dedicated number, receptionist intake, organized leads, and customer conversations begin here.</p>
              <GetAppLink className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-orange-600 px-6 py-3.5 text-center font-black text-white transition hover:bg-orange-500">Get the App</GetAppLink>
            </article>

            <div className="grid gap-5 md:grid-cols-3">
              {pricingItems.map((item) => (
                <article key={item.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 sm:p-7">
                  <p className="text-4xl font-black tracking-tight text-slate-950">{item.price}</p>
                  <p className="mt-1 text-sm font-black text-orange-700">{item.unit}</p>
                  <h3 className="mt-5 text-xl font-black text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-600">Questions before you decide</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">The things business owners usually ask.</h2>
            <p className="mt-5 leading-7 text-slate-600">If your question is not here, use support to ask ARK directly.</p>
            <Link href="/support" className="mt-6 inline-flex font-black text-orange-700 underline decoration-2 underline-offset-4 hover:text-orange-800">Ask another question →</Link>
          </div>
          <div className="space-y-3">
            {faqItems.map((item) => (
              <details key={item.question} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <summary className="cursor-pointer list-none font-black text-slate-950 marker:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {item.question}
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-orange-50 text-xl text-orange-700 transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl leading-7 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-orange-200 bg-[#fff7ed] p-6 text-center shadow-[0_30px_80px_-48px_rgba(234,88,12,0.7)] sm:p-12">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-700">The next call can be different</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">Let ARK answer while you keep the job moving.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">Get the client center on your phone, or test the receptionist first if you still want to hear how it handles a real conversation.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <GetAppLink className={config.theme.button}>Get the App</GetAppLink>
            <DemoButton className={config.theme.secondaryButton}>{demoPhoneHref ? "Call the Live Demo" : "See the Live Demo"}</DemoButton>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
