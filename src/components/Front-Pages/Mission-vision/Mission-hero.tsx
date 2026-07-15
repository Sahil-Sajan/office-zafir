export default function MissionHero() {
  return (
    <header className="px-7 py-[76px] pb-14 border-b border-[#F0EADB]">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center text-center">
        <span className="block text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853] mb-[14px]">
          ◆ Mission &amp; Vision
        </span>
        <h1 className="max-w-[760px] mb-[18px] text-[clamp(2.1rem,1.6rem+2vw,3.4rem)] font-bold tracking-[-0.02em] leading-[1.1] text-[#0E241C]">
          <span className="text-[#C9A853] italic">Why we exist.</span>
        </h1>
        <p className="text-[1.1rem] text-[#1C2420] max-w-[640px] leading-[1.65]">
          Every decision at Zafir360 answers one question: does this make trade easier for Iraqis?
        </p>
      </div>
    </header>
  );
}
