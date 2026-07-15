interface WishlistHeroProps {
  count: number;
}

export default function WishlistHero({ count }: WishlistHeroProps) {
  return (
    <header className="px-4 sm:px-7 pt-10 sm:pt-14 pb-6 border-b border-[#F0EADB]">
      <div className="max-w-[1180px] mx-auto">
        <span className="block text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853] mb-[10px]">
          ◆ Wishlist
        </span>
        <h1 className="text-[clamp(1.6rem,1.3rem+1.5vw,2.6rem)] font-bold tracking-[-0.02em] leading-[1.1] text-[#0E241C]">
          Products you&rsquo;re <span className="text-[#C9A853] italic">watching.</span>
        </h1>
        <p className="text-[0.9rem] text-[#5B6961] mt-1.5">
          {count > 0 ? `${count} saved product${count === 1 ? "" : "s"}.` : "Save products from any listing to find them here."}
        </p>
      </div>
    </header>
  );
}
