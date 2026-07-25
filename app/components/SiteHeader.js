import Link from "next/link";
import config from "../homeConfig";

function Brand() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="ARK Client Center home">
      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-400 text-xs font-black tracking-[0.16em] text-slate-950 shadow-lg shadow-cyan-400/20">
        ARK
      </span>
      <span>
        <span className="block text-sm font-black uppercase tracking-[0.2em] text-cyan-300">ARK</span>
        <span className="block text-sm font-bold text-white sm:text-base">Client Center</span>
      </span>
    </Link>
  );
}

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Brand />

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {config.headerLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-bold text-slate-300 transition hover:text-white">
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden sm:block">
          <Link href="/download" className="inline-flex rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-black text-slate-950 transition hover:bg-cyan-300">
            Download App
          </Link>
        </div>

        <details className="relative sm:hidden">
          <summary className="cursor-pointer list-none rounded-xl border border-white/15 px-3 py-2 text-sm font-black text-white">Menu</summary>
          <div className="absolute right-0 mt-3 w-56 overflow-hidden rounded-2xl border border-white/10 bg-slate-900 p-2 shadow-2xl">
            {[...config.headerLinks, { name: "Download App", href: "/download" }].map((link) => (
              <Link key={`${link.name}-${link.href}`} href={link.href} className="block rounded-xl px-4 py-3 text-sm font-bold text-slate-200 hover:bg-white/10">
                {link.name}
              </Link>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}
