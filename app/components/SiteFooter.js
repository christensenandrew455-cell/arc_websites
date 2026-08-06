import Link from "next/link";
import { GetAppLink } from "./AppStoreRouting";
import { demoPhone, demoPhoneHref } from "../productLinks";

export default function SiteFooter() {
  const links = [
    ["About", "/about"],
    ["How It Works", "/#how-it-works"],
    ["Pricing", "/#pricing"],
    ["Support", "/support"],
    ["Privacy Policy", "/privacy"],
    ["Terms & Conditions", "/terms"],
  ];

  return (
    <footer id="live-demo" className="scroll-mt-24 border-t border-slate-200 bg-slate-950 px-4 pb-[calc(2.5rem+env(safe-area-inset-bottom))] pt-12 text-slate-400">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">Hear it yourself.</h2>
        <div className="mx-auto mt-8 grid max-w-md gap-3 sm:max-w-xl sm:grid-cols-2">
          <a
            href={demoPhoneHref || "/#live-demo"}
            className="inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-orange-600 px-6 py-4 text-base font-black text-white transition hover:bg-orange-500"
          >
            {demoPhoneHref ? `Try the Live Demo: ${demoPhone}` : "Try the Live Demo"}
          </a>
          <GetAppLink className="inline-flex min-h-14 w-full items-center justify-center rounded-xl border border-slate-700 bg-white px-6 py-4 text-base font-black text-slate-950 transition hover:bg-slate-100">
            Get the App
          </GetAppLink>
        </div>
        <div className="mt-7 grid grid-cols-2 gap-2 text-sm font-bold sm:flex sm:flex-wrap sm:justify-center sm:gap-x-5 sm:gap-y-3">
          {links.map(([name, href]) => (
            <Link key={`${name}-${href}`} href={href} className="grid min-h-11 place-items-center rounded-xl px-2 hover:bg-white/5 hover:text-orange-400">{name}</Link>
          ))}
        </div>
        <p className="mt-7 text-xs text-slate-600">© 2026 ARK Client Center. All rights reserved.</p>
      </div>
    </footer>
  );
}
