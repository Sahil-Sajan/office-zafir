"use client";

import { useMemo, useState } from "react";

const posts = [
  { cat: "Sourcing", title: "How to vet a Turkish factory before you wire a deposit", excerpt: "Five checks Sam's team runs on every new supplier — and how to run your own version before you commit.", date: "May 2025", read: "6 min" },
  { cat: "Product", title: "MOQ Calculator, explained: matching budget to container size", excerpt: "Why the tool exists, how it estimates landed cost, and when to trust the number over your gut.", date: "May 2025", read: "4 min" },
  { cat: "Logistics", title: "FCL vs LCL: which container option actually saves you money", excerpt: "The break-even math between a full container and shared space, with real Baghdad delivery timelines.", date: "Apr 2025", read: "5 min" },
  { cat: "Sourcing", title: "China vs Turkey: choosing your first import market", excerpt: "Lead times, MOQ norms, and category strength compared side by side for first-time wholesale buyers.", date: "Apr 2025", read: "8 min" },
  { cat: "Platform", title: "Inside the moderation queue: what gets a listing rejected", excerpt: "A breakdown of the most common reasons Zafir360 sends a product listing back for revision.", date: "Mar 2025", read: "5 min" },
  { cat: "Finance", title: "Letters of Credit for first-time importers, without the jargon", excerpt: "What an L/C actually protects, when it's worth the fee, and how Zafir360's partner banks handle it.", date: "Mar 2025", read: "6 min" },
  { cat: "Product", title: "Escrow, milestone by milestone: where your money actually sits", excerpt: "A walkthrough of the four release points between placing an order and a supplier getting paid.", date: "Feb 2025", read: "5 min" },
  { cat: "Sourcing", title: "Reading a factory inspection report like a buyer", excerpt: "What to look for in Sam's visit notes — and the red flags that should make you ask for a re-visit.", date: "Feb 2025", read: "7 min" },
];

const categories = ["All", "Sourcing", "Product", "Logistics", "Finance", "Platform"];

export default function BlogGrid() {
  const [cat, setCat] = useState("All");
  const filtered = useMemo(() => (cat === "All" ? posts : posts.filter((p) => p.cat === cat)), [cat]);

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        <div className="flex gap-2 flex-wrap mb-9">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-[14px] py-[7px] rounded-[999px] text-[0.85rem] font-medium transition-all duration-150 cursor-pointer border ${
                cat === c ? "bg-[#0E241C] text-white border-[#0E241C]" : "bg-white text-[#1C2420] border-[#F0EADB] hover:border-[#17362A] hover:text-[#234A3A]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p) => (
            <a
              key={p.title}
              href="#"
              className="bg-white border border-[#F0EADB] rounded-[16px] p-6 no-underline hover:border-[#17362A] hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)] transition-all duration-200"
            >
              <span className="inline-flex items-center text-[0.72rem] font-semibold px-[10px] py-[3px] rounded-[6px] bg-[#F0EADB] text-[#234A3A]">
                {p.cat}
              </span>
              <h3 className="text-[1.02rem] font-bold text-[#0E241C] leading-[1.35] mt-3">{p.title}</h3>
              <p className="text-[0.86rem] text-[#1C2420] leading-[1.6] mt-2">{p.excerpt}</p>
              <div className="flex items-center gap-2 text-[0.78rem] text-[#5B6961] mt-4">
                <span>{p.date}</span>
                <span>·</span>
                <span>{p.read} read</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
