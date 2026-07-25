import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import config from "./homeConfig";

const aboutHighlights = [
  {
    title: "Why ARK started",
    body: "Andrew Christensen started ARK after running a landscaping business and constantly switching between the work itself, new leads, handwritten notes, and text threads. He wanted one place that clearly showed who called, what they needed, and when the next job was.",
  },
  {
    title: "AI caller intake",
    body: "The responsive AI receptionist accurately collects job details, contact information, timing, and estimate requests. It guides callers toward the next step so more inquiries can become real estimate opportunities instead of missed voicemails.",
  },
  {
    title: "More than voicemail",
    body: "The receptionist carries the conversation forward, asks the questions your business needs, and organizes the answers before the call ends.",
  },
  {
    title: "One clear workspace",
    body: "See who called, what they need, and what should happen next without searching through notes, missed calls, and old conversations.",
  },
  {
    title: "Private business messaging",
    body: "Continue customer conversations through the business number without exposing your personal phone number.",
  },
  {
    title: "Employees stay connected",
    body: "Approve employee accounts, control access, assign work, and review activity inside the same business workspace.",
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
    phrase: "A clear workspace",
    title: "Business stats",
    image: "/client-center-stats.svg",
    alt: "ARK Client Center statistics dashboard showing leads, messages, employees, and recent activity",
  },
  {
    phrase: "Every lead organized",
    title: "Leads and clients",
    image: "/client-center-leads.svg",
    alt: "ARK Client Center leads page showing contacted leads and accepted clients",
  },
  {
    phrase: "Keep conversations together",
    title: "Client conversations",
    image: "/client-center-messages.svg",
    alt: "ARK Client Center messages page showing several customer conversations",
  },
  {
    phrase: "Your team connected",
    title: "Employee management",
    image: "/client-center-employees.svg",
    alt: "ARK Client Center employee management page showing pending and active employees",
  },
];

const faqItems = [
  {
    question: "Is ARK Client Center only a voicemail service?",
    answer: "No. The receptionist is responsive and trained to guide the caller toward an estimate while collecting the client information your business requires.",
  },
  {
    question: "Can I use my personal phone number as the receptionist number?",
    answer: "No. ARK uses a separate business number for the receptionist and customer messaging. That keeps your personal number private and gives customers one consistent number for calls and conversations.",
  },
  {
    question: "Do I have to give customers my private phone number?",
    answer: "No. Calls and customer conversations use the business's dedicated ARK number, so your personal phone number stays private.",
  },
  {
    question: "Can my employees have accounts inside my business workspace?",
    answer: "Yes. Owners can approve employee accounts inside the business account, control what each person can access, assign work, and review what employees are doing inside the shared workspace.",
  },
  {
    question: "How does payment work?",
    answer: "ARK Client Center charges a flat $50 platform fee, plus usage: $1 per customer conversation, $2 per completed lead, and $5 per approved employee account.",
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
          <h1 className="text-5xl font-black tracking-tight text-slate-950 sm:text-7xl">ARK Client Center</h1>
          <h2 className="mx-auto mt-4 max-w-3xl text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">An AI receptionist that collects every lead while you keep working.</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg">Job details, contact information, estimate requests, and next steps arrive in one organized place—so you never have to dig through notes, missed calls, or old conversations to remember what comes next.</p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/download" className={config.theme.button}>Download the App</Link>
            <Link href="/about" className={config.theme.secondaryButton}>Learn More</Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 sm:py-12">
        <section className={`${config.theme.sectionBg} p-6 sm:p-8`}>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">ARK Client Center</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">About Us</h2>
            </div>
            <Link href="/about" className="hidden font-black text-orange-600 underline decoration-2 underline-offset-4 hover:text-orange-700 sm:inline-flex">Read more</Link>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {aboutHighlights.map((item) => (
              <Link key={item.title} href="/about" className="rounded-2xl border border-orange-200 bg-orange-50/50 p-4 transition hover:-translate-y-0.5 hover:border-orange-400 hover:shadow-md sm:p-5">
                <h3 className="text-base font-black sm:text-lg">{item.title}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-700 sm:text-sm sm:leading-6">{item.body}</p>
              </Link>
            ))}
          </div>
          <Link href="/about" className="mt-5 inline-flex font-black text-orange-600 underline decoration-2 underline-offset-4 hover:text-orange-700 sm:hidden">Read more</Link>
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
          <div className="mt-8 space-y-12">
            {previews.map((preview, index) => (
              <article key={preview.title} className={`text-center ${index ? "border-t border-orange-200 pt-10" : ""}`}>
                <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">{preview.phrase}</h2>
                <h3 className="mt-2 text-xl font-black text-slate-950 sm:text-2xl">{preview.title}</h3>
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
