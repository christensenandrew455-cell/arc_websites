"use client";

import { useState } from "react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const initialForm = {
  name: "",
  contactPhone: "",
  senderNumber: "",
  businessName: "",
  description: "",
  consent: false,
  website: "",
};

export default function SupportPage() {
  const [form, setForm] = useState(initialForm);
  const [screenshot, setScreenshot] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  function change(event) {
    const { name, value, type, checked } = event.target;
    setForm((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }));
  }

  async function submit(event) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const body = new FormData();
      Object.entries(form).forEach(([key, value]) => body.append(key, String(value)));
      if (screenshot) body.append("screenshot", screenshot);

      const response = await fetch("/api/support", { method: "POST", body });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.success) throw new Error(data.error || "The report could not be submitted.");

      setForm(initialForm);
      setScreenshot(null);
      setStatus("success");
      event.currentTarget.reset();
    } catch (submitError) {
      setError(submitError.message);
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <SiteHeader />
      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">Support & messaging reports</p>
            <h1 className="mt-4 text-5xl font-black tracking-[-0.04em]">Tell ARK what happened.</h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">Use this form to report inappropriate, abusive, misleading, or unwanted messages sent through an ARK-connected business number.</p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <h2 className="font-black">Text STOP first</h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">STOP opts the number out of future messages. Submit this form as well when ARK should investigate the business or account.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <h2 className="font-black">No email required</h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">ARK will use the phone number you provide only to follow up about this report.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <h2 className="font-black">Emergencies</h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">This form is not an emergency service. Contact local emergency services when there is an immediate threat to safety.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-5 shadow-2xl sm:p-8">
            {status === "success" ? (
              <div className="grid min-h-[32rem] place-items-center text-center">
                <div>
                  <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-400 text-2xl font-black text-slate-950">✓</span>
                  <h2 className="mt-6 text-3xl font-black">Thank you for your report.</h2>
                  <p className="mx-auto mt-3 max-w-md leading-7 text-slate-300">We received it and will review it carefully. If more information is needed, ARK will contact the phone number you provided.</p>
                  <button type="button" onClick={() => setStatus("idle")} className="mt-7 rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-black text-slate-950">Submit Another Report</button>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div>
                  <h2 className="text-2xl font-black">Messaging concern report</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-400">All fields marked required must be completed.</p>
                </div>

                <label className="block">
                  <span className="mb-2 block text-xs font-black uppercase tracking-[0.12em] text-slate-300">Your name *</span>
                  <input required name="name" value={form.name} onChange={change} autoComplete="name" className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 text-white outline-none focus:border-cyan-300" />
                </label>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-xs font-black uppercase tracking-[0.12em] text-slate-300">Your phone number *</span>
                    <input required type="tel" name="contactPhone" value={form.contactPhone} onChange={change} autoComplete="tel" placeholder="+1 978 555 0123" className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 text-white outline-none focus:border-cyan-300" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs font-black uppercase tracking-[0.12em] text-slate-300">Number that texted you *</span>
                    <input required type="tel" name="senderNumber" value={form.senderNumber} onChange={change} placeholder="+1 978 555 0456" className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 text-white outline-none focus:border-cyan-300" />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-xs font-black uppercase tracking-[0.12em] text-slate-300">Business name <span className="normal-case tracking-normal text-slate-500">(optional)</span></span>
                  <input name="businessName" value={form.businessName} onChange={change} className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 text-white outline-none focus:border-cyan-300" />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-black uppercase tracking-[0.12em] text-slate-300">What happened? *</span>
                  <textarea required name="description" value={form.description} onChange={change} rows={6} maxLength={4000} className="w-full rounded-2xl border border-white/10 bg-slate-950 p-4 text-white outline-none focus:border-cyan-300" />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-black uppercase tracking-[0.12em] text-slate-300">Screenshot <span className="normal-case tracking-normal text-slate-500">(optional, JPG/PNG/WebP, 5 MB max)</span></span>
                  <input type="file" accept="image/jpeg,image/png,image/webp" onChange={(event) => setScreenshot(event.target.files?.[0] || null)} className="block w-full rounded-2xl border border-dashed border-white/15 bg-slate-950 p-4 text-sm text-slate-300 file:mr-4 file:rounded-xl file:border-0 file:bg-cyan-400 file:px-4 file:py-2 file:font-black file:text-slate-950" />
                </label>

                <input tabIndex="-1" autoComplete="off" name="website" value={form.website} onChange={change} className="hidden" aria-hidden="true" />

                <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950 p-4">
                  <input required type="checkbox" name="consent" checked={form.consent} onChange={change} className="mt-1 h-4 w-4 accent-cyan-400" />
                  <span className="text-sm leading-6 text-slate-300">I agree that ARK Client Center may call or text the phone number I provided only about this report.</span>
                </label>

                {error && <p className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm font-bold text-red-200">{error}</p>}

                <button disabled={status === "sending"} className="w-full rounded-2xl bg-cyan-400 px-6 py-4 text-sm font-black text-slate-950 transition hover:bg-cyan-300 disabled:opacity-50">
                  {status === "sending" ? "Submitting…" : "Submit Report"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
