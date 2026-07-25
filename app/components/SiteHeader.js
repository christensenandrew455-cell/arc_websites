import Link from "next/link";
import config from "../homeConfig";

function Brand() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="ARK Client Center home">
      <img src={config.logoUrl} alt="ARK Client Center" className="h-11 w-11 rounded-xl object-contain" />
      <span className="text-lg font-black tracking-tight text-slate-950 sm:text-xl">ARK Client Center</span>
    </Link>
  );
}

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-orange-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Brand />

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary navigation">
          {config.headerLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-bold text-slate-700 transition hover:text-orange-600">
              {link.name}
            </Link>
          ))}
        </nav>

        <Link href="/download" className="hidden rounded-xl bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-orange-600 sm:inline-flex">
          Download App
        </Link>

        <details className="relative sm:hidden">
          <summary className="cursor-pointer list-none rounded-xl border border-orange-200 bg-white px-3 py-2 text-sm font-black text-slate-950">Menu</summary>
          <div className="absolute right-0 mt-3 w-60 overflow-hidden rounded-2xl border border-orange-200 bg-white p-2 shadow-xl">
            {[...config.headerLinks, { name: "Download App", href: "/download" }].map((link) => (
              <Link key={`${link.name}-${link.href}`} href={link.href} className="block rounded-xl px-4 py-3 text-sm font-bold text-slate-700 hover:bg-orange-50 hover:text-orange-700">
                {link.name}
              </Link>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}
