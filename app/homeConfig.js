const config = {
  businessName: "ARK Client Center",
  logoUrl: "/ark-logo.svg",
  showLogo: true,
  showNavLinks: true,
  headerButtonText: "Download App",
  headerLinks: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "FAQ", href: "/faq" },
    { name: "Support", href: "/support" },
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
    button: "inline-flex items-center justify-center rounded-xl bg-slate-950 px-7 py-3.5 font-black text-white transition hover:bg-orange-600",
    secondaryButton: "inline-flex items-center justify-center rounded-xl border border-orange-300 bg-white px-7 py-3.5 font-black text-slate-950 transition hover:bg-orange-50 hover:text-orange-700",
    accentText: "text-orange-600",
  },
};

export default config;
