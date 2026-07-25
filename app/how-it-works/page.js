import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import config from "../homeConfig";

const steps = [
  {
    title: "The customer calls the dedicated business number",
    body: "The business does not have to publish an owner's or employee's private cell number. The customer reaches the ARK receptionist through the connected business number.",
  },
  {
    title: "The receptionist asks the useful questions",
    body: "Instead of only taking a voicemail, the receptionist gathers the caller's name, service request, address, notes, preferred date, and preferred time.",
  },
  {
    title: "The caller confirms the information and contact permission",
    body: "Before the lead is saved, the caller reviews the information and agrees that the business may contact them about the inquiry.",
  },
  {
    title: "The organized lead appears in ARK Client Center",
    body: "The owner can review the new lead, accept the person as a client, edit the details, assign an employee, or open a conversation.",
  },
  {
    title: "The business continues the relationship",
    body: "Owners and approved employees can follow up through the dedicated business number, manage the appointment, and keep the conversation connected to the client record.",
  },
];

export default function HowItWorksPage() {
  return (
    <main className={`${config.font} bg-white text-slate-950`}>
      <SiteHeader />

      <section className={`border-b border-orange-200 px-4 py-14 text-center sm:px-6 sm:py-18 ${config.theme.heroBg}`}>
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-600">How it works</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">From a phone call to an organized client relationship.</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-700">The receptionist collects the information, ARK Client Center organizes it, and the business decides what happens next.</p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-10 px-4 py-10 sm:px-6 sm:py-14">
        <section className={`${config.theme.sectionBg} p-6 sm:p-9`}>
          <div className="space-y-5">
            {steps.map((step, index) => (
              <article key={step.title} className={`${config.theme.cardBg} p-5 sm:p-7`}>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-600">Step {index + 1}</p>
                <h2 className="mt-2 text-2xl font-black">{step.title}</h2>
                <p className="mt-3 leading-7 text-slate-700">{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={`${config.theme.sectionBg} p-6 sm:p-9`}>
          <h2 className="text-3xl font-black">What the business sees</h2>
          <p className="mt-3 leading-7 text-slate-700">The client center keeps the important parts visible without turning the workspace into a complicated wall of controls.</p>
          <div className="mt-8 space-y-12">
            <div>
              <h3 className="text-xl font-black">An organized business overview</h3>
              <img src="/client-center-stats.svg" alt="ARK Client Center business statistics screen" className="mx-auto mt-5 w-full max-w-[430px] rounded-[2rem] border border-slate-300 shadow-xl" />
            </div>
            <div className="border-t border-orange-200 pt-10">
              <h3 className="text-xl font-black">Leads that are ready for action</h3>
              <img src="/client-center-leads.svg" alt="ARK Client Center leads and clients screen" className="mx-auto mt-5 w-full max-w-[430px] rounded-[2rem] border border-slate-300 shadow-xl" />
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-orange-300 bg-orange-50 p-7 text-center shadow-lg sm:p-10">
          <h2 className="text-3xl font-black">Ready to open the client center?</h2>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/download" className={config.theme.button}>Download Options</Link>
            <Link href="/faq" className={config.theme.secondaryButton}>Read the FAQ</Link>
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
