const config = {
  businessName: "ARK Client Center",
  logoUrl: "/ark-logo.svg",
  showLogo: true,
  showNavLinks: true,
  headerButtonText: "Download App",
  headerLinks: [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "FAQ", href: "/#faq" },
    { name: "Support", href: "/support" },
  ],
  font: "font-sans",
  theme: {
    pageBg: "bg-white",
    pageText: "text-slate-950",
    headerBg: "bg-white/95",
    headerBorder: "border-orange-200",
    headerText: "text-slate-950",
    heroBg: "bg-gradient-to-b from-orange-50 to-white",
    sectionBg: "rounded-3xl border border-orange-200 bg-white shadow-lg",
    cardBg: "rounded-2xl border border-orange-200 bg-white shadow-sm",
    testimonialBg: "rounded-2xl border border-orange-200 bg-white shadow-sm",
    button: "inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3 font-black text-white transition hover:bg-orange-600",
    secondaryButton: "inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 font-black text-slate-950 transition hover:border-orange-400 hover:text-orange-700",
    accentText: "text-orange-600",
  },
};

export default config;
