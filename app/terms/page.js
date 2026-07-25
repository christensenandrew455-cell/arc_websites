import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const sections = [
  {
    title: "The service",
    body: "ARK Client Center provides tools for connected receptionist intake, lead and client organization, business messaging, employee access, notifications, and related account management. Features may change as the platform develops.",
  },
  {
    title: "Business accounts and employees",
    body: "The account owner is responsible for the accuracy of business information, account security, employee access, and all activity performed through the account. Employees may use only the permissions granted by the owner.",
  },
  {
    title: "Messaging program",
    body: "ARK Client Center supports customer-care conversations about inquiries, estimates, scheduling, appointments, and related service follow-up. Message frequency varies based on the conversation. Message and data rates may apply. Reply STOP to opt out and HELP for the support or reporting path.",
  },
  {
    title: "Consent and lawful messaging",
    body: "Businesses may message only people who have provided appropriate consent or otherwise lawfully initiated the conversation. Businesses must honor opt-out requests and may not use ARK Client Center for cold-message lists, purchased contacts, unlawful marketing, harassment, impersonation, threats, fraud, or misleading content.",
  },
  {
    title: "Prohibited conduct",
    body: "Users may not send illegal, abusive, discriminatory, sexually explicit, exploitative, deceptive, or malicious content; interfere with the platform; attempt unauthorized access; evade account restrictions; or use the service in a way that harms customers, carriers, vendors, or ARK.",
  },
  {
    title: "Reports, suspension, and termination",
    body: "ARK may investigate credible support or abuse reports. ARK may limit messaging, suspend employees, disable a business account, preserve relevant records, or terminate access when reasonably necessary to protect recipients, the platform, or service providers. Serious matters may be referred to appropriate authorities when required or justified.",
  },
  {
    title: "Fees and third-party charges",
    body: "Account fees, usage charges, telecommunications charges, carrier registration charges, taxes, app-store charges, and payment-processing costs may apply according to the selected plan and connected providers. A separate service agreement may contain additional pricing terms.",
  },
  {
    title: "Third-party services",
    body: "The platform depends on third-party telecommunications, hosting, artificial-intelligence, payment, authentication, notification, and app-distribution services. ARK is not responsible for outages, delays, carrier filtering, store-review decisions, or provider restrictions outside ARK's reasonable control.",
  },
  {
    title: "No guaranteed outcome",
    body: "ARK does not guarantee that every call will create a lead, every message will be delivered, every customer will respond, or every requested appointment will be accepted. Businesses remain responsible for reviewing records and following up appropriately.",
  },
  {
    title: "Changes to these terms",
    body: "ARK may update these terms as the platform and applicable requirements change. Continued use after an updated effective date constitutes acceptance of the revised terms to the extent permitted by law.",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <SiteHeader />
      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">Effective July 24, 2026</p>
          <h1 className="mt-3 text-5xl font-black tracking-tight">Terms & Conditions</h1>
          <p className="mt-5 leading-7 text-slate-300">These terms govern access to and use of the ARK Client Center website, application, receptionist connections, and messaging tools.</p>

          <div className="mt-10 space-y-5">
            {sections.map((section) => (
              <section key={section.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
                <h2 className="text-2xl font-black">{section.title}</h2>
                <p className="mt-3 leading-7 text-slate-300">{section.body}</p>
              </section>
            ))}
          </div>

          <section className="mt-5 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-6 sm:p-8">
            <h2 className="text-2xl font-black">Support and reports</h2>
            <p className="mt-3 leading-7 text-slate-200">Questions about these terms or concerns about messages sent through ARK Client Center can be submitted through the support page.</p>
            <Link href="/support" className="mt-5 inline-flex rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-black text-slate-950">Open Support</Link>
          </section>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
