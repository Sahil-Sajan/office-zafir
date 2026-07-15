import Link from "next/link";

export default function StoryCta() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        <div className="bg-[#0E241C] text-white rounded-[16px] p-6 sm:p-[52px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 flex-wrap">
          <div>
            <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] max-w-[480px]">
              Be part of <span className="text-[#C9A853] italic">the next chapter.</span>
            </h2>
            <p className="text-[#C9A853] mt-2.5 max-w-[440px]">
              Join thousands of Iraqi businesses already trading on Zafir360.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap w-full lg:w-auto">
            <Link
              href="/become-a-seller"
              className="inline-flex items-center justify-center gap-2 px-[18px] py-[9px] rounded-[6px] text-[0.92rem] font-semibold bg-white text-[#0E241C] no-underline hover:bg-[#F0EADB] transition-colors duration-150"
            >
              Start Selling
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 px-[18px] py-[9px] rounded-[6px] text-[0.92rem] font-semibold bg-transparent text-white border border-white/25 no-underline hover:border-white/50 transition-colors duration-150"
            >
              About Us →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
