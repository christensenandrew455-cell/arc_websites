import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const sections = [
  {
    title: "Information collected",
    body: "Depending on how the service is used, ARK Client Center may process account information, business information, caller ID, lead details, customer messages, consent records, device notification tokens, billing records, and support-report information. A support report may include a name, contact phone number, the number that sent the message, a description, and an optional screenshot.",
  },
  {
    title: "How information is used",
    body: "Information is used to operate the receptionist, organize leads and clients, deliver business messages, provide notifications, process billing, investigate support or abuse reports, secure the platform, and comply with legal or carrier requirements.",
  },
  {
    title: "Text messaging and consent data",
    body: "Mobile information, SMS opt-in data, and consent records are not sold or shared with third parties for promotional or marketing purposes. They may be shared only with vendors that help provide the messaging service, such as platform providers, telecommunications carriers, hosting providers, and security or delivery vendors.",
  },
  {
    title: "Service providers",
    body: "ARK may use third-party providers to host the platform, process calls and text messages, provide artificial-intelligence services, authenticate users, store data, process payments, deliver notifications, and receive support reports. Those providers receive only the information reasonably needed to perform their services.",
  },
  {
    title: "Retention and deletion",
    body: "Information is retained for as long as reasonably needed to provide the service, maintain security and billing records, resolve disputes, investigate reports, and meet legal obligations. Account holders may request account or data deletion through the client center or support process, subject to records ARK must retain.",
  },
  {
    title: "Messaging choices",
    body: "Recipients can reply STOP to opt out of future text messages. They can reply HELP for the support and reporting path. Opting out does not prevent a person from contacting the business through another available method.",
  },
  {
    title: "Security",
    body: "ARK uses reasonable administrative and technical safeguards, but no online service can guarantee absolute security. Users are responsible for protecting their login credentials and devices.",
  },
  {
    title: "Policy updates",
    body: "This policy may be updated as the platform, providers, or legal requirements change. The current version will remain available on this page with its effective date.",
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <SiteHeader />
      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">Effective July 24, 2026</p>
          <h1 className="mt-3 text-5xl font-black tracking-tight">Privacy Policy</h1>
          <p className="mt-5 leading-7 text-slate-300">This policy explains how ARK Client Center handles information through its website, receptionist connections, client-center application, messaging features, and support process.</p>

          <div className="mt-10 space-y-5">
            {sections.map((section) => (
              <section key={section.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
                <h2 className="text-2xl font-black">{section.title}</h2>
                <p className="mt-3 leading-7 text-slate-300">{section.body}</p>
              </section>
            ))}
          </div>

          <section className="mt-5 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-6 sm:p-8">
            <h2 className="text-2xl font-black">Questions or privacy requests</h2>
            <p className="mt-3 leading-7 text-slate-200">Use the ARK Client Center support page and provide a phone number where ARK can contact you about the request.</p>
            <Link href="/support" className="mt-5 inline-flex rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-black text-slate-950">Open Support</Link>
          </section>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
