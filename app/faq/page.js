import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import config from "../homeConfig";

const questions = [
  ["Is ARK Client Center only a voicemail service?", "No. The receptionist talks the caller through the information the business needs and sends an organized lead into the client center."],
  ["What information can the receptionist collect?", "The flow can collect the caller's name, service request, address, notes, preferred estimate date, preferred time, and other details the business needs."],
  ["Do I have to publish my private phone number?", "No. The business can use a dedicated ARK number for calls and customer conversations."],
  ["Can I message a customer from the app?", "Yes. Approved owners and employees can continue a one-to-one customer conversation through the connected business number."],
  ["Can employees use ARK Client Center?", "Yes. The owner can approve employee accounts, control access, assign work, enable messaging, or disable an employee account."],
  ["Can I separate new leads from accepted clients?", "Yes. New receptionist inquiries and accepted clients are displayed separately so the owner can clearly see what still needs attention."],
  ["Can customers stop text messages?", "Yes. A customer can reply STOP to opt out. The business cannot send another message unless the customer opts back in."],
  ["How can someone report an inappropriate message?", "The customer can reply HELP for the support path or submit a report through the ARK Client Center support page."],
  ["Is the web app available without installing anything?", "Yes. The secure hosted client center can be opened in a modern browser. Official Android and iPhone download options appear on the Download page when available."],
  ["Does ARK guarantee every lead or message?", "No. Calls, internet connections, telecommunications carriers, app stores, and other providers can affect delivery. Businesses should still review their records and follow up appropriately."],
];

export default function FAQPage() {
  return (
    <main className={`${config.font} bg-white text-slate-950`}>
      <SiteHeader />

      <section className={`border-b border-orange-200 px-4 py-14 text-center sm:px-6 sm:py-18 ${config.theme.heroBg}`}>
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-600">FAQ</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Questions about ARK Client Center.</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-700">Clear answers about the receptionist, leads, employees, messaging, privacy, and app access.</p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-10 px-4 py-10 sm:px-6 sm:py-14">
        <section className={`${config.theme.sectionBg} p-6 sm:p-9`}>
          <div className="space-y-4">
            {questions.map(([question, answer]) => (
              <article key={question} className={`${config.theme.cardBg} p-5 sm:p-7`}>
                <h2 className="text-xl font-black">{question}</h2>
                <p className="mt-3 leading-7 text-slate-700">{answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-orange-300 bg-orange-50 p-7 text-center shadow-lg sm:p-10">
          <h2 className="text-3xl font-black">Need something else?</h2>
          <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-700">Open Support for a platform question or to report a messaging concern.</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/support" className={config.theme.button}>Open Support</Link>
            <Link href="/download" className={config.theme.secondaryButton}>Download Options</Link>
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
