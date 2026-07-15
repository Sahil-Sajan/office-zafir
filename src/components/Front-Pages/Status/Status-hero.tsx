export default function StatusHero() {
  return (
    <header className="px-4 sm:px-7 pt-10 sm:pt-14 pb-6 border-b border-[#F0EADB]">
      <div className="max-w-[1180px] mx-auto flex items-center gap-3 flex-wrap">

        <div>
          <span className="block text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853] mb-[6px]">
            ◆ Platform Status
          </span>
          <h1 className="text-[clamp(1.6rem,1.3rem+1.5vw,2.6rem)] font-bold tracking-[-0.02em] leading-[1.1] text-[#0E241C]">
            All systems <span className="text-[#C9A853] italic">operational.</span>
          </h1>
        </div>
      </div>
    </header>
  );
}
