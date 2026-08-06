import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import config from "../homeConfig";

const sections = [
  {
    title: "Why ARK was started",
    paragraphs: [
      "ARK Client Center was started after Andrew Christensen saw a real problem through a friend who runs a painting company. The phone would ring, and there was no easy way to know whether the caller was a real customer, a scammer, or someone trying to sell something.",
      "That meant stopping work, answering the phone, and hoping the call was worth the interruption. ARK was built to make that first call useful before it ever reaches the business owner.",
    ],
  },
  {
    title: "How the receptionist works",
    paragraphs: [
      "When someone calls your ARK number, the receptionist connects that call to your account. It uses the business information you added to answer questions and guide the caller through the information your business needs.",
      "It does not make up details about your company. If a caller asks for business information, it uses what is stored in your account. If the caller asks why information is needed, it gives a short explanation and keeps the conversation moving.",
    ],
  },
  {
    title: "How a call becomes a lead",
    paragraphs: [
      "The receptionist guides the caller through the lead form one question at a time. The lead is not sent to your account until the required information is complete.",
      "The call flow also asks for consent before the lead is sent. Once consent is granted and the required details are filled in, the lead appears in the Leads area of the app.",
    ],
  },
  {
    title: "What happens in the app",
    paragraphs: [
      "When a new lead arrives, you can open it, review the details, and accept or decline it. After you accept it, you can message the customer, save the contact, add the job or appointment to your calendar, or assign the lead to an employee.",
      "Saving a contact opens your phone's contact flow with the lead information ready to use. Adding to the calendar prepares the event details so you can review them and save the event.",
    ],
  },
  {
    title: "Messaging without sharing your personal number",
    paragraphs: [
      "You can message customers through the ARK business number instead of giving out your personal number. That helps keep business conversations separate and gives you more control over who can reach you directly.",
      "This is useful whether you speak with a few customers each week or hundreds of people every day.",
    ],
  },
  {
    title: "Employee access and control",
    paragraphs: [
      "You can add employees to your account and assign them to specific leads or customers. Employee permissions control what each person is allowed to see.",
      "For example, you can allow an employee to work with a lead without showing the customer's phone number or address. You decide what information is available to each employee.",
    ],
  },
  {
    title: "Call safeguards",
    paragraphs: [
      "The receptionist is designed to keep the call focused on collecting a useful lead. It can answer questions from your saved business information, explain why a question is being asked, and return to the intake flow.",
      "Required details and consent must be completed before a lead is delivered. These safeguards help keep incomplete conversations from appearing as finished opportunities.",
    ],
  },
  {
    title: "Testing and development",
    paragraphs: [
      "ARK has been tested in real business settings for about a year. Early testers have used it to handle incoming calls, organize leads, and avoid spending time on callers who did not become real opportunities.",
      "The app is still being improved around the needs of small service businesses, with an emphasis on clear screens, simple actions, and useful lead information.",
    ],
  },
  {
    title: "Why the pricing works this way",
    paragraphs: [
      "ARK uses a monthly base price plus fixed usage charges. A smaller business with fewer calls can use the same receptionist without taking on a large office-software bill.",
      "A business with more call and message activity pays more because it uses the service more. The price per call lead and message usage stays clear, so the same system can work for businesses at different sizes.",
    ],
  },
  {
    title: "About the builder",
    paragraphs: [
      "Andrew Christensen has been working with software and AI for about three and a half years. Before building ARK, he also worked in landscaping and saw how difficult it can be to stop a job every time the phone rings.",
      "ARK Client Center combines that hands-on service-business perspective with software built to make calls, leads, messages, calendars, contacts, and employees easier to manage.",
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <SiteHeader />

      <section className={`border-b border-orange-200 px-4 py-14 text-center sm:px-6 sm:py-24 ${config.theme.heroBg}`}>
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">About ARK Client Center</h1>
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
