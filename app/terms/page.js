import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const sections = [
  ["The service", "ARK Client Center provides tools for connected receptionist intake, lead and client organization, business messaging, employee access, notifications, and related account management. Features may change as the platform develops."],
  ["Business accounts and employees", "The account owner is responsible for the accuracy of business information, account security, employee access, and all activity performed through the account. Employees may use only the permissions granted by the owner."],
  ["Messaging program", "ARK Client Center supports customer-care conversations about inquiries, estimates, scheduling, appointments, and related service follow-up. Message frequency varies based on the conversation. Message and data rates may apply. Reply STOP to opt out and HELP for the support or reporting path."],
  ["Consent and lawful messaging", "Businesses may message only people who have provided appropriate consent or otherwise lawfully initiated the conversation. Businesses must honor opt-out requests and may not use ARK Client Center for cold-message lists, purchased contacts, unlawful marketing, harassment, impersonation, threats, fraud, or misleading content."],
  ["Prohibited conduct", "Users may not send illegal, abusive, discriminatory, sexually explicit, exploitative, deceptive, or malicious content; interfere with the platform; attempt unauthorized access; evade account restrictions; or use the service in a way that harms customers, carriers, vendors, or ARK."],
  ["Reports, suspension, and termination", "ARK may investigate credible support or abuse reports. ARK may limit messaging, suspend employees, disable a business account, preserve relevant records, or terminate access when reasonably necessary to protect recipients, the platform, or service providers. Serious matters may be referred to appropriate authorities when required or justified."],
  ["Fees and third-party charges", "The standard ARK Client Center price is $50 per month, plus $2 per AI receptionist call, $1 per 50 SMS message parts, and $5 per active approved employee account each month. Taxes, carrier registration, or separately agreed service charges may also apply when disclosed during setup."],
  ["Third-party services", "The platform depends on third-party telecommunications, hosting, artificial-intelligence, payment, authentication, notification, and app-distribution services. ARK is not responsible for outages, delays, carrier filtering, store-review decisions, or provider restrictions outside ARK's reasonable control."],
  ["No guaranteed outcome", "ARK does not guarantee that every call will create a lead, every message will be delivered, every customer will respond, or every requested appointment will be accepted. Businesses remain responsible for reviewing records and following up appropriately."],
  ["Changes to these terms", "ARK may update these terms as the platform and applicable requirements change. Continued use after an updated effective date constitutes acceptance of the revised terms to the extent permitted by law."],
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <SiteHeader />
      <section className="border-b border-orange-200 bg-gradient-to-b from-orange-50 to-white px-4 py-14 text-center sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">Effective July 24, 2026</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Terms & Conditions</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">The rules for using the ARK Client Center website, application, receptionist connections, and messaging tools.</p>
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
          <h2 className="text-2xl font-black">Support and reports</h2>
          <p className="mt-3 leading-7 text-slate-600">Questions about these terms or concerns about messages sent through ARK Client Center can be submitted through the support page.</p>
          <Link href="/support" className="mt-5 inline-flex rounded-xl bg-orange-500 px-5 py-3 text-sm font-black text-white hover:bg-orange-600">Open Support</Link>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
