import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import config from "./homeConfig";

const steps = [
  {
    title: "The customer calls",
    body: "Your ARK receptionist answers the business number and talks the caller through the information needed for the inquiry or estimate.",
  },
  {
    title: "The lead appears in your client center",
    body: "The caller's name, service, address, notes, and requested date and time are organized for you instead of being left in a voicemail.",
  },
  {
    title: "You decide what happens next",
    body: "Review the lead, accept the client, confirm the appointment, add the contact, assign an employee, or continue the conversation through the business number.",
  },
];

const faqItems = [
  {
    question: "Is this just a voicemail service?",
    answer: "No. The receptionist talks the caller through the questions your business needs, organizes the information, and sends the completed lead into your client center.",
  },
  {
    question: "Do I have to give customers my private phone number?",
    answer: "No. Calls and customer conversations can use the business's dedicated ARK number so owners and employees can keep their personal numbers private.",
  },
  {
    question: "Can employees use the client center?",
    answer: "Yes. Approved employees can be added to the business workspace and given access to the work the owner assigns to them.",
  },
  {
    question: "Can customers stop messages or report a concern?",
    answer: "Yes. Customers can reply STOP to opt out. They can also use the ARK support page to report a messaging concern directly to the platform.",
  },
];

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="mb-7">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      {children && <p className="mt-3 max-w-3xl leading-7 text-slate-600">{children}</p>}
    </div>
  );
}

function PhoneFrame({ children, label }) {
  return (
    <div className="mx-auto max-w-[430px] overflow-hidden rounded-[2rem] border border-slate-300 bg-slate-100 shadow-xl">
      <div className="flex items-center justify-between bg-slate-900 px-5 py-3 text-xs font-bold text-white">
        <span>10:42</span>
        <span>{label}</span>
        <span>▮▮ 25%</span>
      </div>
      <div className="bg-white px-4 py-5">
        <div className="flex items-start justify-between gap-3 border-b border-slate-200 pb-4">
          <div>
            <p className="text-xl font-black text-slate-950">ARK Client Center</p>
            <p className="mt-1 text-xs font-black uppercase tracking-[0.18em] text-slate-500">SUMMIT HOME SERVICES</p>
          </div>
          <span className="rounded-xl border border-slate-300 px-3 py-2 text-xs font-black text-slate-700">Settings</span>
        </div>
        {children}
      </div>
    </div>
  );
}

