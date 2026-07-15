"use client";

import { useState } from "react";
import { FactoryCard, type Factory } from "./FactoryCard";
import ChineseCategories from "./Chinese-categories";

const factories: Factory[] = [
  { name: "Shenzhen Elec Co.", city: "Shenzhen", country: "China", category: "Electronics", moq: "500 pcs" },
  { name: "Yiwu Toy Group", city: "Yiwu", country: "China", category: "Toys", moq: "1,000 pcs" },
  { name: "Guangzhou Home", city: "Guangzhou", country: "China", category: "Home Appliances", moq: "200 units" },
  { name: "Foshan Hardware", city: "Foshan", country: "China", category: "Steel & Hardware", moq: "300 pcs" },
  { name: "Ningbo Textiles", city: "Ningbo", country: "China", category: "Textiles", moq: "400 pcs" },
  { name: "Dongguan Packaging", city: "Dongguan", country: "China", category: "Packaging", moq: "5,000 units" },
];

const categories = ["All", "Electronics", "Toys", "Home Appliances", "Textiles", "Steel & Hardware", "Packaging"];

export default function ChineseGrid() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? factories : factories.filter((f) => f.category === active);

  return (
    <section className="py-16">
      <ChineseCategories categories={categories} active={active} onSelect={setActive} />
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
