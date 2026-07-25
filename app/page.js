import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import config from "./homeConfig";

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
    title: "See your business at a glance",
    body: "Check leads, active conversations, and employee activity for today, this month, or all time.",
    image: "/client-center-stats.svg",
    alt: "ARK Client Center statistics dashboard showing leads, messages, employees, and recent activity",
  },
  {
    title: "Review leads and accepted clients",
    body: "Keep new inquiries separate from accepted clients and open the actions you need without digging through complicated menus.",
    image: "/client-center-leads.svg",
    alt: "ARK Client Center leads page showing contacted leads and accepted clients",
  },
  {
    title: "Continue customer conversations",
    body: "Message customers through the business number, see unread conversations, and keep your private phone number private.",
    image: "/client-center-messages.svg",
    alt: "ARK Client Center messages page showing several customer conversations",
  },
  {
    title: "Approve and manage employees",
    body: "Add approved employees, control their access, and keep assigned work connected to the business workspace.",
    image: "/client-center-employees.svg",
    alt: "ARK Client Center employee management page showing pending and active employees",
  },
];

const faqItems = [
  {
    question: "Is ARK Client Center only a voicemail service?",
    answer: "No. The receptionist asks the caller the questions your business needs and sends the organized lead into the client center.",
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
    answer: "Yes. Customers can reply STOP to opt out and use the ARK support page to report a messaging concern directly to the platform.",
  },
];

export default function Home() {
  return (
    <main className={`${config.font} ${config.theme.pageBg} ${config.theme.pageText}`}>
      <SiteHeader />

      <section className={`border-b border-orange-200 px-4 py-16 text-center sm:px-6 sm:py-20 ${config.theme.heroBg}`}>
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-600">ARK Client Center</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">Manage leads and client conversations with ease.</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-700">Turn calls into organized leads, manage employees, confirm appointments, and message customers without exposing your private phone number.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/download" className={config.theme.button}>Download the App</Link>
            <Link href="/how-it-works" className={config.theme.secondaryButton}>How It Works</Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-10 px-4 py-10 sm:px-6 sm:py-14">
        <section className={`${config.theme.sectionBg} p-6 sm:p-9`}>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">More than voicemail</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">The receptionist collects the information instead of only taking a message.</h2>
          <div className="mt-5 space-y-4 leading-7 text-slate-700">
            <p>A lot of answering systems only say, “Would you like to leave a message?” ARK talks the customer through the questions your business actually needs.</p>
            <p>The caller can explain the work, provide the address, request a date and time, and leave useful notes. You receive an organized lead that is ready for the next step.</p>
          </div>
        </section>

        <section className={`${config.theme.sectionBg} p-6 sm:p-9`}>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">About ARK Client Center</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Built to make running a small business less scattered.</h2>
          <div className="mt-5 space-y-4 leading-7 text-slate-700">
            <p>ARK Client Center was started by Andrew Christensen with a simple goal: help small-business owners keep track of real opportunities without living inside missed calls, handwritten notes, and personal text messages.</p>
            <p>The goal is not to bury businesses in complicated software. It is to give owners one clear place to see who called, what they need, when they want service, who is handling the work, and what conversation needs attention next.</p>
          </div>
          <Link href="/about" className="mt-6 inline-flex font-black text-orange-600 underline decoration-2 underline-offset-4 hover:text-orange-700">Read the full story</Link>
        </section>

        <section className={`${config.theme.sectionBg} p-6 sm:p-9`}>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">How it works</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">From the first call to the next step.</h2>
          <div className="mt-7 space-y-4">
            {steps.map((step, index) => (
              <article key={step.title} className={`${config.theme.cardBg} p-5 sm:p-6`}>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-600">Step {index + 1}</p>
                <h3 className="mt-2 text-xl font-black">{step.title}</h3>
                <p className="mt-2 leading-7 text-slate-700">{step.body}</p>
              </article>
            ))}
          </div>
          <Link href="/how-it-works" className="mt-6 inline-flex font-black text-orange-600 underline decoration-2 underline-offset-4 hover:text-orange-700">View the full process</Link>
        </section>

        <section className={`${config.theme.sectionBg} p-6 sm:p-9`}>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">What it looks like</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">A clear workspace instead of another complicated dashboard.</h2>
          <div className="mt-8 space-y-14">
            {previews.map((preview, index) => (
              <article key={preview.title} className={index ? "border-t border-orange-200 pt-12" : ""}>
                <h3 className="text-2xl font-black">{preview.title}</h3>
                <p className="mt-2 max-w-3xl leading-7 text-slate-700">{preview.body}</p>
                <img src={preview.image} alt={preview.alt} className="mx-auto mt-7 w-full max-w-[430px] rounded-[2rem] border border-slate-300 bg-slate-100 shadow-xl" />
              </article>
            ))}
          </div>
        </section>

        <section className={`${config.theme.sectionBg} p-6 sm:p-9`}>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">FAQ</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Common questions</h2>
          <div className="mt-7 space-y-4">
            {faqItems.map((item) => (
              <article key={item.question} className={`${config.theme.cardBg} p-5 sm:p-6`}>
                <h3 className="text-lg font-black">{item.question}</h3>
                <p className="mt-2 leading-7 text-slate-700">{item.answer}</p>
              </article>
            ))}
          </div>
          <Link href="/faq" className="mt-6 inline-flex font-black text-orange-600 underline decoration-2 underline-offset-4 hover:text-orange-700">View every question</Link>
        </section>

        <section className="rounded-3xl border border-orange-300 bg-orange-50 p-7 text-center shadow-lg sm:p-10">
          <h2 className="text-3xl font-black tracking-tight">Open ARK Client Center.</h2>
          <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-700">Choose a download option or report a messaging concern directly to ARK.</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/download" className={config.theme.button}>View Download Options</Link>
            <Link href="/support" className={config.theme.secondaryButton}>Report a Messaging Concern</Link>
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
