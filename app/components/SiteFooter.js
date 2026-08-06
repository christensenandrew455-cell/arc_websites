import Link from "next/link";

export default function SiteFooter() {
  const links = [
    ["About", "/about"],
    ["Get Started", "/download"],
    ["Support", "/support"],
    ["Privacy Policy", "/privacy"],
    ["Terms & Conditions", "/terms"],
  ];

  return (
    <footer className="border-t border-orange-200 bg-white px-4 pb-[calc(2.5rem+env(safe-area-inset-bottom))] pt-10 text-slate-600">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-xl font-black text-slate-950">ARK Client Center</p>
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-6">Leads, conversations, appointments, and employees in one simple business workspace.</p>
        <div className="mt-6 grid grid-cols-2 gap-2 text-sm font-bold sm:flex sm:flex-wrap sm:justify-center sm:gap-x-5 sm:gap-y-3">
          {links.map(([name, href]) => (
            <Link key={href} href={href} className="grid min-h-11 place-items-center rounded-xl px-2 hover:bg-orange-50 hover:text-orange-600">{name}</Link>
          ))}
        </div>
        <p className="mt-7 text-xs text-slate-400">© 2026 ARK Client Center. All rights reserved.</p>
      </div>
    </footer>
  );
}
