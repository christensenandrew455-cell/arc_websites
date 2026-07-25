import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import config from "./homeConfig";

const aboutHighlights = [
  {
    title: "Why ARK started",
    body: "Small-business owners miss real opportunities while they are working, driving, or helping another customer.",
  },
  {
    title: "More than voicemail",
    body: "The receptionist asks useful questions and turns the call into an organized lead instead of a vague message.",
  },
  {
    title: "One clear workspace",
    body: "See who called, what they need, and what should happen next without searching through notes and apps.",
  },
  {
    title: "Private business messaging",
    body: "Continue customer conversations through the business number without exposing your personal phone number.",
  },
  {
    title: "Employees stay connected",
    body: "Approve employee accounts, control access, and keep assigned work inside the business workspace.",
  },
  {
    title: "Built to stay simple",
    body: "ARK is made for real small businesses that need useful tools—not another complicated dashboard.",
  },
];

const steps = [
  {
    title: "A customer calls your business number",
    body: "The ARK receptionist answers and talks the caller through the information your business actually needs instead of only asking them to leave a voicemail.",
  },
  {
    title: "The completed lead appears in your client center",
    body: "The caller's name, service request, address, notes, preferred date, and preferred time are organized in one place for you.",
  },
  {
    title: "You choose the next step",
    body: "Review the lead, accept the client, confirm an appointment, assign an employee, add the contact, or continue the conversation through the dedicated business number.",
  },
];

const previews = [
  {
    title: "Business stats",
    image: "/client-center-stats.svg",
    alt: "ARK Client Center statistics dashboard showing leads, messages, employees, and recent activity",
  },
  {
    title: "Leads and clients",
    image: "/client-center-leads.svg",
    alt: "ARK Client Center leads page showing contacted leads and accepted clients",
  },
  {
    title: "Client conversations",
    image: "/client-center-messages.svg",
    alt: "ARK Client Center messages page showing several customer conversations",
  },
  {
    title: "Employee management",
    image: "/client-center-employees.svg",
    alt: "ARK Client Center employee management page showing pending and active employees",
  },
];

const faqItems = [
  {
    question: "Is ARK Client Center only a voicemail service?",
    answer: "No. The receptionist asks the caller the questions your business needs and sends an organized lead into the client center.",
  },
  {
    question: "Do I have to give customers my private phone number?",
    answer: "No. Calls and customer conversations can use the business's dedicated ARK number.",
  },
  {
    question: "Can employees use the app?",
    answer: "Yes. Owners can approve employee accounts, control access, and assign work inside the business workspace.",
  },
  {
    question: "Can customers opt out or report a concern?",
    answer: "Yes. Customers can reply STOP to opt out and use the ARK support page to report a messaging concern.",
  },
];

export default function Home() {
  return (
    <main className={`${config.font} ${config.theme.pageBg} ${config.theme.pageText}`}>
      <SiteHeader />

      <section className={`border-b border-orange-200 px-4 py-12 text-center sm:px-6 sm:py-16 ${config.theme.heroBg}`}>
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-600">ARK Client Center</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">Manage leads and client conversations with ease.</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-700">Turn calls into organized leads and follow up through a dedicated business number—all from one simple app.</p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/download" className={config.theme.button}>Download the App</Link>
            <Link href="/about" className={config.theme.secondaryButton}>Learn More</Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 sm:py-12">
        <section className={`${config.theme.sectionBg} p-6 sm:p-8`}>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">More than voicemail</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">The receptionist collects the information your business actually needs.</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-700">Customers explain the job, address, timing, and notes. You receive a complete lead that is ready for the next step.</p>
        </section>

        <section className={`${config.theme.sectionBg} p-6 sm:p-8`}>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">About ARK Client Center</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">The story in six quick pieces.</h2>
            </div>
            <Link href="/about" className="font-black text-orange-600 underline decoration-2 underline-offset-4 hover:text-orange-700">Read the full story</Link>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {aboutHighlights.map((item) => (
              <Link key={item.title} href="/about" className="rounded-2xl border border-orange-200 bg-orange-50/50 p-5 transition hover:-translate-y-0.5 hover:border-orange-400 hover:shadow-md">
                <h3 className="text-lg font-black">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.body}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className={`${config.theme.sectionBg} p-6 sm:p-8`}>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">How it works</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">From the first call to the next step.</h2>
          <div className="mt-6 space-y-4">
            {steps.map((step, index) => (
              <article key={step.title} className={`${config.theme.cardBg} p-5 sm:p-6`}>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-600">Step {index + 1}</p>
                <h3 className="mt-2 text-xl font-black">{step.title}</h3>
                <p className="mt-2 leading-7 text-slate-700">{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={`${config.theme.sectionBg} p-6 sm:p-8`}>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">What it looks like</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">A clear workspace.</h2>
          <div className="mt-8 space-y-12">
            {previews.map((preview, index) => (
              <article key={preview.title} className={index ? "border-t border-orange-200 pt-10" : ""}>
                <h3 className="text-center text-xl font-black sm:text-2xl">{preview.title}</h3>
                <img src={preview.image} alt={preview.alt} className="mx-auto mt-5 w-full max-w-[430px] rounded-[2rem] border border-slate-300 bg-slate-100 shadow-xl" />
              </article>
            ))}
          </div>
        </section>

        <section className={`${config.theme.sectionBg} p-6 sm:p-8`}>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">FAQ</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Common questions</h2>
          <div className="mt-6 space-y-3">
            {faqItems.map((item) => (
              <details key={item.question} className="group rounded-2xl border border-orange-200 bg-white p-5">
                <summary className="cursor-pointer list-none font-black marker:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {item.question}
                    <span className="text-xl text-orange-600 transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-3 leading-7 text-slate-700">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-orange-300 bg-orange-50 p-7 text-center shadow-lg sm:p-9">
          <h2 className="text-3xl font-black tracking-tight">Open ARK Client Center.</h2>
          <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-700">Download the app or report a messaging concern directly to ARK.</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/download" className={config.theme.button}>Download Options</Link>
            <Link href="/support" className={config.theme.secondaryButton}>Messaging Support</Link>
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
