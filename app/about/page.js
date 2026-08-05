import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import config from "../homeConfig";

const sections = [
  {
    title: "Where the idea came from",
    body: "ARK Client Center was started by Andrew Christensen after seeing how easily small businesses lose track of real opportunities. Owners are often working, driving, meeting customers, or handling the job itself when the next call comes in.",
  },
  {
    title: "What the goal is",
    body: "The goal is to make the first customer interaction useful. Instead of leaving the owner with a vague voicemail, the receptionist talks the caller through the information the business needs and sends an organized lead into one simple workspace.",
  },
  {
    title: "Why privacy matters",
    body: "Owners and employees should not have to publish their personal phone numbers just to follow up with customers. ARK Client Center keeps business conversations connected to a dedicated business number.",
  },
  {
    title: "Why the app stays simple",
    body: "The platform is being built for real small businesses, not giant companies with full-time office staff. Every screen should help the owner understand what needs attention and what to do next without making the work more complicated.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <SiteHeader />
      <section className={`border-b border-orange-200 px-4 py-14 text-center sm:px-6 sm:py-18 ${config.theme.heroBg}`}>
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">About ARK Client Center</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">A simpler way to keep customer opportunities organized.</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-700">ARK Client Center connects receptionist intake, leads, conversations, and employees without forcing business owners to give out their private numbers.</p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-5 px-4 py-10 sm:px-6 sm:py-14">
        {sections.map((section) => (
          <section key={section.title} className={`${config.theme.sectionBg} p-6 sm:p-8`}>
            <h2 className="text-2xl font-black">{section.title}</h2>
            <p className="mt-3 leading-7 text-slate-700">{section.body}</p>
          </section>
        ))}

        <section className="rounded-3xl border border-orange-300 bg-orange-50 p-7 text-center shadow-lg sm:p-10">
          <h2 className="text-3xl font-black">Ready to see the client center?</h2>
          <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-700">Return to the quick homepage overview or open the download options.</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/" className={config.theme.secondaryButton}>Back to Home</Link>
            <Link href="/download" className={config.theme.button}>Get Started</Link>
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
