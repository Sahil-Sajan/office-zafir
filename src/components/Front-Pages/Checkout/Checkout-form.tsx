"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";
import { ShoppingBag } from "@/components/common/NavIcons";

const PAYMENT_OPTIONS = [
  { key: "escrow", label: "Escrow (recommended)", desc: "Funds held until goods are confirmed received." },
  { key: "cod", label: "Cash on delivery", desc: "Pay JayakHub driver on arrival, local orders only." },
  { key: "wallet", label: "Local wallet", desc: "Pay via FastPay, Qi Card, or ZainCash." },
] as const;

const GOVERNORATES = [
  "Baghdad", "Basra", "Erbil", "Sulaymaniyah", "Duhok", "Najaf", "Kirkuk", "Mosul (Nineveh)", "Anbar", "Karbala",
];

function priceValue(p: string) {
  const n = parseFloat(p.replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

export default function CheckoutForm({ lang }: { lang: string }) {
  const { items, subtotal, clear } = useCart();
  const [payment, setPayment] = useState<(typeof PAYMENT_OPTIONS)[number]["key"]>("escrow");
  const [submitted, setSubmitted] = useState(false);
  const [reference, setReference] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `ZQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setReference(ref);
    setSubmitted(true);
    clear();
  };

  if (submitted) {
    return (
      <div className="max-w-[560px] mx-auto text-center py-16 px-4">
        <span className="text-4xl mb-3 block">✓</span>
        <h2 className="text-[1.4rem] font-bold text-[#0E241C]">Request submitted</h2>
        <p className="text-[0.92rem] text-[#5B6961] mt-2">
          Reference <span className="font-semibold text-[#0E241C]">{reference}</span>. Suppliers will confirm
          pricing and lead time by chat within 1–2 business days. No payment has been taken yet.
        </p>
        <Link
          href={`/${lang}`}
          className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-[8px] text-[0.88rem] font-semibold bg-[#17362A] text-white no-underline hover:bg-[#234A3A] transition-colors duration-150"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-[480px] mx-auto text-center py-16 px-4">
        <span className="mb-3 flex items-center justify-center [&_svg]:size-10">
          <ShoppingBag />
        </span>
        <h2 className="text-[1.15rem] font-bold text-[#0E241C]">Nothing to check out</h2>
        <p className="text-[0.9rem] text-[#5B6961] mt-1.5">Your basket is empty.</p>
        <Link
          href={`/${lang}/cart`}
          className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-[8px] text-[0.88rem] font-semibold bg-[#17362A] text-white no-underline hover:bg-[#234A3A] transition-colors duration-150"
        >
          Go to Basket
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">
      <div className="flex flex-col gap-6">
        <fieldset className="border border-[#F0EADB] rounded-[12px] p-5">
          <legend className="text-[0.95rem] font-bold text-[#0E241C] px-1">Contact &amp; Delivery</legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <label className="flex flex-col gap-1.5 text-[0.82rem] font-semibold text-[#1C2420]">
              Company name
              <input required type="text" autoComplete="organization" className="border border-[#F0EADB] rounded-[8px] px-3 py-2.5 text-[0.9rem] font-normal outline-none focus:border-[#17362A]" />
            </label>
            <label className="flex flex-col gap-1.5 text-[0.82rem] font-semibold text-[#1C2420]">
              Contact name
              <input required type="text" autoComplete="name" className="border border-[#F0EADB] rounded-[8px] px-3 py-2.5 text-[0.9rem] font-normal outline-none focus:border-[#17362A]" />
            </label>
            <label className="flex flex-col gap-1.5 text-[0.82rem] font-semibold text-[#1C2420]">
              Phone
              <input required type="tel" autoComplete="tel" className="border border-[#F0EADB] rounded-[8px] px-3 py-2.5 text-[0.9rem] font-normal outline-none focus:border-[#17362A]" />
            </label>
            <label className="flex flex-col gap-1.5 text-[0.82rem] font-semibold text-[#1C2420]">
              Governorate
              <select required defaultValue="" className="border border-[#F0EADB] rounded-[8px] px-3 py-2.5 text-[0.9rem] font-normal outline-none focus:border-[#17362A] bg-white">
                <option value="" disabled>Select governorate</option>
                {GOVERNORATES.map((g) => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1.5 text-[0.82rem] font-semibold text-[#1C2420] sm:col-span-2">
              Delivery address
              <textarea required rows={2} className="border border-[#F0EADB] rounded-[8px] px-3 py-2.5 text-[0.9rem] font-normal outline-none focus:border-[#17362A] resize-none" />
            </label>
          </div>
        </fieldset>

        <fieldset className="border border-[#F0EADB] rounded-[12px] p-5">
          <legend className="text-[0.95rem] font-bold text-[#0E241C] px-1">Payment Method</legend>
          <div className="flex flex-col gap-2.5 mt-2">
            {PAYMENT_OPTIONS.map((opt) => (
              <label
                key={opt.key}
                className={`flex items-start gap-3 border rounded-[10px] p-3.5 cursor-pointer transition-colors duration-150 ${
                  payment === opt.key ? "border-[#17362A] bg-[#FAF6EA]" : "border-[#F0EADB] hover:border-[#C9A853]"
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value={opt.key}
                  checked={payment === opt.key}
                  onChange={() => setPayment(opt.key)}
                  className="mt-1 accent-[#17362A]"
                />
                <span>
                  <span className="block text-[0.88rem] font-semibold text-[#0E241C]">{opt.label}</span>
                  <span className="block text-[0.78rem] text-[#5B6961] mt-0.5">{opt.desc}</span>
                </span>
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <aside className="border border-[#F0EADB] rounded-[12px] p-5 h-fit sticky top-24">
        <h2 className="text-[0.95rem] font-bold text-[#0E241C] mb-4">Order Review</h2>
        <div className="flex flex-col gap-3 max-h-[280px] overflow-y-auto pr-1">
          {items.map((item) => (
            <div key={`${item.slug}-${item.variant}`} className="flex justify-between gap-2 text-[0.82rem]">
              <span className="text-[#1C2420] truncate">{item.name} × {item.qty}</span>
              <span className="text-[#0E241C] font-semibold tabular-nums flex-none">
                ${(priceValue(item.price) * item.qty).toFixed(2)}
              </span>
            </div>
          ))}
        </div>
        <div className="flex justify-between text-[1rem] font-bold text-[#0E241C] border-t border-[#F0EADB] mt-4 pt-4">
          <span>Estimated total</span>
          <span className="tabular-nums">${subtotal.toFixed(2)}</span>
        </div>
        <button
          type="submit"
          className="block w-full text-center mt-5 px-5 py-3 rounded-[8px] text-[0.92rem] font-semibold bg-[#17362A] text-white hover:bg-[#234A3A] hover:-translate-y-px hover:shadow-[0_8px_20px_rgba(23,54,42,0.28)] transition-all duration-200 cursor-pointer"
        >
          Submit Request for Quote
        </button>
        <p className="text-[0.72rem] text-[#5B6961] mt-3">
          No payment is captured now. This confirms your RFQ to the relevant suppliers.
        </p>
      </aside>
    </form>
  );
}
