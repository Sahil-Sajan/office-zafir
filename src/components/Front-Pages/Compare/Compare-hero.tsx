interface CompareHeroProps {
  count: number;
}

export default function CompareHero({ count }: CompareHeroProps) {
  return (
    <header className="px-4 sm:px-7 pt-10 sm:pt-14 pb-6 border-b border-[#F0EADB]">
      <div className="max-w-[1180px] mx-auto">
        <span className="block text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853] mb-[10px]">
          ◆ Compare Products
        </span>
        <h1 className="text-[clamp(1.6rem,1.3rem+1.5vw,2.6rem)] font-bold tracking-[-0.02em] leading-[1.1] text-[#0E241C]">
          Specs, price, and MOQ <span className="text-[#C9A853] italic">side by side.</span>
        </h1>
        <p className="text-[0.9rem] text-[#5B6961] mt-1.5">
          {count > 0 ? `Comparing ${count} product${count === 1 ? "" : "s"}.` : "Add products to compare from any product grid."}
        </p>
      </div>
    </header>
  );
}
