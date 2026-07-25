import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-orange-200 bg-white px-4 py-10 text-slate-600">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-lg font-black text-slate-950">ARK Client Center</p>
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-6">Manage leads, client conversations, employees, and follow-up without giving out your private phone number.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm font-bold">
          <Link href="/download" className="hover:text-orange-600">Download</Link>
          <Link href="/support" className="hover:text-orange-600">Support</Link>
          <Link href="/privacy" className="hover:text-orange-600">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-orange-600">Terms & Conditions</Link>
        </div>
        <p className="mt-7 text-xs text-slate-400">© 2026 ARK Client Center. All rights reserved.</p>
      </div>
    </footer>
  );
}
