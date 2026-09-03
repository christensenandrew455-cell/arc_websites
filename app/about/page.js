import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import InfoTip from "../components/InfoTip";

const sections = [
  {
    title: "Why ARK",
    detail: "Service businesses need a way to answer calls without stopping the job.",
  },
  {
    title: "How it works",
    detail: "ARK answers, gathers one service request, and sends it to the business.",
  },
  {
    title: "What you get",
    detail: "The service, customer, address, preferred time, and project notes.",
    help: "The preferred day and time window are a request, not a booked appointment. The business confirms the exact time.",
  },
  {
    title: "You stay in control",
    detail: "Accept or decline each request. Only accepted leads use your plan.",
    help: "A request counts once when you tap Accept. Calls, declines, edits, and deletions do not count.",
  },
  {
    title: "About the builder",
    detail: "Andrew Christensen built ARK after seeing this problem in painting and landscaping work.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <SiteHeader />

      <section className="border-b border-orange-200 bg-gradient-to-br from-white via-orange-50 to-orange-100 px-4 py-14 text-center sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">About ARK Client Center</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg font-semibold leading-8 text-slate-700">ARK answers calls and turns them into requests you can review.</p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-5 px-4 py-8 sm:px-6 sm:py-16">
        {sections.map((section, index) => (
          <section key={section.title} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-[0_18px_50px_-40px_rgba(15,23,42,0.45)]">
            <div className="flex items-center gap-4 border-b border-slate-200 bg-white px-5 py-5 sm:px-8">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-orange-100 text-sm font-black text-orange-700">{index + 1}</span>
              <h2 className="text-2xl font-black tracking-tight sm:text-3xl">{section.title}</h2>
            </div>
            <div className="flex items-start gap-3 px-5 py-6 sm:px-8 sm:py-8">
              <p className="text-base font-medium leading-7 text-slate-700 sm:text-lg sm:leading-8">{section.detail}</p>
              {section.help && <InfoTip label={`More about ${section.title}`}>{section.help}</InfoTip>}
            </div>
          </section>
        ))}
      </div>

      <SiteFooter />
    </main>
  );
}
