import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const sections = [
  ["Information collected", "Depending on how the service is used, ARK Client Center may process account information, business information, caller ID, lead details, customer messages, consent records, device notification tokens, billing records, and support-report information. A support report may include a name, contact phone number, the number that sent the message, a description, and an optional screenshot."],
  ["How information is used", "Information is used to operate the receptionist, organize leads and clients, deliver business messages, provide notifications, process billing, investigate support or abuse reports, secure the platform, and comply with legal or carrier requirements."],
  ["Text messaging and consent data", "Mobile information, SMS opt-in data, and consent records are not sold or shared with third parties for promotional or marketing purposes. They may be shared only with vendors that help provide the messaging service, such as platform providers, telecommunications carriers, hosting providers, and security or delivery vendors."],
  ["Service providers", "ARK may use third-party providers to host the platform, process calls and text messages, provide artificial-intelligence services, authenticate users, store data, process payments, deliver notifications, and receive support reports. Those providers receive only the information reasonably needed to perform their services."],
  ["Retention and deletion", "Information is retained for as long as reasonably needed to provide the service, maintain security and billing records, resolve disputes, investigate reports, and meet legal obligations. Account holders may request account or data deletion through the client center or support process, subject to records ARK must retain."],
  ["Messaging choices", "Recipients can reply STOP to opt out of future text messages. They can reply HELP for the support and reporting path. Opting out does not prevent a person from contacting the business through another available method."],
  ["Security", "ARK uses reasonable administrative and technical safeguards, but no online service can guarantee absolute security. Users are responsible for protecting their login credentials and devices."],
  ["Policy updates", "This policy may be updated as the platform, providers, or legal requirements change. The current version will remain available on this page with its effective date."],
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <SiteHeader />
      <section className="border-b border-orange-200 bg-gradient-to-b from-orange-50 to-white px-4 py-14 text-center sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">Effective July 24, 2026</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Privacy Policy</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">How ARK Client Center handles information through the website, application, receptionist connections, messaging features, and support process.</p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl space-y-5 px-4 py-10 sm:px-6 sm:py-14">
        {sections.map(([title, body]) => (
          <section key={title} className="rounded-3xl border border-orange-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-black">{title}</h2>
            <p className="mt-3 leading-7 text-slate-600">{body}</p>
          </section>
        ))}

        <section className="rounded-3xl border border-orange-200 bg-orange-50 p-6 sm:p-8">
          <h2 className="text-2xl font-black">Questions or privacy requests</h2>
          <p className="mt-3 leading-7 text-slate-600">Use the ARK Client Center support page and provide a phone number where ARK can contact you about the request.</p>
          <Link href="/support" className="mt-5 inline-flex rounded-xl bg-orange-500 px-5 py-3 text-sm font-black text-white hover:bg-orange-600">Open Support</Link>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
