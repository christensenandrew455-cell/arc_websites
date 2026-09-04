"use client";

import { useState } from "react";
import InfoTip from "../components/InfoTip";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const categories = [
  ["sales", "Sales question"],
  ["feedback", "Feedback"],
  ["account", "Account help"],
  ["privacy", "Privacy request"],
  ["messaging", "Messaging concern"],
];

const MAX_SCREENSHOT_BYTES = 4 * 1024 * 1024;

const initialForm = {
  category: "sales",
  name: "",
  contactEmail: "",
  contactPhone: "",
  senderNumber: "",
  businessName: "",
  description: "",
  consent: false,
  website: "",
};

function supportedTopic(value) {
  return categories.some(([category]) => category === value) ? value : initialForm.category;
}

export default function SupportForm({ initialTopic = "" }) {
  const [form, setForm] = useState({ ...initialForm, category: supportedTopic(initialTopic) });
  const [screenshot, setScreenshot] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  function change(event) {
    const { name, value, type, checked } = event.target;
    setForm((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }));
  }

  async function submit(event) {
    event.preventDefault();
    const formElement = event.currentTarget;
    setStatus("sending");
    setError("");
    try {
      if (screenshot && screenshot.size > MAX_SCREENSHOT_BYTES) throw new Error("The screenshot must be 4 MB or smaller.");
      const body = new FormData();
      Object.entries(form).forEach(([key, value]) => body.append(key, String(value)));
      if (screenshot) body.append("screenshot", screenshot);
      const response = await fetch("/api/support", { method: "POST", body });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.ok) throw new Error(data.error || "Your request could not be submitted.");
      setForm({ ...initialForm, category: supportedTopic(initialTopic) });
      setScreenshot(null);
      setStatus("success");
      formElement.reset();
    } catch (submitError) {
      setError(submitError.message);
      setStatus("error");
    }
  }

  const isMessagingConcern = form.category === "messaging";
  const detailsLabel = form.category === "feedback" ? "What should we improve? *" : "Details *";
  const inputClass = "h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-slate-950 outline-none transition focus:border-orange-500";

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <SiteHeader />
      <section className="border-b border-orange-200 bg-gradient-to-b from-orange-50 to-white px-4 py-10 text-center sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">Contact ARK</p>
          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Support</h1>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-3 py-6 sm:px-6 sm:py-14">
        {isMessagingConcern && (
          <div className="mb-6 flex items-center gap-2 rounded-2xl border border-orange-200 bg-orange-50 p-4 text-sm font-black text-slate-800">
            <span>Text STOP first.</span>
            <InfoTip label="Why text STOP">STOP blocks future messages from that business number. Use this form if ARK should also review what happened.</InfoTip>
          </div>
        )}

        <div className="rounded-3xl border border-orange-200 bg-white p-4 shadow-lg sm:p-9">
          {status === "success" ? (
            <div className="py-16 text-center">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-orange-500 text-2xl font-black text-white">✓</span>
              <h2 className="mt-5 text-3xl font-black">Request sent.</h2>
              <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-600">We’ll contact you if needed.</p>
              <button type="button" onClick={() => setStatus("idle")} className="mt-6 min-h-12 w-full rounded-xl bg-orange-500 px-5 py-3 text-sm font-black text-white hover:bg-orange-600 sm:w-auto">Send another</button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-5">
              <h2 className="text-2xl font-black">Contact ARK</h2>

              <label className="block">
                <span className="mb-2 block text-sm font-black">Topic *</span>
                <select required name="category" value={form.category} onChange={change} className={inputClass}>
                  {categories.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-black">Name *</span>
                <input required name="name" value={form.name} onChange={change} autoComplete="name" className={inputClass} />
              </label>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-black">Email</span>
                  <input type="email" name="contactEmail" value={form.contactEmail} onChange={change} autoComplete="email" placeholder="you@example.com" className={inputClass} />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-black">Phone</span>
                  <input type="tel" name="contactPhone" value={form.contactPhone} onChange={change} autoComplete="tel" placeholder="+1 978 555 0123" className={inputClass} />
                </label>
              </div>
              {isMessagingConcern && (
                <label className="block">
                  <span className="mb-2 block text-sm font-black">Number that texted you *</span>
                  <input required type="tel" name="senderNumber" value={form.senderNumber} onChange={change} placeholder="+1 978 555 0456" className={inputClass} />
                </label>
              )}

              <label className="block">
                <span className="mb-2 block text-sm font-black">Business name <span className="font-normal text-slate-500">(optional)</span></span>
                <input name="businessName" value={form.businessName} onChange={change} className={inputClass} />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-black">{detailsLabel}</span>
                <textarea required name="description" value={form.description} onChange={change} rows={6} maxLength={4000} className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-950 outline-none transition focus:border-orange-500" />
              </label>

              {isMessagingConcern && (
                <div className="block">
                  <span className="mb-2 flex items-center gap-2 text-sm font-black">
                    <label htmlFor="support-screenshot">Screenshot <span className="font-normal text-slate-500">(optional)</span></label>
                    <InfoTip label="Screenshot requirements">Use a JPG, PNG, or WebP file up to 4 MB.</InfoTip>
                  </span>
                  <input id="support-screenshot" type="file" accept="image/jpeg,image/png,image/webp" onChange={(event) => setScreenshot(event.target.files?.[0] || null)} className="block w-full min-w-0 overflow-hidden rounded-xl border border-dashed border-orange-300 bg-orange-50 p-3 text-slate-600 file:mr-2 file:rounded-lg file:border-0 file:bg-orange-500 file:px-3 file:py-2 file:text-sm file:font-black file:text-white sm:p-4" />
                </div>
              )}

              <input tabIndex="-1" autoComplete="off" name="website" value={form.website} onChange={change} className="hidden" aria-hidden="true" />

              <label className="flex items-start gap-3 rounded-xl border border-orange-200 bg-orange-50 p-4">
                <input required type="checkbox" name="consent" checked={form.consent} onChange={change} className="mt-1 h-4 w-4 accent-orange-500" />
                <span className="text-sm leading-6 text-slate-700">ARK may reply about this request by email, call, or text.</span>
              </label>

              {error && <p role="alert" className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-700">{error}</p>}

              <button disabled={status === "sending"} className="w-full rounded-xl bg-orange-500 px-6 py-4 text-sm font-black text-white transition hover:bg-orange-600 disabled:opacity-50">
                {status === "sending" ? "Sending…" : "Send request"}
              </button>
            </form>
          )}
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
