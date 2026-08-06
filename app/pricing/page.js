import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import TopicNav from "../components/TopicNav";
import { GetAppLink } from "../components/AppStoreRouting";
import config from "../homeConfig";

export const metadata = {
  title: "Pricing",
  description: "Review ARK Client Center's monthly base price and usage charges for receptionist leads and business texting.",
};

const charges = [
  {
    price: "$50",
    unit: "per month",
    title: "ARK Client Center",
    body: "The base subscription for the business workspace where receptionist leads and customer conversations are organized.",
  },
  {
    price: "$2",
    unit: "per call lead",
    title: "Receptionist intake",
    body: "The usage charge when the receptionist handles a caller and creates a lead for your business.",
  },
  {
    price: "$1",
    unit: "to start texting",
    title: "New text conversation",
    body: "The charge to begin a business text conversation with a lead through the client center.",
  },
  {
    price: "$1",
    unit: "per 50 segments",
    title: "Ongoing messages",
    body: "Message usage is grouped into blocks of 50 SMS segments after the conversation begins.",
  },
];

const questions = [
  {
    question: "What is an SMS segment?",
    answer: "A segment is the carrier billing unit behind a text message. A normal short text may use one segment, while a long message or certain characters can cause a message to use more than one.",
  },
  {
    question: "Why separate the monthly price from usage?",
    answer: "Call and message volume is different for every service business. Separating usage means a smaller business does not have to buy the same oversized bundle as a company receiving far more calls.",
  },
  {
    question: "Where can I ask about my expected monthly cost?",
    answer: "Use the support page and share roughly how many call leads and customer conversations you expect in a month. ARK can walk through the rates with you before you decide.",
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <SiteHeader />

      <section className="border-b border-slate-200 bg-[#fffaf5] px-4 py-14 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">Pricing</p>
          <h1 className="mt-4 text-5xl font-black leading-[0.96] tracking-[-0.045em] sm:text-7xl">Know what the base costs and what changes with usage.</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg font-semibold leading-8 text-slate-700 sm:text-xl">Start with ARK Client Center, then pay based on the receptionist leads and business messages your company actually uses.</p>
          <Link href="/" className="mt-7 inline-flex font-black text-orange-700 underline decoration-2 underline-offset-4">← Back to the quick overview</Link>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {charges.map((charge, index) => (
              <article key={charge.title} className={index === 0 ? "rounded-[2rem] bg-slate-950 p-7 text-white shadow-2xl" : "rounded-[2rem] border border-slate-200 bg-slate-50 p-7"}>
                <p className="text-5xl font-black tracking-tight">{charge.price}</p>
                <p className={index === 0 ? "mt-2 font-black text-orange-400" : "mt-2 font-black text-orange-700"}>{charge.unit}</p>
                <h2 className="mt-6 text-2xl font-black">{charge.title}</h2>
                <p className={index === 0 ? "mt-4 leading-7 text-slate-300" : "mt-4 leading-7 text-slate-600"}>{charge.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">How to think about it</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Your bill follows the work ARK handles.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">A quiet month should not be priced like a month with heavy call and message volume. The fixed base stays predictable; usage grows with activity.</p>
          </div>
          <div className="space-y-4">
            {[
              ["1", "Start with the $50 monthly client center."],
              ["2", "Add $2 for each call lead handled by the receptionist."],
              ["3", "Add $1 when a new lead text conversation begins."],
              ["4", "Add $1 for each block of 50 SMS segments used."],
            ].map(([number, text]) => (
              <div key={number} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-orange-100 font-black text-orange-700">{number}</span>
                <p className="font-black text-slate-800">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">Pricing questions</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">The details business owners usually ask about.</h2>
          </div>
          <div className="mt-10 space-y-3">
            {questions.map((item) => (
              <details key={item.question} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <summary className="cursor-pointer list-none font-black">
                  <span className="flex items-center justify-between gap-4">{item.question}<span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-orange-50 text-xl text-orange-700 transition group-open:rotate-45">+</span></span>
                </summary>
                <p className="mt-4 max-w-3xl leading-7 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-16 text-center text-white sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-black tracking-tight sm:text-6xl">Have numbers from your own business?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">Compare the pricing to the job value behind the calls you currently miss, or ask ARK a specific billing question.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/missed-calls" className={config.theme.secondaryButton}>Run the Missed-call Math</Link>
            <GetAppLink className={config.theme.button}>Get the App</GetAppLink>
            <Link href="/support" className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-slate-700 px-7 py-3.5 font-black text-white transition hover:border-orange-400 sm:w-auto">Ask a Pricing Question</Link>
          </div>
        </div>
      </section>

      <TopicNav current="/pricing" />
      <SiteFooter />
    </main>
  );
}
