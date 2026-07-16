import Link from "next/link";

export default function TipsCta() {
  return (
    <section className="bg-[#F0EADB]/40 border-t border-[#F0EADB] py-12 sm:py-16">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        <div className="bg-[#0E241C] text-white rounded-[16px] p-6 sm:p-[52px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 flex-wrap">
          <div>
            <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] max-w-[480px]">
              Want tips like this <span className="text-[#C9A853] italic">for your store?</span>
            </h2>
            <p className="text-[#C9A853] mt-2.5 max-w-[440px]">
              Open your store and get access to seller performance tools that surface these patterns automatically.
            </p>
          </div>
          <Link
            href="/open-your-store"
            className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-[18px] py-[9px] rounded-[6px] text-[0.92rem] font-semibold bg-white text-[#0E241C] no-underline hover:bg-[#F0EADB] transition-colors duration-150"
          >
            Open Your Store →
          </Link>
        </div>
      </div>
    </section>
  );
}
