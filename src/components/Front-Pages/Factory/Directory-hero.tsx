export default function DirectoryHero() {
  return (
    <header className="px-7 py-[76px] pb-14 border-b border-[#F0EADB]">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center text-center">
        <span className="block text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853] mb-[14px]">
          ◆ Factory Directory
        </span>
        <h1 className="max-w-[760px] mb-[18px] text-[clamp(2.1rem,1.6rem+2vw,3.4rem)] font-bold tracking-[-0.02em] leading-[1.1] text-[#0E241C]">
          Every verified factory, <span className="text-[#C9A853] italic">in one place.</span>
        </h1>
        <p className="text-[1.1rem] text-[#1C2420] max-w-[640px] leading-[1.65]">
          Browse Zafir360's full network of personally-visited factories across Turkey and China — filter by country and category to find your next supplier.
        </p>
      </div>
    </header>
  );
}
