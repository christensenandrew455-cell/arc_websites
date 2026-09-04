import Link from "next/link";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const sections = [
  ["Agreement", "These Terms of Use govern ARK Client Center and its related AI receptionist, lead-management, notification, support, website, billing, and account services. By creating an account, accepting the agreement, adding a payment method, or using the service, the account owner agrees to these Terms and the Privacy Policy and confirms that they are authorized to act for the business."],
  ["The service", "ARK provides connected receptionist intake, service-request review, client organization, notifications, account settings, support, and billing tools. ARK may change features or technical requirements when reasonably needed to maintain, secure, or improve the service."],
  ["Business responsibilities", "The owner is responsible for accurate business information, lawful instructions, account security, downloaded files, and decisions made from lead or customer information. The business must provide any notices and obtain any permissions or consents required for calls, recordings, texts, customer information, and follow-up."],
  ["Monthly accepted-lead plans", "Starter is $24.99 per month for 25 accepted leads; Standard is $47.49 for 50; Growth is $89.99 for 100; and Scale is $169.99 for 200. One unique service request counts when the owner taps Accept. Repeated acceptance attempts, calls, declined leads, edits, and deletions do not count. Unused plan leads do not roll over."],
  ["Additional accepted leads", "The owner may purchase a whole-number quantity of additional accepted leads for the current billing period at $1 each. Top-up leads expire at the next allowance reset and do not roll over. Taxes, custom work, or provider pass-through charges apply only when separately disclosed or agreed."],
  ["Payment, plan changes, and refunds", "The iOS app uses Apple In-App Purchase; web and other supported platforms use Stripe. The payment provider controls completed charges and sensitive payment details. Stripe-billed owners may change plans through the available billing controls. No refunds."],
  ["Payment failure and cancellation", "A failed recurring payment pauses the receptionist and new lead intake while billing access remains available. Stripe-billed accounts may be deleted after the stated seven-day recovery window if payment is not restored; Apple-billed accounts follow Apple's billing-retry schedule. Apple subscriptions must be canceled through Apple. Deleting an ARK account does not cancel billing controlled by Apple."],
  ["Service-related texts", "ARK may send account notifications and service-request status texts. Message frequency varies and message and data rates may apply. Recipients can reply STOP to opt out and HELP for the support path. Users may not use ARK for unlawful marketing, purchased contact lists, harassment, impersonation, threats, fraud, or misleading content."],
  ["AI output and appointments", "Automated systems may route, summarize, classify, or respond to information. Users remain responsible for reviewing that information. A caller's preferred day or time window is not a confirmed appointment, and ARK does not guarantee that any requested date or time is available."],
  ["Third-party services and availability", "ARK depends on telecommunications, hosting, AI, payment, authentication, notification, and app-distribution providers. Maintenance, outages, carrier filtering, store decisions, internet or phone failures, and other events outside ARK's reasonable control may affect availability or delivery. ARK does not promise uninterrupted or error-free operation."],
  ["Suspension and prohibited conduct", "Users may not attempt unauthorized access, evade account restrictions, interfere with the platform, or use the service for illegal, abusive, deceptive, privacy-invasive, or security-invasive activity. ARK may restrict, suspend, or terminate access for nonpayment, misuse, security risk, legal requirements, or a material breach of these Terms."],
  ["No guaranteed business outcome", "ARK does not guarantee that every call will produce a lead, that every lead will become a customer, that a notification or text will be delivered, or that the service will produce revenue. The business remains responsible for reviewing requests, choosing whether to accept them, confirming appointments, and following up."],
  ["Updates", "ARK may update these Terms as the service, pricing, providers, or legal requirements change. The effective date appears on this page. ARK may request renewed acceptance when a material change requires it."],
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <SiteHeader />
      <section className="border-b border-orange-200 bg-gradient-to-b from-orange-50 to-white px-4 py-10 text-center sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">Effective September 4, 2026</p>
          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Terms of Use</h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">The rules for using the ARK website, application, receptionist, lead-management, support, and billing services.</p>
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
          <h2 className="text-2xl font-black">Support</h2>
          <p className="mt-3 leading-7 text-slate-600">Questions about these terms, billing, an account, or a text sent through ARK can be submitted through Support.</p>
          <Link href="/support" className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-orange-500 px-5 py-3 text-sm font-black text-white hover:bg-orange-600 sm:w-auto">Open Support</Link>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
