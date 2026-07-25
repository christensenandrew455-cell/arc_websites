const config = {
  businessName: "ARK Client Center",
  email: "christensenandrew455@gmail.com",
  logoUrl: "/ark-logo.svg",
  showLogo: true,
  showNavLinks: true,
  headerButtonText: "Download App",
  headerLinks: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Support", href: "/support" },
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ],
  font: "font-sans",
  theme: {
    pageBg: "bg-slate-950",
    pageText: "text-white",
    headerBg: "bg-slate-950/90",
    headerBorder: "border-white/10",
    headerText: "text-white",
    heroBg: "bg-slate-950",
    sectionBg: "rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl",
    cardBg: "rounded-2xl border border-white/10 bg-white/[0.05]",
    testimonialBg: "rounded-2xl border border-white/10 bg-white/[0.05]",
    button: "inline-flex items-center justify-center rounded-2xl bg-cyan-400 px-6 py-3 font-black text-slate-950 transition hover:bg-cyan-300",
    accentText: "text-cyan-300",
  },
};

export default config;
