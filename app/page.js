import Link from "next/link";
import config from "./homeConfig";
import siteConfig from "./siteConfig";

export default function Home() {
return (
<main
className={`${config.font} ${config.theme.pageBg} ${config.theme.pageText}`}
>
{siteConfig.showHeader && (
<header
className={`sticky top-0 z-50 border-b ${config.theme.headerBg} ${config.theme.headerBorder} backdrop-blur`}
> <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"> <div className="flex items-center gap-3">
{config.showLogo && config.logoUrl && ( <img
               src={config.logoUrl}
               alt={config.businessName}
               className="h-12 w-auto object-contain"
             />
)}

          <h1
            className={`text-2xl font-bold ${config.theme.accentText}`}
          >
            {config.businessName}
          </h1>
        </div>

        <div className="flex items-center gap-8">
          {config.showNavLinks && (
            <nav className="hidden md:flex items-center gap-6">
              {config.headerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-medium hover:opacity-80 transition"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          )}

          <Link
            href={siteConfig.contactPageRoute}
            className={config.theme.button}
          >
            {config.headerButtonText || "Contact Us"}
          </Link>
        </div>
      </div>
    </header>
  )}

  <section
    className={`min-h-screen flex items-center justify-center text-center px-6 ${config.theme.heroBg}`}
  >
    <div>
      <h1 className="text-6xl md:text-8xl font-extrabold mb-6">
        {config.heroTitle}
      </h1>

      <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-700">
        {config.heroSubtitle}
      </p>

      <Link
        href={siteConfig.contactPageRoute}
        className={`inline-block mt-10 ${config.theme.button}`}
      >
        {config.contactButtonText}
      </Link>
    </div>
  </section>

  <div
    className={`mx-auto ${siteConfig.maxWidth} ${siteConfig.pagePadding}`}
  >
    <section className={`${config.theme.sectionBg} p-8 mb-12`}>
      <h2
        className={`text-4xl font-bold mb-8 ${config.theme.accentText}`}
      >
        About Us
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          ["Our Story", config.companyStory],
          ["Our Mission", config.mission],
          ["What We Do", config.whatWeDo],
          ["Areas We Serve", config.serviceAreas],
        ].map(([title, content]) => (
          <div
            key={title}
            className={`${config.theme.cardBg} p-6`}
          >
            <h3 className="text-2xl font-semibold mb-3">
              {title}
            </h3>

            <p className="text-gray-700">
              {content}
            </p>
          </div>
        ))}

        <div
          className={`${config.theme.cardBg} p-6 md:col-span-2`}
        >
          <h3 className="text-2xl font-semibold mb-3">
            Why Choose Us
          </h3>

          <p className="text-gray-700">
            {config.whyChooseUs}
          </p>
        </div>
      </div>
    </section>

    <section className={`${config.theme.sectionBg} p-8 mb-12`}>
      <h2
        className={`text-4xl font-bold mb-8 ${config.theme.accentText}`}
      >
        Our Work
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">
                {site.name}
              </h3>

              <p className="text-gray-700 mb-4">
                {site.description}
              </p>

              <span className="text-blue-600 font-semibold">
                View Website →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>

    <section className={`${config.theme.sectionBg} p-8`}>
      <h2
        className={`text-4xl font-bold mb-8 ${config.theme.accentText}`}
      >
        Testimonials
      </h2>

      <div className="space-y-6">
        {config.testimonials.map((t, i) => (
          <div
            key={i}
            className={`${config.theme.testimonialBg} p-6`}
          >
            <p className="font-semibold text-lg">
              {t.name}
            </p>

            <p className="text-blue-400 mb-2">
              {"★".repeat(t.stars)}
            </p>

            <p className="text-gray-700">
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

    <section className="text-center py-20">
      <h2 className="text-5xl font-bold mb-4">
        Ready To upgrade your business?
      </h2>

      <p className="text-gray-700 mb-8 text-lg">
        Contact ARC Websites to get started.
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
    <footer className="border-t border-blue-500/20 py-8 text-center">
      <p>{config.email}</p>

      {config.phone && (
        <p className="mt-1">
          {config.phone}
        </p>
      )}

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
