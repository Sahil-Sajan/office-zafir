"use client";

import { useMemo, useState } from "react";
import { FactoryCard, type Factory } from "./FactoryCard";

const factories: Factory[] = [
  { name: "Anadolu Tekstil", city: "Bursa", country: "Turkey", category: "Textile & Apparel", moq: "300 pcs" },
  { name: "Marmara Mobilya", city: "Istanbul", country: "Turkey", category: "Furniture", moq: "50 units" },
  { name: "Ege Seramik", city: "Izmir", country: "Turkey", category: "Ceramics & Tile", moq: "20 pallets" },
  { name: "Konya Deri", city: "Konya", country: "Turkey", category: "Leather Goods", moq: "150 pcs" },
  { name: "Shenzhen Elec Co.", city: "Shenzhen", country: "China", category: "Electronics", moq: "500 pcs" },
  { name: "Yiwu Toy Group", city: "Yiwu", country: "China", category: "Toys", moq: "1,000 pcs" },
  { name: "Guangzhou Home", city: "Guangzhou", country: "China", category: "Home Appliances", moq: "200 units" },
  { name: "Foshan Hardware", city: "Foshan", country: "China", category: "Steel & Hardware", moq: "300 pcs" },
  { name: "Kayseri Gıda", city: "Kayseri", country: "Turkey", category: "Food & FMCG", moq: "500 cartons" },
];

const countries = ["All", "Turkey", "China"] as const;

export default function DirectoryFilterGrid() {
  const [country, setCountry] = useState<typeof countries[number]>("All");

  const filtered = useMemo(
    () => (country === "All" ? factories : factories.filter((f) => f.country === country)),
    [country]
  );

  return (
    <section className="py-16">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="flex gap-2 mb-9">
          {countries.map((c) => (
            <button
              key={c}
              onClick={() => setCountry(c)}
              className={`px-[14px] py-[7px] rounded-[999px] text-[0.85rem] font-medium transition-all duration-150 cursor-pointer border ${
                country === c
                  ? "bg-[#0E241C] text-white border-[#0E241C]"
                  : "bg-white text-[#1C2420] border-[#F0EADB] hover:border-[#17362A] hover:text-[#234A3A]"
              }`}
            >
              {c === "Turkey" ? "🇹🇷 Turkey" : c === "China" ? "🇨🇳 China" : "All"}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((f) => (
            <FactoryCard key={f.name} f={f} />
          ))}
        </div>
      </div>
    </section>
  );
}
