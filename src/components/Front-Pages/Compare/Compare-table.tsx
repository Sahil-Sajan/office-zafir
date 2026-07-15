"use client";

import Link from "next/link";
import { useCompare } from "@/contexts/CompareContext";
import { getProduct } from "@/components/Front-Pages/Product/products-data";

const tierMeta: Record<string, { label: string; color: string }> = {
  retail: { label: "Retail", color: "bg-[#1F5C4D] text-white" },
  marketplace: { label: "Seller Marketplace", color: "bg-[#C9A853] text-[#1C2420]" },
  wholesale: { label: "Wholesale", color: "bg-[#17362A] text-white" },
};

const ROWS: { label: string; render: (p: ReturnType<typeof getProduct>) => React.ReactNode }[] = [
  { label: "Price", render: (p) => <span className="font-extrabold text-[#0E241C]">{p.price}</span> },
  { label: "MOQ", render: (p) => p.moq },
  { label: "Rating", render: (p) => `${p.rating} (${p.reviews})` },
  { label: "Origin", render: (p) => p.origin },
  { label: "Lead time", render: (p) => p.leadTime },
  { label: "Incoterms", render: (p) => p.incoterms },
  { label: "Carton qty", render: (p) => p.cartonQty },
  { label: "Container fit", render: (p) => p.containerFit },
  { label: "Supplier", render: (p) => p.supplier.name },
];

export default function CompareTable({ lang }: { lang: string }) {
  const { slugs, remove, clear } = useCompare();
  const products = slugs.map((s) => getProduct(s)).filter(Boolean);

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center text-center py-20 px-4">
        <span className="text-4xl mb-3">⇄</span>
        <h2 className="text-[1.15rem] font-bold text-[#0E241C]">Nothing to compare yet</h2>
        <p className="text-[0.9rem] text-[#5B6961] mt-1.5 max-w-[380px]">
          Tick &ldquo;Compare&rdquo; on up to 4 products from search or category pages.
        </p>
        <Link
          href={`/${lang}/categories`}
          className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-[8px] text-[0.88rem] font-semibold bg-[#17362A] text-white no-underline hover:bg-[#234A3A] transition-colors duration-150"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-end mb-4">
        <button
          type="button"
          onClick={clear}
          className="text-[0.82rem] font-semibold text-[#5B6961] hover:text-[#B3422F] transition-colors duration-150 cursor-pointer"
        >
          Clear all
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse">
          <thead>
            <tr>
              <th className="w-[140px]" />
              {products.map((p) => (
                <th key={p.slug} className="text-left align-top p-3 border-b border-[#F0EADB] min-w-[200px]">
                  <div className="relative bg-white border border-[#F0EADB] rounded-[10px] p-3">
                    <button
                      type="button"
                      aria-label={`Remove ${p.name} from compare`}
                      onClick={() => remove(p.slug)}
                      className="absolute top-2 right-2 size-6 flex items-center justify-center rounded-full text-[#5B6961] hover:text-[#B3422F] hover:bg-[#FAF6EA] transition-colors duration-150 cursor-pointer"
                    >
                      ✕
                    </button>
                    <img src={p.image} alt={p.name} className="w-full aspect-[4/3] object-cover rounded-[6px]" />
                    <span className={`inline-block mt-2 ${tierMeta[p.tier].color} text-[0.6rem] font-bold uppercase tracking-[0.03em] px-1.5 py-[2px] rounded`}>
                      {tierMeta[p.tier].label}
                    </span>
                    <Link
                      href={`/${lang}/product/${p.slug}`}
                      className="block text-[0.88rem] font-bold text-[#0E241C] no-underline hover:text-[#234A3A] mt-1.5 leading-[1.3]"
                    >
                      {p.name}
                    </Link>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row, i) => (
              <tr key={row.label} className={i % 2 === 0 ? "bg-[#FAF6EA]" : ""}>
                <td className="p-3 text-[0.82rem] font-semibold text-[#5B6961] whitespace-nowrap align-top">{row.label}</td>
                {products.map((p) => (
                  <td key={p.slug} className="p-3 text-[0.85rem] text-[#1C2420] align-top">
                    {row.render(p)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
