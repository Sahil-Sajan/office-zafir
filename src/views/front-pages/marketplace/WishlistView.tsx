"use client";

import WishlistHero from "@/components/Front-Pages/Wishlist/Wishlist-hero";
import WishlistBody from "@/components/Front-Pages/Wishlist/Wishlist-body";
import { useWishlist } from "@/contexts/WishlistContext";

export function WishlistView({ lang }: { lang: string }) {
  const { count } = useWishlist();

  return (
    <div>
      <WishlistHero count={count} />
      <div className="px-4 sm:px-7 py-8 sm:py-10">
        <div className="max-w-[1180px] mx-auto">
          <WishlistBody lang={lang} />
        </div>
      </div>
    </div>
  );
}
