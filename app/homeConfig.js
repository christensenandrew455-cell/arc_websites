const config = {
  businessName: "ARK Client Center",
  logoUrl: "/ark-logo.svg",
  showLogo: true,
  showNavLinks: true,
  headerButtonText: "Start Setup",
  headerLinks: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Support", href: "/support" },
    { name: "Privacy", href: "/privacy" },
  ],
  font: "font-sans",
  theme: {
    pageBg: "bg-white",
    pageText: "text-slate-950",
    headerBg: "bg-white",
    headerBorder: "border-orange-200",
    headerText: "text-slate-950",
    heroBg: "bg-gradient-to-br from-white via-orange-50 to-orange-100",
    sectionBg: "rounded-3xl border border-orange-200 bg-white shadow-xl",
    cardBg: "rounded-2xl border border-orange-200 bg-white shadow-md",
    button: "inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-slate-950 px-6 py-3.5 text-center font-black text-white transition hover:bg-orange-600 sm:w-auto sm:px-7",
    secondaryButton: "inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-orange-300 bg-white px-6 py-3.5 text-center font-black text-slate-950 transition hover:bg-orange-50 hover:text-orange-700 sm:w-auto sm:px-7",
    accentText: "text-orange-600",
  },
};

export default config;
