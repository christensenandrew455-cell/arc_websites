import Link from "next/link";
import config from "../homeConfig";
import siteConfig from "../siteConfig";
import servicesConfig from "../servicesConfig";

export default function ServicesPage() {
  return (
    <main
      className={`${config.font} ${config.theme.pageBg} ${config.theme.pageText}`}
    >
      {siteConfig.showHeader && (
        <header
          className={`sticky top-0 z-50 border-b ${config.theme.headerBg} ${config.theme.headerBorder} backdrop-blur`}
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {config.showLogo && config.logoUrl && (
                <img
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

            <div className="flex items-center gap-6">
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
                Contact Us
              </Link>
            </div>
          </div>
        </header>
      )}

      <div className="max-w-7xl mx-auto p-6 md:p-12">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {servicesConfig.pageTitle}
          </h1>

          <p className="text-xl max-w-4xl mx-auto text-gray-700">
            {servicesConfig.pageSubtitle}
          </p>
        </div>

        <div className="space-y-12">
          {servicesConfig.services.map((service, index) => (
            <section
              key={service.title}
              className={`
                grid md:grid-cols-2
                gap-10
                items-center
                ${config.theme.sectionBg}
                p-8
                md:p-12
              `}
            >
              <div
                className={
                  index % 2 === 1
                    ? "md:order-2"
                    : ""
                }
              >
                <div
                  className={`inline-block ${config.theme.button} mb-6`}
                >
                  {service.title}
                </div>

                <p className="text-lg leading-relaxed text-gray-700">
                  {service.description}
                </p>
              </div>

              <div
                className={
                  index % 2 === 1
                    ? "md:order-1"
                    : ""
                }
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full rounded-3xl shadow-lg"
                />
              </div>
            </section>
          ))}
        </div>

        <section className="text-center mt-20">
          <Link
            href={siteConfig.contactPageRoute}
            className={config.theme.button}
          >
            {servicesConfig.contactButtonText}
          </Link>
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
