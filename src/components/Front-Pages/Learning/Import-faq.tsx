"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  { q: "How do I find the right supplier?", a: "Use Zafir360's wholesale marketplace to browse verified suppliers by country, category, or product. Each supplier has a detailed profile with inspection reports, product catalogs, and ratings from other buyers. You can send RFQs to up to five suppliers at once." },
  { q: "What is MOQ and how does it work?", a: "MOQ stands for Minimum Order Quantity — the smallest amount a supplier is willing to sell. Each listing clearly shows the MOQ in units, cartons, or containers. Use the MOQ Calculator to find products that match your budget and storage capacity." },
];

export default function ImportFaq({ lang }: { lang: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const items = [
    ...faqs,
    { q: "How does container shipping work?", a: null },
    { q: "What documents do I need for customs clearance?", a: "Typical import documentation includes: commercial invoice, packing list, bill of lading or airway bill, certificate of origin, and any product-specific certificates. Zafir360's platform helps you track and manage all documentation digitally." },
    { q: "How are import duties calculated?", a: "Import duties vary by product category, HS code, and country of origin. Zafir360 provides HS code lookup and estimated duty calculations to help you plan your costs. For accurate assessments, consult with a licensed customs broker." },
    { q: "Can I get financing for my imports?", a: "Yes — for qualified buyers, Zafir360 facilitates Letters of Credit (L/C) through partner banks. This allows you to secure shipments while managing cash flow. Contact our trade finance team for more information." },
  ];

  return (
    <section className="bg-[#F0EADB] border-y border-[#F0EADB] py-12 sm:py-16">
      <div className="max-w-[760px] mx-auto px-4 sm:px-7">
        <div className="mb-9">
          <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
            Import basics
          </span>
          <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-[10px] text-[#0E241C]">
            How wholesale importing <span className="text-[#C9A853] italic">works.</span>
          </h2>
        </div>
        {items.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div key={faq.q} className="border-b border-[#F0EADB]">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full text-left bg-transparent border-none cursor-pointer py-5 px-1 text-[0.98rem] font-semibold text-[#0E241C] flex justify-between items-center gap-4"
              >
                {faq.q}
                <span
                  className="shrink-0 text-[1.1rem] text-[#17362A] transition-transform duration-200"
                  style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                >
                  +
                </span>
              </button>
              <div className="overflow-hidden transition-[max-height] duration-250 ease" style={{ maxHeight: isOpen ? "260px" : "0" }}>
                <p className="px-1 pb-5 text-[0.9rem] text-[#1C2420] leading-[1.6]">
                  {faq.q === "How does container shipping work?" ? (
                    <>
                      Container shipping is the most cost-effective way to import bulk goods. Suppliers list container capacity (e.g., 3,240 units per 40ft container). Zafir360 helps coordinate FCL and LCL shipments. See our{" "}
                      <Link href={`/${lang}/container-shipping`} className="text-[#234A3A] underline">Container Shipping</Link> page for details.
                    </>
                  ) : (
                    faq.a
                  )}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
