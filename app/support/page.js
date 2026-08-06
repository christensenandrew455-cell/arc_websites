"use client";

import { useState } from "react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { clientCenterUrl } from "../productLinks";

const categories = [
  ["sales", "Sales question"],
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
    const formElement = event.currentTarget;
    setStatus("sending");
    setError("");
    try {
      if (screenshot && screenshot.size > MAX_SCREENSHOT_BYTES) throw new Error("The screenshot must be 4 MB or smaller.");
      const body = new FormData();
      Object.entries(form).forEach(([key, value]) => body.append(key, String(value)));
      if (screenshot) body.append("screenshot", screenshot);
      const response = await fetch(`${clientCenterUrl}/api/support/contact`, { method: "POST", body });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.ok) throw new Error(data.error || "Your request could not be submitted.");
      setForm(initialForm);
      setScreenshot(null);
      setStatus("success");
      formElement.reset();
    } catch (submitError) {
      setError(submitError.message);
      setStatus("error");
    }
  }

  const isMessagingConcern = form.category === "messaging";
  const inputClass = "h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-slate-950 outline-none transition focus:border-orange-500";

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <SiteHeader />
      <section className="border-b border-orange-200 bg-gradient-to-b from-orange-50 to-white px-4 py-10 text-center sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">Contact and support</p>
          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">How can ARK help?</h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">Ask about the product, get account help, make a privacy request, or report a messaging concern.</p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-3 py-6 sm:px-6 sm:py-14">
        {isMessagingConcern && (
          <div className="mb-6 rounded-2xl border border-orange-200 bg-orange-50 p-5 text-sm leading-6 text-slate-700">
            <p><strong>Text STOP first</strong> to block future messages from the business number. Then use this form if ARK should review what happened.</p>
          </div>
        )}

        <div className="rounded-3xl border border-orange-200 bg-white p-4 shadow-lg sm:p-9">
          {status === "success" ? (
            <div className="py-16 text-center">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-orange-500 text-2xl font-black text-white">✓</span>
              <h2 className="mt-5 text-3xl font-black">Your request was sent.</h2>
              <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-600">Your request is now in the ARK administrator inbox. ARK will use the contact information you provided if a response or more information is needed.</p>
              <button type="button" onClick={() => setStatus("idle")} className="mt-6 min-h-12 w-full rounded-xl bg-orange-500 px-5 py-3 text-sm font-black text-white hover:bg-orange-600 sm:w-auto">Send Another Request</button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-5">
              <div>
                <h2 className="text-2xl font-black">Contact ARK</h2>
                <p className="mt-2 text-sm text-slate-500">Choose a topic and complete the short form.</p>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-black">What do you need help with? *</span>
                <select required name="category" value={form.category} onChange={change} className={inputClass}>
                  {categories.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-black">Your name *</span>
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
              <p className="-mt-3 text-xs font-semibold text-slate-500">Provide at least one way for ARK to contact you.</p>

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
                <span className="mb-2 block text-sm font-black">How can we help? *</span>
                <textarea required name="description" value={form.description} onChange={change} rows={6} maxLength={4000} className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-950 outline-none transition focus:border-orange-500" />
              </label>

              {isMessagingConcern && (
                <label className="block">
                  <span className="mb-2 block text-sm font-black">Screenshot <span className="font-normal text-slate-500">(optional, JPG/PNG/WebP, 4 MB max)</span></span>
                  <input type="file" accept="image/jpeg,image/png,image/webp" onChange={(event) => setScreenshot(event.target.files?.[0] || null)} className="block w-full min-w-0 overflow-hidden rounded-xl border border-dashed border-orange-300 bg-orange-50 p-3 text-slate-600 file:mr-2 file:rounded-lg file:border-0 file:bg-orange-500 file:px-3 file:py-2 file:text-sm file:font-black file:text-white sm:p-4" />
                </label>
              )}

              <input tabIndex="-1" autoComplete="off" name="website" value={form.website} onChange={change} className="hidden" aria-hidden="true" />

              <label className="flex items-start gap-3 rounded-xl border border-orange-200 bg-orange-50 p-4">
                <input required type="checkbox" name="consent" checked={form.consent} onChange={change} className="mt-1 h-4 w-4 accent-orange-500" />
                <span className="text-sm leading-6 text-slate-700">I agree that ARK Client Center may reply by email, call, or text using the contact information I provided about this request.</span>
              </label>

              {error && <p role="alert" className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-700">{error}</p>}

              <button disabled={status === "sending"} className="w-full rounded-xl bg-orange-500 px-6 py-4 text-sm font-black text-white transition hover:bg-orange-600 disabled:opacity-50">
                {status === "sending" ? "Sending…" : "Send Request"}
              </button>
            </form>
          )}
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
