import Link from "next/link";

const topics = [
  {
    href: "/missed-calls",
    label: "Run the numbers",
    title: "Missed-call math",
    body: "See what unanswered opportunities may be putting at risk.",
  },
  {
    href: "/how-it-works",
    label: "Follow the call",
    title: "How it works",
    body: "See what ARK asks, confirms, and sends to your app.",
  },
  {
    href: "/live-demo",
    label: "Hear it yourself",
    title: "Live demo",
    body: "Call with a sample estimate request and test the conversation.",
  },
  {
    href: "/pricing",
    label: "Know the cost",
    title: "Pricing",
    body: "Understand the monthly base and each usage charge.",
  },
];

export default function TopicNav({ current }) {
  const nextTopics = topics.filter((topic) => topic.href !== current);

  return (
    <section className="border-t border-slate-200 bg-slate-50 px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">Keep learning</p>
        <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Choose what you want to understand next.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {nextTopics.map((topic) => (
            <Link key={topic.href} href={topic.href} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-lg">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-orange-700">{topic.label}</p>
              <h3 className="mt-3 text-2xl font-black text-slate-950">{topic.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{topic.body}</p>
              <span className="mt-5 inline-flex font-black text-orange-700 transition group-hover:translate-x-1">Learn more →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
