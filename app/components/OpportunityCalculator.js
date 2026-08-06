"use client";

import { useMemo, useState } from "react";

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function numberValue(value, maximum) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return 0;
  return Math.min(Math.max(parsed, 0), maximum);
}

export default function OpportunityCalculator() {
  const [missedCalls, setMissedCalls] = useState("8");
  const [averageJob, setAverageJob] = useState("1200");

  const result = useMemo(() => {
    const calls = numberValue(missedCalls, 1000);
    const jobValue = numberValue(averageJob, 1000000);
    return calls * jobValue;
  }, [averageJob, missedCalls]);

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-400">Use your real numbers</p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">What could unanswered calls be putting at risk?</h2>
        <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
          This is the same math behind the conversation. Enter the calls you miss in a typical month and what an average job is worth.
        </p>
        <div className="mt-6 flex flex-wrap gap-2 text-sm font-bold text-slate-300">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">$50 monthly base</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">$2 per receptionist call</span>
        </div>
      </div>

      <div className="rounded-[1.75rem] border border-white/10 bg-white p-5 text-slate-950 shadow-2xl shadow-black/30 sm:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-black text-slate-700">Missed calls each month</span>
            <input
              type="number"
              inputMode="numeric"
              min="0"
              max="1000"
              step="1"
              value={missedCalls}
              onChange={(event) => setMissedCalls(event.target.value)}
              className="h-14 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 text-xl font-black outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              aria-describedby="calculator-note"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-black text-slate-700">Average value of one job</span>
            <span className="relative block">
              <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-xl font-black text-slate-400">$</span>
              <input
                type="number"
                inputMode="decimal"
                min="0"
                max="1000000"
                step="50"
                value={averageJob}
                onChange={(event) => setAverageJob(event.target.value)}
                className="h-14 w-full rounded-xl border border-slate-300 bg-slate-50 pl-9 pr-4 text-xl font-black outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                aria-describedby="calculator-note"
              />
            </span>
          </label>
        </div>

        <div className="mt-6 rounded-2xl bg-orange-50 p-5 ring-1 ring-inset ring-orange-200 sm:p-6" aria-live="polite">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-700">Potential job value behind those calls</p>
          <p className="mt-2 break-words text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">{money.format(result)}<span className="text-base text-slate-500"> / month</span></p>
        </div>

        <p id="calculator-note" className="mt-4 text-xs leading-5 text-slate-500">
          This shows opportunity value, not guaranteed revenue. Not every caller becomes a paying customer; the point is to make the cost of unanswered opportunities visible.
        </p>
      </div>
    </div>
  );
}
