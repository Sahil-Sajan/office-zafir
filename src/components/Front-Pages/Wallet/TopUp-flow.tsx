"use client";

import { useState } from "react";

export interface TopUpResult {
  method: string;
  amount: number;
}

const METHODS = [
  { key: "bank", label: "Bank Transfer", desc: "Transfer from any Iraqi bank, confirmed within 1 business day." },
  { key: "zaincash", label: "ZainCash", desc: "Pay instantly from your ZainCash mobile wallet." },
  { key: "fastpay", label: "FastPay", desc: "Pay instantly from your FastPay mobile wallet." },
  { key: "agent", label: "Cash at Partner Agent", desc: "Hand over cash at any Zafir360 partner agent location." },
] as const;

const QUICK_AMOUNTS = [25000, 50000, 100000, 250000];

export default function TopUpFlow({ onTopUp }: { onTopUp: (result: TopUpResult) => void }) {
  const [method, setMethod] = useState<(typeof METHODS)[number]["key"]>("bank");
  const [amount, setAmount] = useState<number | "">(50000);
  const [customAmount, setCustomAmount] = useState("");
  const [processing, setProcessing] = useState(false);
  const [confirmation, setConfirmation] = useState<string | null>(null);

  const effectiveAmount = customAmount ? Number(customAmount) : amount || 0;
  const methodLabel = METHODS.find((m) => m.key === method)?.label ?? method;

  const handleTopUp = () => {
    if (!effectiveAmount || effectiveAmount <= 0 || processing) return;
    setProcessing(true);
    setConfirmation(null);

    setTimeout(() => {
      onTopUp({ method: methodLabel, amount: effectiveAmount });
      setProcessing(false);
      setConfirmation(`Success — ${effectiveAmount.toLocaleString("en-US")} IQD added via ${methodLabel}.`);
      setCustomAmount("");
    }, 800);
  };

  return (
    <div className="bg-white border border-[#F0EADB] rounded-[12px] p-5 sm:p-6">
      <h2 className="text-[1.1rem] font-bold text-[#0E241C] mb-4">Top Up Wallet</h2>

      <span className="block text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853] mb-2">
        Method
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {METHODS.map((m) => (
          <button
            key={m.key}
            type="button"
            onClick={() => setMethod(m.key)}
            className={`text-left rounded-[10px] border p-3.5 transition-colors duration-150 ${
              method === m.key
                ? "border-[#17362A] bg-[#FAF6EA]"
                : "border-[#F0EADB] bg-white hover:border-[#17362A]"
            }`}
          >
            <div className="flex items-center gap-2">
              <span
                className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${
                  method === m.key ? "border-[#17362A] bg-[#17362A]" : "border-[#F0EADB]"
                }`}
              />
              <span className="text-[0.92rem] font-semibold text-[#0E241C]">{m.label}</span>
            </div>
            <p className="text-[0.8rem] text-[#5B6961] mt-1 ml-6">{m.desc}</p>
          </button>
        ))}
      </div>

      <span className="block text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853] mb-2">
        Amount (IQD)
      </span>
      <div className="flex flex-wrap gap-2 mb-3">
        {QUICK_AMOUNTS.map((q) => (
          <button
            key={q}
            type="button"
            onClick={() => {
              setAmount(q);
              setCustomAmount("");
            }}
            className={`px-3.5 py-2 rounded-[8px] text-[0.85rem] font-semibold border transition-colors duration-150 ${
              !customAmount && amount === q
                ? "bg-[#17362A] text-white border-[#17362A]"
                : "bg-transparent text-[#0E241C] border-[#F0EADB] hover:border-[#17362A]"
            }`}
          >
            {q.toLocaleString("en-US")}
          </button>
        ))}
      </div>
      <input
        type="number"
        min={1}
        placeholder="Custom amount"
        value={customAmount}
        onChange={(e) => setCustomAmount(e.target.value)}
        className="w-full sm:w-[220px] border border-[#F0EADB] rounded-[8px] px-3.5 py-2.5 text-[0.9rem] text-[#1C2420] mb-5 focus:outline-none focus:border-[#17362A]"
      />

      <div>
        <button
          type="button"
          onClick={handleTopUp}
          disabled={processing || !effectiveAmount || effectiveAmount <= 0}
          className="bg-[#17362A] text-white hover:bg-[#234A3A] px-5 py-2.5 rounded-[8px] text-[0.88rem] font-semibold transition-colors duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {processing ? "Processing…" : "Top Up"}
        </button>
      </div>

      {confirmation && (
        <p className="text-[0.85rem] font-semibold text-[#17362A] mt-4 bg-[#FAF6EA] border border-[#F0EADB] rounded-[8px] px-3.5 py-2.5">
          {confirmation}
        </p>
      )}
    </div>
  );
}
