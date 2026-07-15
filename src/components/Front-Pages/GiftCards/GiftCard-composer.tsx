"use client";

import { useState } from "react";

const AMOUNTS = [10000, 25000, 50000, 100000] as const;

function formatIqd(n: number) {
  return `IQD ${n.toLocaleString("en-US")}`;
}

function generateGiftCardCode() {
  const block = () =>
    Math.floor(1000 + Math.random() * 9000).toString();
  return `ZGC-${block()}-${block()}`;
}

export default function GiftCardComposer() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(10000);
  const [useCustom, setUseCustom] = useState(false);
  const [customAmount, setCustomAmount] = useState("");
  const [customError, setCustomError] = useState("");

  const [recipientName, setRecipientName] = useState("");
  const [recipientContact, setRecipientContact] = useState("");
  const [message, setMessage] = useState("");

  const [result, setResult] = useState<{
    code: string;
    amount: number;
    recipientName: string;
  } | null>(null);

  const activeAmount = useCustom ? Number(customAmount) : selectedAmount;
  const hasValidAmount = useCustom
    ? customAmount.trim() !== "" && Number.isFinite(Number(customAmount)) && Number(customAmount) > 0
    : selectedAmount !== null;

  function handlePickPreset(amount: number) {
    setUseCustom(false);
    setSelectedAmount(amount);
    setCustomError("");
  }

  function handlePickCustom() {
    setUseCustom(true);
    setCustomError("");
  }

  function handleCustomChange(value: string) {
    setCustomAmount(value);
    if (value.trim() === "") {
      setCustomError("");
      return;
    }
    const n = Number(value);
    if (!Number.isFinite(n) || n <= 0) {
      setCustomError("Enter a positive amount.");
    } else {
      setCustomError("");
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!hasValidAmount || !activeAmount) {
      setCustomError("Enter a positive amount.");
      return;
    }
    if (!recipientName.trim() || !recipientContact.trim()) return;

    // Generated inside the event handler (never during render) so Math.random()
    // never runs on the server and causes a hydration mismatch.
    const code = generateGiftCardCode();

    setResult({
      code,
      amount: activeAmount,
      recipientName: recipientName.trim(),
    });
  }

  function handleReset() {
    setResult(null);
    setSelectedAmount(10000);
    setUseCustom(false);
    setCustomAmount("");
    setCustomError("");
    setRecipientName("");
    setRecipientContact("");
    setMessage("");
  }

  if (result) {
    return (
      <section className="py-16">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
          <div className="max-w-[560px] mx-auto text-center bg-white border border-[#17362A] rounded-[12px] p-6 sm:p-8">
            <span className="text-4xl mb-3 block">✓</span>
            <h2 className="text-[1.3rem] font-bold text-[#0E241C]">Gift card ready</h2>
            <p className="text-[0.9rem] text-[#5B6961] mt-1.5">
              A {formatIqd(result.amount)} gift card for <span className="font-semibold text-[#0E241C]">{result.recipientName}</span> has
              been generated below.
            </p>

            <div className="mt-5 bg-[#FAF6EA] border border-[#F0EADB] rounded-[10px] p-5">
              <span className="block text-[0.72rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853] mb-1.5">
                Gift Card Code
              </span>
              <span className="block text-[1.5rem] font-bold tracking-[0.04em] text-[#0E241C] tabular-nums">
                {result.code}
              </span>
              <span className="block text-[0.9rem] font-semibold text-[#17362A] mt-2">{formatIqd(result.amount)}</span>
            </div>

            <p className="text-[0.72rem] text-[#5B6961] mt-4">
              Demo only — this code is generated locally in your browser. No payment gateway, delivery/email system,
              or code-redemption backend exists in this codebase yet.
            </p>

            <button
              type="button"
              onClick={handleReset}
              className="mt-6 bg-[#17362A] text-white hover:bg-[#234A3A] px-5 py-2.5 rounded-[8px] text-[0.88rem] font-semibold transition-colors duration-150 cursor-pointer"
            >
              Send another
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">
          <div className="flex flex-col gap-6">
            <fieldset className="bg-white border border-[#F0EADB] rounded-[12px] p-5 sm:p-6">
              <legend className="text-[0.95rem] font-bold text-[#0E241C] px-1">Choose an amount</legend>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
                {AMOUNTS.map((amount) => {
                  const isSelected = !useCustom && selectedAmount === amount;
                  return (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => handlePickPreset(amount)}
                      className={`border rounded-[10px] p-3.5 text-center transition-colors duration-150 cursor-pointer ${
                        isSelected ? "border-[#17362A] bg-[#FAF6EA]" : "border-[#F0EADB] hover:border-[#C9A853]"
                      }`}
                    >
                      <span className="block text-[0.95rem] font-bold text-[#0E241C]">{amount.toLocaleString("en-US")}</span>
                      <span className="block text-[0.72rem] text-[#5B6961] mt-0.5">IQD</span>
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={handlePickCustom}
                className={`w-full border rounded-[10px] p-3.5 mt-3 text-left transition-colors duration-150 cursor-pointer ${
                  useCustom ? "border-[#17362A] bg-[#FAF6EA]" : "border-[#F0EADB] hover:border-[#C9A853]"
                }`}
              >
                <span className="block text-[0.88rem] font-semibold text-[#0E241C]">Custom amount</span>
                <span className="block text-[0.78rem] text-[#5B6961] mt-0.5">Enter any amount in IQD</span>
              </button>

              {useCustom && (
                <div className="mt-3">
                  <label className="flex flex-col gap-1.5 text-[0.82rem] font-semibold text-[#1C2420]">
                    Custom amount (IQD)
                    <input
                      type="number"
                      min={1}
                      step={1}
                      inputMode="numeric"
                      value={customAmount}
                      onChange={(e) => handleCustomChange(e.target.value)}
                      placeholder="e.g. 75000"
                      className="border border-[#F0EADB] rounded-[8px] px-3 py-2.5 text-[0.9rem] font-normal outline-none focus:border-[#17362A]"
                    />
                  </label>
                  {customError && <p className="text-[0.78rem] text-[#B3422F] mt-1.5">{customError}</p>}
                </div>
              )}

              <p className="text-[0.85rem] text-[#1C2420] mt-4 font-semibold">
                Selected amount:{" "}
                <span className="text-[#17362A]">
                  {hasValidAmount && activeAmount ? formatIqd(activeAmount) : "—"}
                </span>
              </p>
            </fieldset>

            <fieldset className="bg-white border border-[#F0EADB] rounded-[12px] p-5 sm:p-6">
              <legend className="text-[0.95rem] font-bold text-[#0E241C] px-1">Recipient</legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <label className="flex flex-col gap-1.5 text-[0.82rem] font-semibold text-[#1C2420]">
                  Recipient name
                  <input
                    required
                    type="text"
                    autoComplete="name"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    className="border border-[#F0EADB] rounded-[8px] px-3 py-2.5 text-[0.9rem] font-normal outline-none focus:border-[#17362A]"
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-[0.82rem] font-semibold text-[#1C2420]">
                  Recipient email or phone
                  <input
                    required
                    type="text"
                    autoComplete="email"
                    value={recipientContact}
                    onChange={(e) => setRecipientContact(e.target.value)}
                    className="border border-[#F0EADB] rounded-[8px] px-3 py-2.5 text-[0.9rem] font-normal outline-none focus:border-[#17362A]"
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-[0.82rem] font-semibold text-[#1C2420] sm:col-span-2">
                  Personal message (optional)
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Add a note for the recipient..."
                    className="border border-[#F0EADB] rounded-[8px] px-3 py-2.5 text-[0.9rem] font-normal outline-none focus:border-[#17362A] resize-none"
                  />
                </label>
              </div>
            </fieldset>
          </div>

          <aside className="bg-white border border-[#F0EADB] rounded-[12px] p-5 sm:p-6 h-fit sticky top-24">
            <h2 className="text-[0.95rem] font-bold text-[#0E241C] mb-3">Summary</h2>
            <div className="flex justify-between text-[0.85rem] text-[#1C2420]">
              <span>Amount</span>
              <span className="font-semibold text-[#0E241C] tabular-nums">
                {hasValidAmount && activeAmount ? formatIqd(activeAmount) : "—"}
              </span>
            </div>
            <div className="flex justify-between text-[0.85rem] text-[#1C2420] mt-2">
              <span>Recipient</span>
              <span className="font-semibold text-[#0E241C] truncate max-w-[140px]">{recipientName || "—"}</span>
            </div>
            <button
              type="submit"
              disabled={!hasValidAmount}
              className="block w-full text-center mt-5 px-5 py-3 rounded-[8px] text-[0.92rem] font-semibold bg-[#17362A] text-white hover:bg-[#234A3A] hover:-translate-y-px hover:shadow-[0_8px_20px_rgba(23,54,42,0.28)] transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
            >
              Send Gift Card
            </button>
            <p className="text-[0.72rem] text-[#5B6961] mt-3">
              Demo only — no real payment gateway or delivery system is connected yet.
            </p>
          </aside>
        </form>
      </div>
    </section>
  );
}
