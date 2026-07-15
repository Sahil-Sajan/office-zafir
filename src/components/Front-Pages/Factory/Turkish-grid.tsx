"use client";

import { useState } from "react";
import { FactoryCard, type Factory } from "./FactoryCard";
import TurkishCategories from "./Turkish-categories";

const factories: Factory[] = [
  { name: "Anadolu Tekstil", city: "Bursa", country: "Turkey", category: "Textile & Apparel", moq: "300 pcs" },
  { name: "Marmara Mobilya", city: "Istanbul", country: "Turkey", category: "Furniture", moq: "50 units" },
  { name: "Ege Seramik", city: "Izmir", country: "Turkey", category: "Ceramics & Tile", moq: "20 pallets" },
  { name: "Konya Deri", city: "Konya", country: "Turkey", category: "Leather Goods", moq: "150 pcs" },
  { name: "Kayseri Gıda", city: "Kayseri", country: "Turkey", category: "Food & FMCG", moq: "500 cartons" },
  { name: "Gaziantep Çelik", city: "Gaziantep", country: "Turkey", category: "Steel & Hardware", moq: "10 tons" },
];

const categories = ["All", "Textile & Apparel", "Furniture", "Ceramics & Tile", "Leather Goods", "Steel & Hardware", "Food & FMCG"];

export default function TurkishGrid() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? factories : factories.filter((f) => f.category === active);

  return (
    <section className="py-16">
      <TurkishCategories categories={categories} active={active} onSelect={setActive} />
      <div className="max-w-[1180px] mx-auto px-7">
        {filtered.length === 0 ? (
          <p className="text-[0.9rem] text-[#5B6961]">No factories match this category yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((f) => (
              <FactoryCard key={f.name} f={f} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
