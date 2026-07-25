import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

const features = [
  {
    title: "Never lose a lead",
    body: "Calls handled by the ARK receptionist can become organized leads with contact details, service needs, notes, and requested estimate times.",
  },
  {
    title: "Keep your personal number private",
    body: "Use a dedicated business number for customer conversations instead of sharing an owner or employee's personal cell number.",
  },
  {
    title: "Manage the whole conversation",
    body: "Review leads, accept clients, follow up, track conversations, and keep important client information in one focused workspace.",
  },
  {
    title: "Built for real service businesses",
    body: "ARK Client Center is designed around the daily work of contractors and small teams—not generic enterprise software.",
  },
];

const steps = [
  ["1", "A customer calls", "The customer reaches the business through its dedicated ARK phone number."],
  ["2", "The receptionist gathers details", "The caller's inquiry, contact information, service request, and preferred timing are organized."],
  ["3", "The business follows up", "The owner or approved employee can review the lead and continue the customer conversation."],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <SiteHeader />

      <section className="relative overflow-hidden px-4 pb-24 pt-20 sm:px-6 sm:pt-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-blue-600/15 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_.92fr]">
          <div>
            <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
              Leads. Clients. Conversations.
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Keep every customer opportunity in one secure client center.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              ARK Client Center helps service businesses capture leads from their receptionist, protect personal phone numbers, and manage customer follow-up from one app.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/download" className="inline-flex justify-center rounded-2xl bg-cyan-400 px-6 py-4 text-sm font-black text-slate-950 transition hover:bg-cyan-300">
                Download the App
              </Link>
              <Link href="/about" className="inline-flex justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-black text-white transition hover:bg-white/10">
                See How It Works
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-cyan-950/40 backdrop-blur">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-900 p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">Today</p>
                  <h2 className="mt-1 text-2xl font-black">Business Overview</h2>
                </div>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-black text-emerald-300">Connected</span>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {[["Leads", "12"], ["Messages", "8"], ["Employees", "3"]].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs font-bold text-slate-400">{label}</p>
                    <p className="mt-2 text-3xl font-black">{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 space-y-3">
                {["New estimate request", "Customer replied to your message", "Estimate time awaiting confirmation"].map((item, index) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-cyan-400 text-xs font-black text-slate-950">{index + 1}</span>
                    <p className="text-sm font-bold text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">What it does</p>
          <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">More than a missed-call notification.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {features.map((feature) => (
              <article key={feature.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
                <h3 className="text-xl font-black">{feature.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{feature.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">How it works</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">A simple path from phone call to customer follow-up.</h2>
              <p className="mt-5 leading-7 text-slate-300">The receptionist and client center work together so the business can respond without exposing personal contact information.</p>
            </div>
            <div className="space-y-4">
              {steps.map(([number, title, body]) => (
                <article key={number} className="grid grid-cols-[auto_1fr] gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-400 text-lg font-black text-slate-950">{number}</span>
                  <div>
                    <h3 className="text-xl font-black">{title}</h3>
                    <p className="mt-2 leading-7 text-slate-300">{body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-400/15 to-blue-600/10 p-8 text-center sm:p-14">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">Ready to open your client center?</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">Download the app or open the secure web version.</h2>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/download" className="rounded-2xl bg-cyan-400 px-6 py-4 text-sm font-black text-slate-950 hover:bg-cyan-300">View Download Options</Link>
            <Link href="/support" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-black text-white hover:bg-white/10">Report a Messaging Concern</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
