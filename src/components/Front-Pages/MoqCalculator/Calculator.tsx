"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { products, type ProductData } from "@/components/Front-Pages/Product/products-data";

const productList = Object.values(products);

function parseQty(text: string): number {
  const digits = text.replace(/,/g, "").match(/\d+/);
  return digits ? parseInt(digits[0], 10) : 0;
}

function parsePrice(text: string): number {
  const match = text.replace(/,/g, "").match(/[\d.]+/);
  return match ? parseFloat(match[0]) : 0;
}

function parseContainerCapacity(text: string): number {
  const match = text.replace(/,/g, "").match(/\d+/);
  return match ? parseInt(match[0], 10) : 0;
}

function matchTier(product: ProductData, quantity: number) {
  const tiers = product.priceTiers.map((t) => ({ ...t, min: parseQty(t.qty) }));
  let matched = tiers[0];
  for (const tier of tiers) {
    if (quantity >= tier.min) matched = tier;
  }
  const index = tiers.findIndex((t) => t.qty === matched.qty);
  return { tier: matched, index, total: tiers.length };
}

const fmt = (n: number) => n.toLocaleString("en-US", { maximumFractionDigits: 2 });

export default function MoqCalculatorTool() {
  const [slug, setSlug] = useState(productList[0].slug);
  const product = productList.find((p) => p.slug === slug) ?? productList[0];
  const moq = parseQty(product.moq);
  const [quantityInput, setQuantityInput] = useState(String(moq));

  const quantity = Math.max(0, parseInt(quantityInput.replace(/[^\d]/g, ""), 10) || 0);
  const belowMoq = quantity > 0 && quantity < moq;

  const { tier, index, total } = useMemo(() => matchTier(product, Math.max(quantity, moq)), [product, quantity, moq]);
  const unitPrice = parsePrice(tier.price);
  const moqUnitPrice = parsePrice(product.priceTiers[0].price);
  const totalCost = unitPrice * quantity;
  const moqCost = moqUnitPrice * quantity;
  const savingsAmount = Math.max(0, moqCost - totalCost);
  const savingsPct = moqCost > 0 ? Math.round((savingsAmount / moqCost) * 100) : 0;

  const containerCapacity = parseContainerCapacity(product.containerFit);
  const containersNeeded = containerCapacity > 0 && quantity > 0 ? Math.ceil(quantity / containerCapacity) : 0;
  const containerFill = containerCapacity > 0 && containersNeeded > 0
    ? Math.round(((quantity % containerCapacity || containerCapacity) / containerCapacity) * 100)
    : 0;

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-6 lg:gap-8 items-start">
          {/* Inputs + live result — summary first */}
          <div className="lg:sticky lg:top-24 flex flex-col gap-4">
            <div className="bg-white border border-[#F0EADB] rounded-[14px] p-5">
              <label htmlFor="moq-product" className="block text-[0.78rem] font-semibold text-[#1C2420] mb-1.5">
                Product
              </label>
              <select
                id="moq-product"
                value={slug}
                onChange={(e) => {
                  setSlug(e.target.value);
                  setQuantityInput(String(parseQty(products[e.target.value]?.moq ?? "0")));
                }}
                className="w-full px-3 py-2.5 rounded-[8px] border border-[#F0EADB] bg-white text-[0.88rem] text-[#0E241C] focus:outline-none focus:border-[#17362A]"
              >
                {productList.map((p) => (
                  <option key={p.slug} value={p.slug}>{p.name}</option>
                ))}
              </select>

              <label htmlFor="moq-qty" className="block text-[0.78rem] font-semibold text-[#1C2420] mt-4 mb-1.5">
                Quantity
              </label>
              <input
                id="moq-qty"
                type="number"
                inputMode="numeric"
                min={0}
                value={quantityInput}
                onChange={(e) => setQuantityInput(e.target.value)}
                aria-describedby="moq-hint"
                className={`w-full px-3 py-2.5 rounded-[8px] border bg-white text-[0.95rem] tabular-nums text-[#0E241C] focus:outline-none ${
                  belowMoq ? "border-[#B3422F]" : "border-[#F0EADB] focus:border-[#17362A]"
                }`}
              />
              <p id="moq-hint" className={`text-[0.76rem] mt-1.5 ${belowMoq ? "text-[#B3422F]" : "text-[#5B6961]"}`}>
                {belowMoq
                  ? `Below MOQ — priced at the ${moq.toLocaleString()}-unit minimum shown below.`
                  : `MOQ for this product: ${moq.toLocaleString()} units.`}
              </p>
            </div>

            <div className="bg-[#0E241C] text-white rounded-[14px] p-5">
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.06em] text-[#C9A853]">
                Tier {index + 1} of {total}
              </span>
              <div className="flex items-baseline gap-1.5 mt-2">
                <span className="text-[1.9rem] font-extrabold tabular-nums leading-none">${fmt(unitPrice)}</span>
                <span className="text-[0.85rem] text-white/70">/ unit</span>
              </div>
              <div className="flex items-baseline gap-1.5 mt-3 pt-3 border-t border-white/15">
                <span className="text-[1.3rem] font-bold tabular-nums">${fmt(totalCost)}</span>
                <span className="text-[0.8rem] text-white/70">total for {quantity.toLocaleString()} units</span>
              </div>
              {savingsAmount > 0 && (
                <div className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold px-[10px] py-[4px] rounded-[6px] bg-[#C9A853] text-[#1C2420] mt-3">
                  Save ${fmt(savingsAmount)} ({savingsPct}%) vs MOQ price
                </div>
              )}
            </div>

            {containersNeeded > 0 && (
              <div className="bg-white border border-[#F0EADB] rounded-[14px] p-5">
                <span className="text-[0.78rem] font-semibold text-[#1C2420]">Container estimate</span>
                <div className="flex items-baseline gap-1.5 mt-1.5">
                  <span className="text-[1.3rem] font-bold text-[#0E241C] tabular-nums">{containersNeeded}</span>
                  <span className="text-[0.85rem] text-[#5B6961]">
                    × 40ft container{containersNeeded > 1 ? "s" : ""} ({containerCapacity.toLocaleString()} units each)
                  </span>
                </div>
                <div className="h-1.5 rounded bg-[#F0EADB] overflow-hidden mt-2.5">
                  <span className="block h-full bg-[#17362A]" style={{ width: `${containerFill}%` }} />
                </div>
                <p className="text-[0.74rem] text-[#5B6961] mt-1.5">Last container {containerFill}% full</p>
              </div>
            )}

            <Link
              href={`/product/${product.slug}`}
              className="inline-flex items-center justify-center gap-2 px-[18px] py-[11px] rounded-[8px] text-[0.9rem] font-semibold bg-[#17362A] text-white no-underline hover:bg-[#234A3A] transition-colors duration-150"
            >
              View {product.name} →
            </Link>
          </div>

          {/* Full tier table — detail */}
          <div className="bg-white border border-[#F0EADB] rounded-[14px] overflow-hidden">
            <div className="p-5 border-b border-[#F0EADB]">
              <h2 className="text-[1.05rem] font-bold text-[#0E241C]">{product.name} — full price breakdown</h2>
              <p className="text-[0.82rem] text-[#5B6961] mt-1">Origin: {product.origin} · Lead time {product.leadTime} · {product.incoterms}</p>
            </div>
            <table className="w-full text-[0.88rem]">
              <thead>
                <tr className="border-b border-[#F0EADB] bg-[#FAF6EA]">
                  <th className="text-left px-5 py-3 font-semibold text-[#5B6961] text-[0.74rem] uppercase tracking-[0.04em]">Quantity</th>
                  <th className="text-left px-5 py-3 font-semibold text-[#5B6961] text-[0.74rem] uppercase tracking-[0.04em]">Unit Price</th>
                  <th className="text-left px-5 py-3 font-semibold text-[#5B6961] text-[0.74rem] uppercase tracking-[0.04em]">Savings</th>
                </tr>
              </thead>
              <tbody>
                {product.priceTiers.map((t, i) => (
                  <tr key={t.qty} className={i === index ? "bg-[#F0EADB]" : ""}>
                    <td className="px-5 py-3.5 font-medium text-[#0E241C]">
                      {t.qty}
                      {i === index && (
                        <span className="ml-2 inline-flex items-center text-[0.68rem] font-bold uppercase tracking-[0.04em] px-[8px] py-[2px] rounded bg-[#17362A] text-white">
                          Your tier
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-3.5 tabular-nums font-semibold text-[#0E241C]">{t.price}</td>
                    <td className="px-5 py-3.5 tabular-nums text-[#1C2420]">{t.savings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="p-5 border-t border-[#F0EADB] text-[0.82rem] text-[#5B6961]">
              MOQ, container fit, and price tiers pull directly from this product&apos;s live listing — every figure above matches what you&apos;d see on the product page.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
