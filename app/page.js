import Link from "next/link";
import config from "./homeConfig";
import siteConfig from "./siteConfig";
import SiteHeader from "./components/SiteHeader";

export default function Home() {
const faqItems = [
  {
    question: "Do I need to already have a website?",
    answer: "No. We can help small businesses get started with a clean, professional website even if they have no current online presence.",
  },
  {
    question: "Can I request updates after the website is built?",
    answer: "Yes. ARK Websites focuses on website management, updates, and upkeep so your site can stay current as your business changes.",
  },
  {
    question: "Is the website mobile-friendly?",
    answer: "Yes. The layouts are built to work on phones, tablets, and desktop screens so customers can reach you from any device.",
  },
  {
    question: "Do you help with basic SEO?",
    answer: "Yes. We build with clean structure, readable content, and basic SEO-friendly setup to help your business look more professional online.",
  },
];

const socials = ["Twitter / X", "TikTok", "Instagram", "YouTube", "Snapchat", "Facebook"];

return (
<main
className={`${config.font} ${config.theme.pageBg} ${config.theme.pageText}`}
>
{siteConfig.showHeader && <SiteHeader />}

  <section
    className={`min-h-[78vh] md:min-h-screen flex items-center justify-center text-center px-4 md:px-6 py-16 md:py-0 ${config.theme.heroBg}`}
  >
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl sm:text-5xl md:text-8xl font-extrabold mb-5 md:mb-6 leading-tight">
        {config.heroTitle}
      </h1>

      <p className="text-lg md:text-2xl max-w-3xl mx-auto text-gray-700 leading-relaxed">
        {config.heroSubtitle}
      </p>

      <Link
        href={siteConfig.contactPageRoute}
        className={`inline-block mt-8 md:mt-10 ${config.theme.button}`}
      >
        {config.contactButtonText}
      </Link>
    </div>
  </section>

  <div
    className={`mx-auto ${siteConfig.maxWidth} p-4 md:p-12`}
  >
    <section className={`${config.theme.sectionBg} p-5 md:p-8 mb-8 md:mb-12`}>
      <h2
        className={`text-3xl md:text-4xl font-bold mb-6 md:mb-8 ${config.theme.accentText}`}
      >
        About Us
      </h2>

      <div className="grid md:grid-cols-2 gap-5 md:gap-6">
        {[
          ["Our Story", config.companyStory],
          ["Our Mission", config.mission],
          ["What We Do", config.whatWeDo],
          ["Areas We Serve", config.serviceAreas],
        ].map(([title, content]) => (
          <div
            key={title}
            className={`${config.theme.cardBg} p-5 md:p-6`}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              {title}
            </h3>

            <p className="text-gray-700 leading-relaxed">
              {content}
            </p>
          </div>
        ))}

        <div
          className={`${config.theme.cardBg} p-5 md:p-6 md:col-span-2`}
        >
          <h3 className="text-xl md:text-2xl font-semibold mb-3">
            Why Choose Us
          </h3>

          <p className="text-gray-700 leading-relaxed">
            {config.whyChooseUs}
          </p>
        </div>

        <div
          className={`${config.theme.cardBg} p-5 md:p-6 md:col-span-2`}
        >
          <h3 className="text-xl md:text-2xl font-semibold mb-3">
            Socials
          </h3>

          <p className="text-gray-700 leading-relaxed mb-4">
            We are available on these platforms once our social pages are launched.
          </p>

          <div className="flex flex-wrap gap-3">
            {socials.map((social) => (
              <span
                key={social}
                className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700"
              >
                {social}
              </span>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-6 text-center text-gray-700">
        Want to learn more about ARK Websites?{" "}
        <Link href="/about" className="font-semibold text-blue-600 underline hover:text-blue-700">
          Click here to visit our About Us page.
        </Link>
      </p>
    </section>

    <section className={`${config.theme.sectionBg} p-5 md:p-8 mb-8 md:mb-12`}>
      <h2
        className={`text-3xl md:text-4xl font-bold mb-6 md:mb-8 ${config.theme.accentText}`}
      >
        Our Work
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {config.portfolioSites.map((site, i) => (
          <a
            key={i}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${config.theme.cardBg} overflow-hidden block hover:scale-105 transition duration-300`}
          >
            <img
              src={site.image}
              alt={site.name}
              className="w-full h-48 md:h-56 object-cover"
            />

            <div className="p-5 md:p-6">
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                {site.name}
              </h3>

              <p className="text-gray-700 mb-4 leading-relaxed">
                {site.description}
              </p>

              <span className="text-blue-600 font-semibold">
                View Website →
              </span>
            </div>
          </a>
        ))}
      </div>

      <p className="mt-6 text-center text-gray-700">
        Want to see what kind of website we can build for your business?{" "}
        <Link href="/services" className="font-semibold text-blue-600 underline hover:text-blue-700">
          Click here to view our Services page.
        </Link>
      </p>
    </section>

    <section className={`${config.theme.sectionBg} p-5 md:p-8 mb-8 md:mb-12`}>
      <h2
        className={`text-3xl md:text-4xl font-bold mb-6 md:mb-8 ${config.theme.accentText}`}
      >
        Testimonials
      </h2>

      <div className="space-y-5 md:space-y-6">
        {config.testimonials.map((t, i) => (
          <div
            key={i}
            className={`${config.theme.testimonialBg} p-5 md:p-6`}
          >
            <p className="font-semibold text-lg">
              {t.name}
            </p>

            <p className="text-blue-400 mb-2">
              {"★".repeat(t.stars)}
            </p>

            <p className="text-gray-700 leading-relaxed">
              {t.review}
            </p>
          </div>
        ))}
      </div>

      {config.googleReviewsLink && (
        <a
          href={config.googleReviewsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 text-blue-400 hover:text-blue-300"
        >
          View Google Reviews →
        </a>
      )}
    </section>

    <section className={`${config.theme.sectionBg} p-5 md:p-8 mb-8 md:mb-12`}>
      <h2
        className={`text-3xl md:text-4xl font-bold mb-6 md:mb-8 ${config.theme.accentText}`}
      >
        FAQ
      </h2>

      <div className="space-y-4">
        {faqItems.map((item) => (
          <div key={item.question} className={`${config.theme.cardBg} p-5 md:p-6`}>
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              {item.question}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {item.answer}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-6 text-center text-gray-700">
        Still have questions or want to get started?{" "}
        <Link href={siteConfig.contactPageRoute} className="font-semibold text-blue-600 underline hover:text-blue-700">
          Click here to contact us.
        </Link>
      </p>
    </section>

    <section className="text-center py-14 md:py-20">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
        Ready To upgrade your business?
      </h2>

      <p className="text-gray-700 mb-8 text-base md:text-lg">
        Contact ARK Websites to get started.
      </p>

      <Link
        href={siteConfig.contactPageRoute}
        className={config.theme.button}
      >
        {config.contactButtonText}
      </Link>
    </section>
  </div>

  {siteConfig.showFooter && (
    <footer className="border-t border-blue-500/20 py-8 text-center px-4">
      <p>{config.email}</p>

      {config.phone && (
        <p className="mt-1">
          {config.phone}
        </p>
      )}

      <p className="mt-4 text-sm font-semibold text-gray-500">
        Made and managed by{" "}
        <a href="https://arc-websites.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-700">
          ARK Websites
        </a>
      </p>

      <Link
        href={siteConfig.privacyPageRoute}
        className="inline-block mt-4 text-blue-400 hover:text-blue-300"
      >
        Privacy Policy
      </Link>
    </footer>
  )}
</main>

);
}