import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const sections = [
  {
    title: "Why ARK was started",
    paragraphs: [
      "ARK Client Center started with a problem common to small service businesses: the phone rings while the owner is already doing the work, and there is no quick way to know whether the interruption will become a real job.",
      "ARK makes that first call useful without requiring the owner to stop what they are doing.",
    ],
  },
  {
    title: "How the receptionist works",
    paragraphs: [
      "When someone calls the business's ARK number, the receptionist loads that business's services, service-request hours, service areas, and owner-provided facts.",
      "It guides the caller through one request and uses only the supplied business information to answer business-specific questions. If the answer is not there, it does not invent one.",
    ],
  },
  {
    title: "What ARK collects",
    paragraphs: [
      "The receptionist asks for the requested service, the caller's name, the full project address, a preferred day, a broad morning or afternoon window, and any useful project notes. It also asks for consent before sending the request.",
      "A preference is not a booked appointment. ARK does not promise that an exact date or time is available; the business owner confirms that after reviewing the request.",
    ],
  },
  {
    title: "What happens in the app",
    paragraphs: [
      "A completed request appears in Contacted You for review. The owner can accept it as a client or decline it. Emergency requests appear separately when the business has enabled emergency service and the caller explicitly asks for urgent help.",
      "Accepted clients can be reviewed and edited. The owner can save contact details or create a calendar event after deciding on the actual appointment date and time.",
    ],
  },
  {
    title: "What the plan counts",
    paragraphs: [
      "ARK plans are based on accepted leads, not every call. One unique request counts when the owner taps Accept. Calls, declined requests, edits, and deletions do not use the allowance.",
      "The four monthly plans include 25, 50, 100, or 200 accepted leads. Additional accepted leads cost $1 each for the current billing period and expire at the next reset.",
    ],
  },
  {
    title: "Why the real safeguards stay",
    paragraphs: [
      "The useful safeguards are the ones tied to real failures: account ownership checks, required intake details, caller consent, duplicate-delivery protection, payment verification, and limits that prevent a call from running forever.",
      "Those checks protect customer data, prevent duplicate leads or charges, and keep the receptionist inside the business information it was given.",
    ],
  },
  {
    title: "About the builder",
    paragraphs: [
      "Andrew Christensen built ARK after seeing the interruption problem in service businesses, including painting and landscaping work.",
      "The product is designed around a straightforward handoff: ARK gathers the request, and the business owner makes the business decision.",
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <SiteHeader />

      <section className="border-b border-orange-200 bg-gradient-to-br from-white via-orange-50 to-orange-100 px-4 py-14 text-center sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">About ARK Client Center</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg font-semibold leading-8 text-slate-700">What the product does, where it stops, and which decisions remain with the business owner.</p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-5 px-4 py-8 sm:px-6 sm:py-16">
        {sections.map((section, index) => (
          <section key={section.title} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-[0_18px_50px_-40px_rgba(15,23,42,0.45)]">
            <div className="flex items-center gap-4 border-b border-slate-200 bg-white px-5 py-5 sm:px-8">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-orange-100 text-sm font-black text-orange-700">{index + 1}</span>
              <h2 className="text-2xl font-black tracking-tight sm:text-3xl">{section.title}</h2>
            </div>
            <div className="space-y-4 px-5 py-6 sm:px-8 sm:py-8">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base font-medium leading-7 text-slate-700 sm:text-lg sm:leading-8">{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <SiteFooter />
    </main>
  );
}
