export default function VerifiedHero() {
  return (
    <header className="px-7 py-[76px] pb-14 border-b border-[#F0EADB]">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center text-center">
        <span className="block text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853] mb-[14px]">
          ◆ Verified Factories
        </span>
        <h1 className="max-w-[760px] mb-[18px] text-[clamp(2.1rem,1.6rem+2vw,3.4rem)] font-bold tracking-[-0.02em] leading-[1.1] text-[#0E241C]">
          The badge that means <span className="text-[#C9A853] italic">someone actually went.</span>
        </h1>
        <p className="text-[1.1rem] text-[#1C2420] max-w-[640px] leading-[1.65]">
          Verified on Zafir360 isn't a checkbox a supplier ticks — it's a personal visit, a document check, and a capacity audit, every time.
        </p>
        <div className="flex gap-9 flex-wrap justify-center mt-10 pt-8 border-t border-[#F0EADB]">
          <div>
            <div className="text-[1.7rem] font-extrabold tracking-[-0.02em] text-[#0E241C]">40+</div>
            <div className="text-[0.85rem] text-[#1C2420] mt-[2px]">Verified factories</div>
          </div>
          <div>
            <div className="text-[1.7rem] font-extrabold tracking-[-0.02em] text-[#0E241C]">2</div>
            <div className="text-[0.85rem] text-[#1C2420] mt-[2px]">Source countries</div>
          </div>
          <div>
            <div className="text-[1.7rem] font-extrabold tracking-[-0.02em] text-[#0E241C]">100%</div>
            <div className="text-[0.85rem] text-[#1C2420] mt-[2px]">Personally visited</div>
          </div>
        </div>
      </div>
    </header>
  );
}