function StatsPreview() {
  return (
    <PhoneFrame label="Dashboard">
      <div className="py-6">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">Business overview</p>
        <h3 className="mt-2 text-4xl font-black">Your Stats</h3>
        <div className="mt-5 grid grid-cols-3 overflow-hidden rounded-xl border border-slate-200 text-center text-xs font-black">
          <span className="px-2 py-3 text-slate-500">Today</span>
          <span className="px-2 py-3 text-slate-500">This Month</span>
          <span className="bg-slate-950 px-2 py-3 text-white">All Time</span>
        </div>
        <div className="mt-5 rounded-2xl bg-slate-950 p-6 text-white">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-300">Leads</p>
          <div className="mt-2 flex items-end justify-between gap-4">
            <p className="text-sm font-semibold text-slate-400">Open leads and accepted clients</p>
            <p className="text-6xl font-black">24</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-slate-200 p-5">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-600">Messages</p>
            <p className="mt-4 text-4xl font-black">11</p>
            <p className="mt-1 text-xs font-semibold text-slate-400">Open conversations</p>
          </div>
          <div className="rounded-2xl bg-orange-50 p-5">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-orange-700">Employees</p>
            <p className="mt-4 text-4xl font-black">4</p>
            <p className="mt-1 text-xs font-semibold text-orange-700/60">Approved accounts</p>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}

function LeadsPreview() {
  const clients = [
    ["Jordan Miller", "Exterior painting · 18 Maple Street"],
    ["Ashley Reed", "Kitchen remodel · 42 Central Avenue"],
    ["Marcus Lee", "Deck staining · 7 Oak Road"],
  ];
  return (
    <PhoneFrame label="Leads">
      <div className="py-6">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">SUMMIT HOME SERVICES</p>
        <h3 className="mt-2 text-4xl font-black">Leads</h3>
        <p className="mt-2 text-sm font-semibold text-slate-500">Review new receptionist leads and accepted clients.</p>
        <div className="mt-5 grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-slate-200 p-5">
            <p className="text-4xl font-black">6</p>
            <p className="mt-2 font-black">Contacted You</p>
          </div>
          <div className="rounded-2xl bg-slate-950 p-5 text-white">
            <p className="text-4xl font-black">18</p>
            <p className="mt-2 font-black">Clients</p>
          </div>
        </div>
        <div className="mt-5 rounded-2xl border border-slate-200 p-4">
          <div className="flex items-center justify-between">
            <h4 className="text-2xl font-black">Clients</h4>
            <span className="rounded-xl border border-slate-300 px-3 py-2 text-xs font-black">All Time</span>
          </div>
          <div className="mt-4 space-y-3">
            {clients.map(([name, detail]) => (
              <div key={name} className="rounded-xl bg-slate-50 p-4">
                <p className="font-black">{name}</p>
                <p className="mt-1 truncate text-xs font-semibold text-slate-500">{detail}</p>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <span className="rounded-lg border border-slate-300 px-3 py-2 text-center text-xs font-black">View</span>
                  <span className="rounded-lg bg-slate-950 px-3 py-2 text-center text-xs font-black text-white">Message</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}

function MessagesPreview() {
  const chats = [
    ["Jordan Miller", "Can Tuesday afternoon work?", "2"],
    ["Ashley Reed", "Thank you, that sounds good.", ""],
    ["Marcus Lee", "Could you send the estimate time?", "1"],
    ["Emily Carter", "I added another photo.", ""],
  ];
  return (
    <PhoneFrame label="Messages">
      <div className="py-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">SUMMIT HOME SERVICES</p>
            <h3 className="mt-2 text-4xl font-black">Messages</h3>
          </div>
          <p className="pb-1 text-xs font-black uppercase tracking-[0.12em] text-slate-500">4 chats · 3 unread</p>
        </div>
        <div className="mt-5 space-y-3">
          {chats.map(([name, message, unread], index) => (
            <div key={name} className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4 shadow-sm">
              <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-sm font-black ${index === 0 ? "bg-orange-100 text-orange-700" : "bg-slate-200 text-slate-700"}`}>{name.slice(0, 1)}</span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <p className="truncate font-black">{name}</p>
                  <span className="text-[10px] font-bold text-slate-400">Today</span>
                </div>
                <p className="mt-1 truncate text-xs font-semibold text-slate-500">{message}</p>
              </div>
              {unread && <span className="rounded-full bg-orange-500 px-2 py-1 text-[10px] font-black text-white">{unread}</span>}
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}

function EmployeesPreview() {
  const employees = [
    ["Maya Torres", "Estimator", "Active"],
    ["Daniel Brooks", "Project Manager", "Active"],
    ["Sophie Grant", "Office Assistant", "Active"],
    ["Ethan Cole", "Crew Lead", "Disabled"],
  ];
  return (
    <PhoneFrame label="Employees">
      <div className="py-6">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">Account workspace</p>
        <h3 className="mt-2 text-4xl font-black">Employees</h3>
        <p className="mt-2 text-sm font-semibold leading-6 text-slate-500">Approve employee accounts, control access, and assign work.</p>
        <div className="mt-5 rounded-2xl border border-orange-200 bg-orange-50 p-5">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-orange-700">Pending requests</p>
          <div className="mt-2 flex items-center justify-between gap-3">
            <div>
              <p className="text-2xl font-black">2 waiting</p>
              <p className="mt-1 text-xs font-semibold text-orange-700/70">Free until approved</p>
            </div>
            <span className="rounded-xl bg-slate-950 px-4 py-3 text-xs font-black text-white">Review</span>
          </div>
        </div>
        <div className="mt-5 rounded-2xl border border-slate-200 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Active and disabled</p>
              <p className="mt-1 text-2xl font-black">Employees</p>
            </div>
            <p className="text-xs font-black text-slate-500">3 active</p>
          </div>
          <div className="mt-4 space-y-3">
            {employees.map(([name, role, status]) => (
              <div key={name} className="flex items-center justify-between gap-3 rounded-xl bg-slate-50 p-3">
                <div>
                  <p className="text-sm font-black">{name}</p>
                  <p className="mt-1 text-xs font-semibold text-slate-500">{role}</p>
                </div>
                <span className={`rounded-full px-3 py-1 text-[10px] font-black ${status === "Active" ? "bg-emerald-100 text-emerald-700" : "bg-slate-200 text-slate-600"}`}>{status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}

export default function Home() {
  return (
    <main className={`${config.font} bg-white text-slate-950`}>
      <SiteHeader />

      <section className="border-b border-orange-200 bg-gradient-to-b from-orange-50 to-white px-4 py-14 text-center sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-600">ARK Client Center</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Manage leads and client conversations with ease.</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">Turn calls into organized leads, follow up through a dedicated business number, manage employees, and keep your private contact information private.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/download" className={config.theme.button}>Download the App</Link>
            <Link href="#how-it-works" className={config.theme.secondaryButton}>How It Works</Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-10 px-4 py-10 sm:px-6 sm:py-14">
        <section className={`${config.theme.sectionBg} p-6 sm:p-9`}>
          <SectionHeading eyebrow="More than voicemail" title="The receptionist collects the information instead of just taking a message.">
            A lot of answering systems only ask the caller to leave a voicemail. ARK talks the customer through the questions your business actually needs, then gives you an organized lead you can review and act on.
          </SectionHeading>
          <div className="space-y-4 text-slate-600">
            <p className="leading-7">The caller can explain what they need, provide the service address, request a date and time, and leave any extra notes for the business.</p>
            <p className="leading-7">You can confirm the appointment, add the person to your contacts, accept them as a client, assign an employee, or message them through the app without exposing your personal phone number.</p>
          </div>
        </section>

        <section id="about" className={`${config.theme.sectionBg} scroll-mt-24 p-6 sm:p-9`}>
          <SectionHeading eyebrow="About ARK Client Center" title="Built to make running a small business less scattered.">
            ARK Client Center was started by Andrew Christensen with a simple goal: help small-business owners keep track of opportunities without living inside missed calls, handwritten notes, and personal text messages.
          </SectionHeading>
          <div className="space-y-4 leading-7 text-slate-600">
            <p>The idea grew from seeing how easily a real customer can disappear when the owner is working, driving, or unable to answer the phone. A lead should not be lost just because nobody could stop what they were doing at that exact moment.</p>
            <p>The goal is not to bury businesses in complicated software. It is to give them one simple place to see who called, what they need, when they want service, who is handling the work, and what conversation needs attention next.</p>
          </div>
          <Link href="/about" className="mt-6 inline-flex font-black text-orange-600 underline decoration-2 underline-offset-4 hover:text-orange-700">Read the full story</Link>
        </section>

        <section id="how-it-works" className={`${config.theme.sectionBg} scroll-mt-24 p-6 sm:p-9`}>
          <SectionHeading eyebrow="How it works" title="From the first call to the next step.">
            The receptionist and client center work together, but you stay in control of the customer relationship.
          </SectionHeading>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-orange-200 bg-orange-50/50 p-5 sm:p-6">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-600">Step {index + 1}</p>
                <h3 className="mt-2 text-xl font-black">{step.title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={`${config.theme.sectionBg} p-6 sm:p-9`}>
          <SectionHeading eyebrow="What it looks like" title="A clear workspace instead of another complicated dashboard.">
            These previews show the main parts of the app with a fuller business workspace: stats, leads, conversations, and employees.
          </SectionHeading>

          <div className="space-y-12">
            <article>
              <h3 className="text-2xl font-black">See the business at a glance</h3>
              <p className="mt-2 mb-6 leading-7 text-slate-600">Check leads, active conversations, and employee activity for today, this month, or all time.</p>
              <StatsPreview />
            </article>

            <article className="border-t border-orange-200 pt-10">
              <h3 className="text-2xl font-black">Review leads and accepted clients</h3>
              <p className="mt-2 mb-6 leading-7 text-slate-600">Keep new inquiries separate from accepted clients and open the actions you need without digging through menus.</p>
              <LeadsPreview />
            </article>

            <article className="border-t border-orange-200 pt-10">
              <h3 className="text-2xl font-black">Continue the conversation</h3>
              <p className="mt-2 mb-6 leading-7 text-slate-600">Message customers through the dedicated business number and see which conversations still need attention.</p>
              <MessagesPreview />
            </article>

            <article className="border-t border-orange-200 pt-10">
              <h3 className="text-2xl font-black">Approve and manage employees</h3>
              <p className="mt-2 mb-6 leading-7 text-slate-600">Add approved employees, control access, and keep work connected to the business workspace.</p>
              <EmployeesPreview />
            </article>
          </div>
        </section>

        <section id="faq" className={`${config.theme.sectionBg} scroll-mt-24 p-6 sm:p-9`}>
          <SectionHeading eyebrow="FAQ" title="Common questions" />
          <div className="space-y-4">
            {faqItems.map((item) => (
              <article key={item.question} className="rounded-2xl border border-orange-200 p-5 sm:p-6">
                <h3 className="text-lg font-black">{item.question}</h3>
                <p className="mt-2 leading-7 text-slate-600">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-orange-200 bg-orange-50 p-7 text-center sm:p-10">
          <h2 className="text-3xl font-black tracking-tight">Open ARK Client Center.</h2>
          <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600">Choose a download option or report a messaging concern directly to ARK.</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/download" className={config.theme.button}>View Download Options</Link>
            <Link href="/support" className={config.theme.secondaryButton}>Report a Messaging Concern</Link>
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
