import Link from "next/link";
import Image from "next/image";
import config from "../homeConfig";
import { GetAppLink } from "./AppStoreRouting";

function Brand() {
  return (
    <Link href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3" aria-label="ARK Client Center home">
      <Image src={config.logoUrl} alt="ARK Client Center" width={44} height={44} priority className="h-10 w-10 shrink-0 rounded-xl object-contain sm:h-11 sm:w-11" />
      <span className="truncate text-base font-black tracking-tight text-slate-950 sm:text-xl">ARK Client Center</span>
    </Link>
  );
}

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Brand />

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {config.headerLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-bold text-slate-600 transition hover:text-orange-700">
              {link.name}
            </Link>
          ))}
        </nav>

        <GetAppLink className="hidden rounded-xl bg-slate-950 px-5 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-orange-600 sm:inline-flex" />

        <details className="relative shrink-0 sm:hidden">
          <summary className="grid min-h-11 cursor-pointer list-none place-items-center rounded-xl border border-slate-200 bg-white px-3 text-sm font-black text-slate-950">Menu</summary>
          <div className="absolute right-0 mt-3 w-64 max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl">
            <GetAppLink className="block rounded-xl bg-slate-950 px-4 py-3 text-sm font-black text-white">Get the App</GetAppLink>
            {config.headerLinks.map((link) => (
              <Link key={`${link.name}-${link.href}`} href={link.href} className="block rounded-xl px-4 py-3 text-sm font-bold text-slate-700 hover:bg-orange-50 hover:text-orange-700">
                {link.name}
              </Link>
            ))}
            <Link href="/support" className="block rounded-xl px-4 py-3 text-sm font-bold text-slate-700 hover:bg-orange-50 hover:text-orange-700">Support</Link>
          </div>
        </details>
      </div>
    </header>
  );
}
