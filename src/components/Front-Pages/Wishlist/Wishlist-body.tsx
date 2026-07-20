"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useWishlist } from "@/contexts/WishlistContext";
import { useCart } from "@/contexts/CartContext";

const tierMeta: Record<string, { label: string; color: string }> = {
  retail: { label: "Retail", color: "bg-[#1F5C4D] text-white" },
  marketplace: { label: "Seller Marketplace", color: "bg-[#C9A853] text-[#1C2420]" },
  wholesale: { label: "Wholesale", color: "bg-[#17362A] text-white" },
};

export default function WishlistBody({ lang }: { lang: string }) {
  const { items, lists, createList, moveToList, setAlerts, remove } = useWishlist();
  const { addItem } = useCart();
  const [activeList, setActiveList] = useState<string>("All");
  const [newListName, setNewListName] = useState("");

  const visible = activeList === "All" ? items : items.filter((i) => i.listName === activeList);

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center text-center py-20 px-4">
        <span className="text-4xl mb-3">♡</span>
        <h2 className="text-[1.15rem] font-bold text-[#0E241C]">Your wishlist is empty</h2>
        <p className="text-[0.9rem] text-[#5B6961] mt-1.5 max-w-[380px]">
          Tap the heart icon on any product to save it here.
        </p>
        <Link
          href={`/${lang}/search-products`}
          className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-[8px] text-[0.88rem] font-semibold bg-[#17362A] text-white no-underline hover:bg-[#234A3A] transition-colors duration-150"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-2 flex-wrap mb-6">
        <button
          type="button"
          onClick={() => setActiveList("All")}
          className={`px-3.5 py-1.5 rounded-full text-[0.82rem] font-semibold border transition-colors duration-150 cursor-pointer ${activeList === "All" ? "bg-[#0E241C] text-white border-[#0E241C]" : "bg-white text-[#1C2420] border-[#F0EADB] hover:border-[#17362A]"
            }`}
        >
          All ({items.length})
        </button>
        {lists.map((l) => (
          <button
            key={l}
            type="button"
            onClick={() => setActiveList(l)}
            className={`px-3.5 py-1.5 rounded-full text-[0.82rem] font-semibold border transition-colors duration-150 cursor-pointer ${activeList === l ? "bg-[#0E241C] text-white border-[#0E241C]" : "bg-white text-[#1C2420] border-[#F0EADB] hover:border-[#17362A]"
              }`}
          >
            {l} ({items.filter((i) => i.listName === l).length})
          </button>
        ))}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!newListName.trim()) return;
            createList(newListName);
            setNewListName("");
          }}
          className="flex items-center gap-1.5"
        >
          <input
            type="text"
            value={newListName}
            onChange={(e) => setNewListName(e.target.value)}
            placeholder="New list name…"
            aria-label="New wishlist name"
            className="w-[140px] border border-[#F0EADB] rounded-full px-3 py-1.5 text-[0.8rem] outline-none focus:border-[#17362A]"
          />
          <button
            type="submit"
            disabled={!newListName.trim()}
            className="px-3 py-1.5 rounded-full text-[0.8rem] font-semibold border border-[#F0EADB] text-[#0E241C] hover:border-[#17362A] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors duration-150"
          >
            + New list
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visible.map((item) => (
          <div key={item.slug} className="bg-white border border-[#F0EADB] rounded-[10px] overflow-hidden flex flex-col">
            <Link href={`/${lang}/product/${item.slug}`} className="relative aspect-[4/3] overflow-hidden block">
              <Image src={item.image} alt={item.name} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
            </Link>
            <div className="p-3.5 flex flex-col gap-1.5 flex-1">
              <span className={`self-start ${tierMeta[item.tier].color} text-[0.6rem] font-bold uppercase tracking-[0.03em] px-1.5 py-[2px] rounded`}>
                {tierMeta[item.tier].label}
              </span>
              <Link href={`/${lang}/product/${item.slug}`} className="text-[0.9rem] font-bold text-[#0E241C] no-underline hover:text-[#234A3A] leading-[1.3]">
                {item.name}
              </Link>
              <span className="text-[1rem] font-extrabold text-[#0E241C]">{item.price}</span>

              <div className="flex flex-col gap-1.5 mt-1.5 pt-2.5 border-t border-[#F0EADB]">
                <label className="flex items-center gap-2 text-[0.76rem] text-[#1C2420] cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={item.alertPriceDrop}
                    onChange={(e) => setAlerts(item.slug, { alertPriceDrop: e.target.checked })}
                    className="size-[14px] rounded-[3px] accent-[#17362A] cursor-pointer"
                  />
                  Notify on price drop
                </label>
                <label className="flex items-center gap-2 text-[0.76rem] text-[#1C2420] cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={item.alertBackInStock}
                    onChange={(e) => setAlerts(item.slug, { alertBackInStock: e.target.checked })}
                    className="size-[14px] rounded-[3px] accent-[#17362A] cursor-pointer"
                  />
                  Notify when back in stock
                </label>
              </div>

              {lists.length > 1 && (
                <select
                  value={item.listName}
                  onChange={(e) => moveToList(item.slug, e.target.value)}
                  className="mt-1 border border-[#F0EADB] rounded-[6px] px-2 py-1.5 text-[0.76rem] bg-white text-[#1C2420] focus:outline-none focus:border-[#17362A]"
                >
                  {lists.map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
              )}

              <div className="flex gap-2 mt-2">
                <button
                  type="button"
                  onClick={() =>
                    addItem({ slug: item.slug, name: item.name, image: item.image, price: item.price, moq: "1 unit", variant: "Default", tier: item.tier })
                  }
                  className="flex-1 px-3 py-2 rounded-[8px] text-[0.8rem] font-semibold bg-[#17362A] text-white hover:bg-[#234A3A] transition-colors duration-150 cursor-pointer"
                >
                  Add to Basket
                </button>
                <button
                  type="button"
                  onClick={() => remove(item.slug)}
                  aria-label={`Remove ${item.name} from wishlist`}
                  className="px-3 py-2 rounded-[8px] text-[0.8rem] font-semibold border border-[#F0EADB] text-[#5B6961] hover:text-[#B3422F] hover:border-[#B3422F] transition-colors duration-150 cursor-pointer"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-[0.76rem] text-[#5B6961] mt-6">
        Price-drop and back-in-stock alerts are saved as preferences on this device — there's no notification
        backend yet to actually send them.
      </p>
    </div>
  );
}
