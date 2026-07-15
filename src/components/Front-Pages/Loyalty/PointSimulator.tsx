"use client";

import { useMemo, useState } from "react";

interface SimTier {
  name: string;
  min: number;
  multiplier: number;
}

const simTiers: SimTier[] = [
  { name: "Bronze", min: 0, multiplier: 1 },
  { name: "Silver", min: 5000, multiplier: 1.25 },
  { name: "Gold", min: 20000, multiplier: 1.5 },
  { name: "Platinum", min: 75000, multiplier: 2 },
];

const MAX_AMOUNT = 150000;

function tierForSpend(spend: number) {
  let current = simTiers[0];
  for (const tier of simTiers) {
    if (spend >= tier.min) current = tier;
  }
  return current;
}

function nextTier(current: SimTier) {
  const index = simTiers.findIndex((t) => t.name === current.name);
  return index >= 0 && index < simTiers.length - 1 ? simTiers[index + 1] : null;
}

const fmt = (n: number) => n.toLocaleString("en-US", { maximumFractionDigits: 0 });

export default function PointSimulator() {
  const [amountInput, setAmountInput] = useState("2500");

  const amount = Math.min(MAX_AMOUNT, Math.max(0, parseInt(amountInput.replace(/[^\d]/g, ""), 10) || 0));

  const tier = useMemo(() => tierForSpend(amount), [amount]);
  const upcoming = nextTier(tier);
  const pointsEarned = Math.round(amount * tier.multiplier);

  const progressToNext = upcoming
    ? Math.min(100, Math.round(((amount - tier.min) / (upcoming.min - tier.min)) * 100))
    : 100;
  const amountToNext = upcoming ? Math.max(0, upcoming.min - amount) : 0;

  return (
    <section className="py-16">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        <span className="block text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853] mb-2">◆ Point simulator</span>
        <h2 className="text-[1.5rem] sm:text-[1.8rem] font-bold tracking-[-0.02em] text-[#0E241C] mb-2">
          See what your spend <span className="text-[#C9A853] italic">would earn in Nuqat.</span>
        </h2>
        <p className="text-[0.9rem] text-[#5B6961] mb-8 max-w-[720px]">
          Enter a rolling 12-month spend amount to see the tier it lands in, the point multiplier that applies, and how far it is from the next tier.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6 lg:gap-8 items-start">
          <div className="bg-white border border-[#F0EADB] rounded-[14px] p-5 sm:p-6">
            <label htmlFor="sim-amount" className="block text-[0.78rem] font-semibold text-[#1C2420] mb-1.5">
              Annual spend estimate (USD)
            </label>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[1.1rem] font-semibold text-[#5B6961]">$</span>
              <input
                id="sim-amount"
                type="text"
                inputMode="numeric"
                value={amountInput}
                onChange={(e) => setAmountInput(e.target.value)}
                className="w-full px-3 py-2.5 rounded-[8px] border border-[#F0EADB] bg-white text-[1.05rem] font-semibold tabular-nums text-[#0E241C] focus:outline-none focus:border-[#17362A]"
              />
            </div>
            <input
              type="range"
              min={0}
              max={MAX_AMOUNT}
              step={100}
              value={amount}
              onChange={(e) => setAmountInput(e.target.value)}
              className="w-full accent-[#17362A]"
              aria-label="Annual spend slider"
            />
            <div className="flex justify-between text-[0.72rem] text-[#5B6961] mt-1">
              <span>$0</span>
              <span>${fmt(MAX_AMOUNT)}+</span>
            </div>

            <div className="mt-6 pt-5 border-t border-[#F0EADB]">
              <span className="text-[0.78rem] font-semibold text-[#1C2420]">Progress to next tier</span>
              {upcoming ? (
                <>
                  <div className="h-1.5 rounded bg-[#F0EADB] overflow-hidden mt-2.5">
                    <span className="block h-full bg-[#17362A]" style={{ width: `${progressToNext}%` }} />
                  </div>
                  <p className="text-[0.78rem] text-[#5B6961] mt-1.5">
                    ${fmt(amountToNext)} more in annual spend reaches <span className="font-semibold text-[#0E241C]">{upcoming.name}</span>.
                  </p>
                </>
              ) : (
                <p className="text-[0.78rem] text-[#5B6961] mt-2.5">
                  You&apos;ve reached the top tier — <span className="font-semibold text-[#0E241C]">Platinum</span>.
                </p>
              )}
            </div>
          </div>

          <div className="bg-[#0E241C] text-white rounded-[14px] p-5 sm:p-6 flex flex-col gap-4">
            <div>
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.06em] text-[#C9A853]">Resulting tier</span>
              <div className="text-[1.6rem] font-extrabold mt-1">{tier.name}</div>
              <div className="text-[0.85rem] text-white/70 mt-0.5">{tier.multiplier}× Nuqat multiplier</div>
            </div>
            <div className="pt-4 border-t border-white/15">
              <span className="text-[0.78rem] text-white/70">Nuqat earned at this spend level</span>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="text-[2rem] font-extrabold tabular-nums leading-none">{fmt(pointsEarned)}</span>
                <span className="text-[0.85rem] text-white/70">points / yr</span>
              </div>
            </div>
            <p className="text-[0.76rem] text-white/60 mt-1">
              Based on 1 Nuqat per $1 spent, multiplied by the {tier.name} tier rate of {tier.multiplier}×.
            </p>
          </div>
        </div>

        <p className="text-[0.76rem] text-[#5B6961] mt-6 max-w-[720px]">
          Illustrative only — this calculator estimates points from the rates on this page. Zafir360 doesn&apos;t yet have an account or order-history backend to track real Nuqat balances, so no points are actually credited here.
        </p>
      </div>
    </section>
  );
}
