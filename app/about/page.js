import Link from "next/link";
import config from "../homeConfig";
import siteConfig from "../siteConfig";
import aboutConfig from "../aboutConfig";
import SiteHeader from "../components/SiteHeader";

export default function AboutPage() {
  return (
    <main
      className={`${config.font} ${config.theme.pageBg} ${config.theme.pageText}`}
    >
      {siteConfig.showHeader && <SiteHeader />}

      <div className="max-w-6xl mx-auto p-4 md:p-12">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-5 md:mb-6 leading-tight">
            {aboutConfig.pageTitle}
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Learn more about ARK Websites, our mission, and our commitment to helping small businesses build a stronger online presence.
          </p>
        </div>

        <div className="mb-10 md:mb-16">
          <img
            src={aboutConfig.heroImage}
            alt={aboutConfig.pageTitle}
            className="w-full h-64 md:h-[500px] object-cover rounded-3xl shadow-xl"
          />
        </div>

        <div className="space-y-6 md:space-y-8">
          {aboutConfig.sections.map((section) => (
            <section
              key={section.title}
              className={`${config.theme.sectionBg} p-5 md:p-10`}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {section.title}
              </h2>

              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                {section.content}
              </p>
            </section>
          ))}

          <section className={`${config.theme.sectionBg} p-5 md:p-10`}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Socials
            </h2>

            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              We are not available on any socials right now. For now, the best way to reach ARK Websites is through the contact page, email, or phone number listed on the site.
            </p>
          </section>
        </div>

        <section className="text-center mt-10 md:mt-16">
          <Link
            href={siteConfig.contactPageRoute}
            className={config.theme.button}
          >
            {aboutConfig.contactButtonText}
          </Link>

          <p className="mt-6 text-sm font-semibold text-gray-500">
            Managed by ARK Websites
          </p>
        </section>
      </div>

      {siteConfig.showFooter && (
        <footer
          className={`
            p-6
            border-t
            ${
              siteConfig.footerCentered
                ? "text-center"
                : "text-left"
            }
          `}
        >
          <p>{config.email}</p>

          <p>{config.phone}</p>

          <p className="mt-4 text-sm font-semibold text-gray-500">
            Managed by ARK Websites
          </p>

          <Link
            href={siteConfig.privacyPageRoute}
            className="block mt-3 text-blue-600 underline"
          >
            Privacy Policy
          </Link>
        </footer>
      )}
    </main>
  );
}
