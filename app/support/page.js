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

  const inputClass = "h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-slate-950 outline-none transition focus:border-orange-500";

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <SiteHeader />
      <section className="border-b border-orange-200 bg-gradient-to-b from-orange-50 to-white px-4 py-14 text-center sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">Support and messaging reports</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Tell ARK what happened.</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">Report inappropriate, abusive, misleading, or unwanted messages sent through an ARK-connected business number.</p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="mb-6 rounded-2xl border border-orange-200 bg-orange-50 p-5 text-sm leading-6 text-slate-700">
          <p><strong>Text STOP first</strong> to block future messages. This form is for concerns ARK should review. No email address is required.</p>
        </div>

        <div className="rounded-3xl border border-orange-200 bg-white p-6 shadow-lg sm:p-9">
          {status === "success" ? (
            <div className="py-16 text-center">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-orange-500 text-2xl font-black text-white">✓</span>
              <h2 className="mt-5 text-3xl font-black">Thank you for your report.</h2>
              <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-600">We received it and will review it carefully. If more information is needed, ARK will contact the phone number you provided.</p>
              <button type="button" onClick={() => setStatus("idle")} className="mt-6 rounded-xl bg-orange-500 px-5 py-3 text-sm font-black text-white hover:bg-orange-600">Submit Another Report</button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-5">
              <div>
                <h2 className="text-2xl font-black">Messaging concern report</h2>
                <p className="mt-2 text-sm text-slate-500">Complete the required fields below.</p>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-black">Your name *</span>
                <input required name="name" value={form.name} onChange={change} autoComplete="name" className={inputClass} />
              </label>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-black">Your phone number *</span>
                  <input required type="tel" name="contactPhone" value={form.contactPhone} onChange={change} autoComplete="tel" placeholder="+1 978 555 0123" className={inputClass} />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-black">Number that texted you *</span>
                  <input required type="tel" name="senderNumber" value={form.senderNumber} onChange={change} placeholder="+1 978 555 0456" className={inputClass} />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-black">Business name <span className="font-normal text-slate-500">(optional)</span></span>
                <input name="businessName" value={form.businessName} onChange={change} className={inputClass} />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-black">What happened? *</span>
                <textarea required name="description" value={form.description} onChange={change} rows={6} maxLength={4000} className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-950 outline-none transition focus:border-orange-500" />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-black">Screenshot <span className="font-normal text-slate-500">(optional, JPG/PNG/WebP, 5 MB max)</span></span>
                <input type="file" accept="image/jpeg,image/png,image/webp" onChange={(event) => setScreenshot(event.target.files?.[0] || null)} className="block w-full rounded-xl border border-dashed border-orange-300 bg-orange-50 p-4 text-sm text-slate-600 file:mr-4 file:rounded-lg file:border-0 file:bg-orange-500 file:px-4 file:py-2 file:font-black file:text-white" />
              </label>

              <input tabIndex="-1" autoComplete="off" name="website" value={form.website} onChange={change} className="hidden" aria-hidden="true" />

              <label className="flex items-start gap-3 rounded-xl border border-orange-200 bg-orange-50 p-4">
                <input required type="checkbox" name="consent" checked={form.consent} onChange={change} className="mt-1 h-4 w-4 accent-orange-500" />
                <span className="text-sm leading-6 text-slate-700">I agree that ARK Client Center may call or text the phone number I provided only about this report.</span>
              </label>

              {error && <p className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-700">{error}</p>}

              <button disabled={status === "sending"} className="w-full rounded-xl bg-orange-500 px-6 py-4 text-sm font-black text-white transition hover:bg-orange-600 disabled:opacity-50">
                {status === "sending" ? "Submitting…" : "Submit Report"}
              </button>
            </form>
          )}
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
