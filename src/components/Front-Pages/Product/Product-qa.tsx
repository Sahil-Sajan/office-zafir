"use client";

import { useEffect, useState } from "react";
import type { ProductData } from "./products-data";

interface QAEntry {
  question: string;
  answer: string | null;
}

function seedQuestions(product: ProductData): QAEntry[] {
  return [
    { question: "What's the minimum order quantity?", answer: `MOQ for this product is ${product.moq}. Volume pricing kicks in above that.` },
    { question: "How long is production and shipping lead time?", answer: `Typical lead time is ${product.leadTime}, quoted under ${product.incoterms} terms.` },
    { question: "Can I get a custom variant or private label?", answer: `Yes — message ${product.supplier.name} directly from the Supplier tab to discuss customization and MOQ for custom runs.` },
  ];
}

function storageKey(slug: string) {
  return `zafir360.qa.${slug}`;
}

export default function ProductQA({ product }: { product: ProductData }) {
  const seeded = seedQuestions(product);
  const [asked, setAsked] = useState<QAEntry[]>([]);
  const [question, setQuestion] = useState("");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(storageKey(product.slug));
      if (raw) setAsked(JSON.parse(raw));
    } catch {
      // ignore malformed storage
    }
    setHydrated(true);
  }, [product.slug]);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(storageKey(product.slug), JSON.stringify(asked));
  }, [asked, hydrated, product.slug]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = question.trim();
    if (!trimmed) return;
    setAsked((prev) => [...prev, { question: trimmed, answer: null }]);
    setQuestion("");
  };

  const all = [...seeded, ...asked];

  return (
    <div className="flex flex-col gap-5">
      <form onSubmit={handleSubmit} className="bg-white border border-[#F0EADB] rounded-[16px] p-5 sm:p-6">
        <h3 className="text-[1rem] font-bold text-[#0E241C] mb-3">Ask about this product</h3>
        <div className="flex flex-col sm:flex-row gap-2.5">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="e.g. Do you offer OEM packaging?"
            aria-label="Ask a question about this product"
            className="flex-1 border border-[#F0EADB] rounded-[8px] px-3.5 py-2.5 text-[0.88rem] outline-none focus:border-[#17362A]"
          />
          <button
            type="submit"
            disabled={!question.trim()}
            className="px-5 py-2.5 rounded-[8px] text-[0.85rem] font-semibold bg-[#17362A] text-white hover:bg-[#234A3A] disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-150 cursor-pointer"
          >
            Ask
          </button>
        </div>
        <p className="text-[0.74rem] text-[#5B6961] mt-2.5">
          Questions post here for other buyers to see — no supplier messaging backend exists yet, so new
          questions stay unanswered (saved on this device only).
        </p>
      </form>

      <div className="flex flex-col gap-3">
        {all.map((qa, i) => (
          <div key={i} className="bg-white border border-[#F0EADB] rounded-[16px] p-5">
            <div className="flex items-start gap-2">
              <span className="flex-none text-[0.72rem] font-bold px-2 py-[3px] rounded-[6px] bg-[#F0EADB] text-[#234A3A]">Q</span>
              <p className="text-[0.9rem] font-semibold text-[#0E241C] leading-[1.5]">{qa.question}</p>
            </div>
            <div className="flex items-start gap-2 mt-3">
              <span className="flex-none text-[0.72rem] font-bold px-2 py-[3px] rounded-[6px] bg-[#17362A] text-white">A</span>
              {qa.answer ? (
                <p className="text-[0.88rem] text-[#1C2420] leading-[1.6]">{qa.answer}</p>
              ) : (
                <p className="text-[0.82rem] text-[#5B6961] italic">Pending answer from supplier.</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
