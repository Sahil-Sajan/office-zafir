import Link from "next/link";

export default function ImportCountries() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        <div className="mb-9">
          <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
            By country
          </span>
          <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-[10px] text-[#0E241C]">
            Choose your <span className="text-[#C9A853] italic">import origin.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white border border-[#F0EADB] rounded-[16px] p-8 hover:border-[#17362A] hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)] transition-all duration-200">
            <div className="text-[2rem]">🇹🇷</div>
            <h3 className="text-[1.15rem] font-bold mt-3">Import from Turkey</h3>
            <p className="text-[0.9rem] text-[#1C2420] leading-[1.6] mt-2">
              Turkey is one of Iraq's largest trade partners. Source home appliances, textiles, building materials, and food products from Zafir360-verified Turkish factories with lead times of 18–25 days.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <Link
                href="/import-from-turkey"
                className="inline-flex items-center justify-center gap-2 px-[16px] py-[8px] rounded-[6px] text-[0.85rem] font-semibold bg-[#17362A] text-white no-underline hover:bg-[#234A3A] transition-colors duration-150"
              >
                Read Full Guide
              </Link>
              <span className="inline-flex items-center text-[0.75rem] font-semibold px-[10px] py-[4px] rounded-[6px] bg-[#F0EADB] text-[#234A3A]">
                10,000+ products
              </span>
            </div>
          </div>
          <div className="bg-white border border-[#F0EADB] rounded-[16px] p-8 hover:border-[#17362A] hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)] transition-all duration-200">
            <div className="text-[2rem]">🇨🇳</div>
            <h3 className="text-[1.15rem] font-bold mt-3">Import from China</h3>
            <p className="text-[0.9rem] text-[#1C2420] leading-[1.6] mt-2">
              Access verified Chinese factories for electronics, machinery, consumer goods, and industrial equipment. Shorter lead times of 15 days for many categories, with full container tracking.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <Link
                href="/import-from-china"
                className="inline-flex items-center justify-center gap-2 px-[16px] py-[8px] rounded-[6px] text-[0.85rem] font-semibold bg-[#17362A] text-white no-underline hover:bg-[#234A3A] transition-colors duration-150"
              >
                Read Full Guide
              </Link>
              <span className="inline-flex items-center text-[0.75rem] font-semibold px-[10px] py-[4px] rounded-[6px] bg-[#F0EADB] text-[#234A3A]">
                15,000+ products
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
