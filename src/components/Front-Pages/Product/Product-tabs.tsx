"use client";

import { useState } from "react";
import { ProductData } from "./products-data";
import PriceHistoryChart from "./Price-history-chart";
import ProductQA from "./Product-qa";

const TABS = ["Description", "Specifications", "Supplier", "Price Trend", "Q&A", "Reviews"] as const;

export default function ProductTabs({ product }: { product: ProductData }) {
  const [active, setActive] = useState<typeof TABS[number]>("Description");

  return (
    <section className="bg-[#F0EADB] border-y border-[#F0EADB] py-12 sm:py-16">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        <div className="flex gap-1 border-b border-[#F0EADB] mb-8 overflow-x-auto">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`flex-none px-3 sm:px-4 py-3 text-[0.82rem] sm:text-[0.88rem] font-semibold whitespace-nowrap border-b-2 -mb-px transition-colors duration-150 cursor-pointer ${
                active === tab ? "border-[#17362A] text-[#0E241C]" : "border-transparent text-[#5B6961] hover:text-[#0E241C]"
              }`}
            >
              {tab === "Reviews" ? `Reviews (${product.reviews})` : tab}
            </button>
          ))}
        </div>

        {active === "Description" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-white border border-[#F0EADB] rounded-[16px] p-6">
              <h3 className="text-[1rem] font-bold text-[#0E241C]">Included items</h3>
              <p className="text-[0.88rem] text-[#1C2420] leading-[1.6] mt-2">{product.description.included}</p>
            </div>
            <div className="bg-white border border-[#F0EADB] rounded-[16px] p-6">
              <h3 className="text-[1rem] font-bold text-[#0E241C]">Materials &amp; certifications</h3>
              <p className="text-[0.88rem] text-[#1C2420] leading-[1.6] mt-2">{product.description.materials}</p>
            </div>
            <div className="bg-white border border-[#F0EADB] rounded-[16px] p-6">
              <h3 className="text-[1rem] font-bold text-[#0E241C]">Applications</h3>
              <p className="text-[0.88rem] text-[#1C2420] leading-[1.6] mt-2">{product.description.applications}</p>
            </div>
            <div className="bg-white border border-[#F0EADB] rounded-[16px] p-6">
              <h3 className="text-[1rem] font-bold text-[#0E241C]">Warranty &amp; care</h3>
              <p className="text-[0.88rem] text-[#1C2420] leading-[1.6] mt-2">{product.description.warranty}</p>
            </div>
          </div>
        )}

        {active === "Specifications" && (
          <div className="bg-white border border-[#F0EADB] rounded-[16px] overflow-x-auto">
            <table className="w-full text-left">
              <tbody>
                {product.specs.map((s, i) => (
                  <tr key={s.attribute} className={i % 2 === 0 ? "bg-[#FAF6EA]" : ""}>
                    <td className="px-4 sm:px-5 py-3 text-[0.85rem] sm:text-[0.88rem] text-[#5B6961] whitespace-nowrap sm:w-[240px]">{s.attribute}</td>
                    <td className="px-4 sm:px-5 py-3 text-[0.85rem] sm:text-[0.88rem] font-semibold text-[#0E241C]">{s.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {active === "Supplier" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-white border border-[#F0EADB] rounded-[16px] p-6">
              <span className="inline-flex items-center text-[0.72rem] font-semibold px-[10px] py-[4px] rounded-[999px] bg-[#17362A] text-white">
                ✓ Verified by Sam
              </span>
              <h3 className="text-[1.05rem] font-bold text-[#0E241C] mt-3">{product.supplier.name}</h3>
              <p className="text-[0.88rem] text-[#1C2420] mt-1">
                {product.supplier.location} · Founded {product.supplier.founded} · {product.supplier.employees} · {product.supplier.facility}
              </p>
            </div>
            <div className="bg-white border border-[#F0EADB] rounded-[16px] p-6">
              <h3 className="text-[1rem] font-bold text-[#0E241C]">Performance</h3>
              <p className="text-[0.88rem] text-[#1C2420] mt-2">
                Response rate {product.supplier.responseRate} · Years in business {product.supplier.yearsInBusiness} · Annual capacity {product.supplier.capacity}
              </p>
            </div>
            <div className="bg-white border border-[#F0EADB] rounded-[16px] p-6">
              <h3 className="text-[1rem] font-bold text-[#0E241C]">Certifications</h3>
              <p className="text-[0.88rem] text-[#1C2420] mt-2">{product.supplier.certifications} — certificate gallery and factory video tour on the full supplier profile.</p>
            </div>
            <div className="bg-white border border-[#F0EADB] rounded-[16px] p-6">
              <h3 className="text-[1rem] font-bold text-[#0E241C]">Contact</h3>
              <p className="text-[0.88rem] text-[#1C2420] mt-2">
                In-platform messaging with Arabic–Turkish translation. Live status: <span className="text-[#17362A] font-semibold">Online</span>.
              </p>
            </div>
          </div>
        )}

        {active === "Price Trend" && <PriceHistoryChart product={product} />}

        {active === "Q&A" && <ProductQA product={product} />}

        {active === "Reviews" && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {product.reviewsList.map((r, i) => (
              <div key={i} className="bg-white border border-[#F0EADB] rounded-[16px] p-6">
                <span className="inline-flex items-center text-[0.7rem] font-semibold px-[8px] py-[2px] rounded-[6px] bg-[#F0EADB] text-[#234A3A]">
                  Verified purchase
                </span>
                <div className="text-[#17362A] mt-3">{r.stars}</div>
                <p className="text-[0.88rem] text-[#1C2420] leading-[1.6] mt-2">"{r.text}"</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
