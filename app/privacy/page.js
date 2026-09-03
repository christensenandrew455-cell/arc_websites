import Link from "next/link";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const sections = [
  ["What this policy covers", "This Privacy Policy explains how ARK Websites collects, uses, stores, shares, exports, and deletes information through the ARK website, ARK Client Center, the AI receptionist, lead management, notifications, support, and billing services."],
  ["Information collected", "ARK may process owner and business details, account identifiers and settings, caller contact information, project addresses, requested services, urgency, preferred scheduling windows, project notes, consent records, accepted-lead plan usage, payment-provider identifiers, notification tokens, support and feedback submissions, security events, and technical records needed to operate the service."],
  ["Calls and AI processing", "Phone and AI providers process call audio and transcribed or generated content while providing the receptionist. ARK uses the resulting service-request details to create a lead for the connected business. The receptionist is designed to use the business information supplied for that account and to collect the information needed for one service request."],
  ["How information is used", "ARK uses information to create and verify accounts; operate the receptionist; receive, organize, and display leads and clients; deliver notifications and service-request status updates; count accepted leads; process billing and rewards; provide support and downloads; prevent fraud or abuse; maintain and improve the service; and meet legal obligations."],
  ["Payments", "Apple or Stripe processes sensitive payment details under its own privacy practices. ARK stores the provider identifiers, purchase or subscription status, selected plan, billing dates, accepted-lead allowance, top-ups, credits, and payment events needed to verify purchases and operate the account. ARK does not receive full card numbers, card security codes, or Apple Account credentials."],
  ["Texts and consent data", "ARK may send new-lead, account, and service-request status texts. Mobile information, SMS opt-in data, and consent records are not sold or shared for unrelated third-party advertising. Text recipients can reply STOP to opt out and HELP for the support path. A messaging-concern support request may include the sending number and an optional screenshot."],
  ["Service providers and disclosures", "ARK may share information with providers that supply hosting, databases, phone service, AI processing, payment processing, authentication, email, text delivery, notifications, security, support, and app distribution. They receive the information reasonably needed for their role. ARK may also disclose information when required by law or reasonably necessary to protect people, rights, safety, security, or the service."],
  ["Retention, export, and deletion", "ARK generally keeps active account and customer data while needed to provide the service. AI-help chat clears 24 hours after the last message. Owners can download supported current account data and can choose available lead-retention settings. Typed-confirmation account deletion removes the active account and supported lead and client data, but limited billing, transaction, call-total, security, fraud-prevention, agreement, audit, backup, deletion, or legal records may remain where required or permitted."],
  ["Security", "ARK uses administrative, technical, and organizational safeguards intended to protect information, including authentication, account-status checks, server-side authorization, private connection keys, and payment-provider verification. No internet, phone, cloud, or storage system can guarantee absolute security, so users should protect credentials and devices and report suspected misuse."],
  ["Choices and requests", "Owners can change notification choices, download supported data, manage billing, and delete the account through ARK Client Center. Text recipients can use STOP and HELP. Anyone can use the public Support page for account, access, correction, deletion, privacy, or messaging concerns. ARK may need to verify identity and account authority before completing a request."],
  ["Sale of information", "ARK does not sell customer, caller, lead, owner, or account information for money and does not use it for unrelated third-party advertising."],
  ["Policy updates", "ARK may update this policy as the service, pricing, providers, or legal requirements change. The effective date appears on this page, and ARK may request renewed acceptance when a material change requires it."],
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <SiteHeader />
      <section className="border-b border-orange-200 bg-gradient-to-b from-orange-50 to-white px-4 py-10 text-center sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">Effective September 3, 2026</p>
          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Privacy Policy</h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">How ARK handles information across the website, application, receptionist, lead-management, notification, support, and billing services.</p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl space-y-4 px-3 py-6 sm:space-y-5 sm:px-6 sm:py-14">
        {sections.map(([title, body]) => (
          <section key={title} className="rounded-3xl border border-orange-200 bg-white p-4 shadow-sm sm:p-8">
            <h2 className="text-2xl font-black">{title}</h2>
            <p className="mt-3 leading-7 text-slate-600">{body}</p>
          </section>
        ))}

        <section className="rounded-3xl border border-orange-200 bg-orange-50 p-4 sm:p-8">
          <h2 className="text-2xl font-black">Questions or privacy requests</h2>
          <p className="mt-3 leading-7 text-slate-600">Use Support and provide an email address or phone number where ARK can contact you about the request.</p>
          <Link href="/support" className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-orange-500 px-5 py-3 text-sm font-black text-white hover:bg-orange-600 sm:w-auto">Open Support</Link>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
