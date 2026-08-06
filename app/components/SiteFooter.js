import Link from "next/link";

export default function SiteFooter() {
  const links = [
    ["About", "/about"],
    ["How It Works", "/#how-it-works"],
    ["Live Demo", "/#live-demo"],
    ["Pricing", "/#pricing"],
    ["Support", "/support"],
    ["Privacy Policy", "/privacy"],
    ["Terms & Conditions", "/terms"],
  ];

  return (
    <footer className="border-t border-slate-200 bg-slate-950 px-4 pb-[calc(2.5rem+env(safe-area-inset-bottom))] pt-12 text-slate-400">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-xl font-black text-white">ARK Client Center</p>
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-6">Your calls answered, your leads organized, and your next step clear.</p>
        <div className="mt-6 grid grid-cols-2 gap-2 text-sm font-bold sm:flex sm:flex-wrap sm:justify-center sm:gap-x-5 sm:gap-y-3">
          {links.map(([name, href]) => (
            <Link key={`${name}-${href}`} href={href} className="grid min-h-11 place-items-center rounded-xl px-2 hover:bg-white/5 hover:text-orange-400">{name}</Link>
          ))}
        </div>
        <p className="mt-7 text-xs text-slate-600">© 2026 ARK Client Center. All rights reserved.</p>
      </div>
    </footer>
  );
}
