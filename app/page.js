import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import { GetAppLink } from "./components/AppStoreRouting";
import config from "./homeConfig";
import { demoPhone, demoPhoneHref, signupUrl } from "./productLinks";

const quickLinks = [
  {
    eyebrow: "New here?",
    title: "See how ARK works",
    body: "Follow a customer call from the receptionist to an organized lead.",
    href: "#how-it-works",
  },
  {
    eyebrow: "Want to hear it?",
    title: "Call the live demo",
    body: "Try a real receptionist conversation before you decide.",
    href: "/download#live-demo",
  },
  {
    eyebrow: "Ready to use it?",
    title: "Get the app",
    body: "Open the correct mobile store or choose your version on desktop.",
    appLink: true,
  },
  {
    eyebrow: "Already a customer?",
    title: "Get support",
    body: "Find account, privacy, billing, and messaging help in one place.",
    href: "/support",
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
    body: "Review the lead, accept the client, add the estimate to your calendar, assign an employee, save the contact, or continue the conversation through the dedicated business number.",
  },
];

const previews = [
  {
    phrase: "A clear workspace",
    title: "Business overview",
    details: ["New receptionist leads", "Accepted clients", "Unread messages", "Employee access"],
  },
  {
    phrase: "Every lead organized",
    title: "Leads and clients",
    details: ["Contacted You and Clients", "Service and address details", "Save a contact", "Add an estimate to your calendar"],
  },
  {
    phrase: "Keep conversations together",
    title: "Client conversations",
    details: ["Simple conversation list", "Dedicated business number", "Unread-message count", "Automatic STOP protection"],
  },
  {
    phrase: "Your team connected",
    title: "Employee management",
    details: ["Approve employee accounts", "Control employee access", "Assign accepted clients", "Keep work in one workspace"],
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
    answer: "ARK Client Center charges $50 per month, plus $2 per AI receptionist call, $1 per 50 SMS message parts, and $5 per active approved employee account each month.",
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

      <section className={`border-b border-orange-200 px-4 py-14 text-center sm:px-6 sm:py-24 ${config.theme.heroBg}`}>
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-7xl">ARK Client Center</h1>
          <h2 className="mx-auto mt-4 max-w-3xl text-xl font-black tracking-tight text-slate-900 sm:text-3xl">An AI receptionist that collects every lead while you keep working.</h2>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <GetAppLink className={config.theme.button}>Get the App</GetAppLink>
            {demoPhoneHref ? (
              <a href={demoPhoneHref} className={config.theme.secondaryButton}>Call Demo: {demoPhone}</a>
            ) : (
              <Link href="/download#live-demo" className={config.theme.secondaryButton}>Try the Live Demo</Link>
            )}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-5 px-3 py-6 sm:space-y-8 sm:px-6 sm:py-12">
        <section className={`${config.theme.sectionBg} p-4 sm:p-8`}>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">Go straight to what you need</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">What are you here to do?</h2>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((item) => {
              const card = <><p className="text-[10px] font-black uppercase tracking-[0.18em] text-orange-600">{item.eyebrow}</p><h3 className="mt-2 text-lg font-black">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p><span className="mt-4 inline-flex text-sm font-black text-orange-700">Go →</span></>;
              return item.appLink
                ? <GetAppLink key={item.title} className="rounded-2xl border border-orange-200 bg-orange-50/50 p-5 transition hover:-translate-y-0.5 hover:border-orange-400 hover:shadow-md">{card}</GetAppLink>
                : <Link key={item.title} href={item.href} className="rounded-2xl border border-orange-200 bg-orange-50/50 p-5 transition hover:-translate-y-0.5 hover:border-orange-400 hover:shadow-md">{card}</Link>;
            })}
          </div>
        </section>

        <section id="how-it-works" className={`scroll-mt-24 ${config.theme.sectionBg} p-4 sm:p-8`}>
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

        <section id="features" className={`scroll-mt-24 ${config.theme.sectionBg} p-4 sm:p-8`}>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">Inside the client center</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Only the tools needed to handle the next step.</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {previews.map((preview) => (
              <article key={preview.title} className="rounded-2xl border border-orange-200 bg-orange-50/50 p-5 sm:p-6">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-600">{preview.phrase}</p>
                <h3 className="mt-2 text-xl font-black text-slate-950 sm:text-2xl">{preview.title}</h3>
                <ul className="mt-4 space-y-2 text-sm font-semibold text-slate-700">
                  {preview.details.map((detail) => <li key={detail}>✓ {detail}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className={`${config.theme.sectionBg} p-4 sm:p-8`}>
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

        <section className="rounded-3xl border border-orange-300 bg-orange-50 p-5 text-center shadow-lg sm:p-9">
          <h2 className="text-3xl font-black tracking-tight">Ready to stop missing calls?</h2>
          <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-700">Get ARK Client Center on your device, or start your business setup in the web app.</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <GetAppLink className={config.theme.button}>Get the App</GetAppLink>
            <a href={signupUrl} className={config.theme.secondaryButton}>Start Setup</a>
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
