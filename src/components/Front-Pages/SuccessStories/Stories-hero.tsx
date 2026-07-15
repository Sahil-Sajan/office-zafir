export default function StoriesHero() {
  return (
    <header className="px-4 sm:px-7 py-12 sm:py-[76px] pb-10 sm:pb-14 border-b border-[#F0EADB]">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center text-center">
        <span className="block text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853] mb-[14px]">
          ◆ Success Stories
        </span>
        <h1 className="max-w-[900px] sm:whitespace-nowrap mb-[18px] text-[clamp(1.8rem,1.2rem+2.4vw,3.4rem)] font-bold tracking-[-0.02em] leading-[1.1] text-[#0E241C]">
          Sellers who built <span className="text-[#C9A853] italic">something real.</span>
        </h1>
        <p className="text-[1.1rem] text-[#1C2420] max-w-[640px] leading-[1.65]">
          Six stores, six categories, one platform. Here's what happened after they opened a storefront on Zafir360.
        </p>
      </div>
    </header>
  );
}
