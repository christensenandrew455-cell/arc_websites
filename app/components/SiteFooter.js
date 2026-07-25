import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-4 py-10 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-300">ARK Client Center</p>
          <p className="mt-2 max-w-lg text-sm leading-6">A secure client and lead workspace for businesses using the ARK receptionist and messaging platform.</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-bold">
          <Link href="/download" className="hover:text-white">Download</Link>
          <Link href="/support" className="hover:text-white">Support</Link>
          <Link href="/privacy" className="hover:text-white">Privacy</Link>
          <Link href="/terms" className="hover:text-white">Terms</Link>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-5 text-xs text-slate-500">
        © 2026 ARK Client Center. All rights reserved.
      </div>
    </footer>
  );
}
