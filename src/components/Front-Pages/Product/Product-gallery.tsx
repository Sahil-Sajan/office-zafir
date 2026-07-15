"use client";

import { useState } from "react";
import { ProductData } from "./products-data";

export default function ProductGallery({ product }: { product: ProductData }) {
  const [activeImage, setActiveImage] = useState(product.image);

  return (
    <div onMouseDown={(e) => { if (e.button === 1) e.preventDefault(); }}>
      <div className="relative aspect-square rounded-[16px] overflow-hidden border border-[#F0EADB]">
        <img src={activeImage} alt={product.name} className="w-full h-full object-cover" />
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.badges.map((b) => (
            <span
              key={b.label}
              className={`${b.color} text-white text-[0.68rem] font-bold uppercase tracking-[0.03em] px-2 py-[3px] rounded`}
            >
              {b.label}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-2 mt-4 overflow-x-auto scrollbar-hide">
        {product.gallery.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActiveImage(img)}
            aria-label={`View image ${i + 1}`}
            className={`flex-none w-[64px] h-[64px] rounded-[8px] overflow-hidden border cursor-pointer transition-colors duration-150 ${
              activeImage === img ? "border-[#17362A] border-2" : "border-[#F0EADB] hover:border-[#17362A]"
            }`}
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
