import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const sections = [
  {
    title: "Why ARK Client Center exists",
    body: "Small service businesses lose opportunities when calls go unanswered, notes are scattered, or follow-up happens from a personal phone. ARK Client Center gives the business one organized place to review leads and continue customer relationships.",
  },
  {
    title: "How the receptionist connects",
    body: "When a customer calls a business's dedicated ARK number, the receptionist can collect the information needed for an estimate request. After the caller confirms the details and agrees to be contacted, the lead is sent into that business's client center.",
  },
  {
    title: "How messaging works",
    body: "Approved owners and employees can continue a one-to-one conversation using the business's dedicated number. Customers can reply directly, text STOP to opt out, or use HELP to receive the ARK support and reporting path.",
  },
  {
    title: "Who controls the account",
    body: "Each business is responsible for its employees, messages, customer relationships, and compliance. ARK operates the platform, reviews credible abuse reports, and may restrict or terminate accounts that misuse the service.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <SiteHeader />
      <section className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">About the platform</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-[-0.04em] sm:text-6xl">A private, organized bridge between the first phone call and the next customer.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">ARK Client Center combines lead intake, client organization, and business messaging without requiring owners to publish their personal phone numbers.</p>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {sections.map((section) => (
              <article key={section.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                <h2 className="text-2xl font-black">{section.title}</h2>
                <p className="mt-4 leading-7 text-slate-300">{section.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-8">
            <h2 className="text-2xl font-black">Need the app or need to report a concern?</h2>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link href="/download" className="rounded-2xl bg-cyan-400 px-6 py-3 text-center text-sm font-black text-slate-950">Download Options</Link>
              <Link href="/support" className="rounded-2xl border border-white/15 px-6 py-3 text-center text-sm font-black text-white">Support & Reports</Link>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
