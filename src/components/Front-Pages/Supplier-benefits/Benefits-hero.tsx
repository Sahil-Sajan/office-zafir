import Link from "next/link";

export default function BenefitsHero() {
  return (
    <header className="px-4 sm:px-7 pt-12 sm:pt-[76px] pb-10 sm:pb-14 border-b border-[#F0EADB]">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center text-center">
        <span className="block text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853] mb-[14px]">
          ◆ Supplier Benefits
        </span>
        <h1 className="max-w-[760px] mb-[18px] text-[clamp(2.1rem,1.6rem+2vw,3.4rem)] font-bold tracking-[-0.02em] leading-[1.1] text-[#0E241C]">
          What changes <span className="text-[#C9A853] italic">once you're verified.</span>
        </h1>
        <p className="text-[1.1rem] text-[#1C2420] max-w-[640px] leading-[1.65]">
          Verified suppliers on Zafir360 don't just get a listing — they get access to buyers who've already cleared KYB, payments that don't depend on trust, and a badge that actually means something.
        </p>
        <div className="flex gap-3 flex-wrap justify-center mt-6">
          <Link
            href="/supplier-registration"
            className="inline-flex items-center justify-center gap-2 px-[18px] py-[9px] rounded-[6px] text-[0.92rem] font-semibold bg-[#17362A] text-white no-underline hover:bg-[#234A3A] hover:-translate-y-[1px] hover:shadow-[0_8px_20px_rgba(23,54,42,0.28)] transition-all duration-150"
          >
            Start Registration →
          </Link>
          <Link
            href="/how-we-verify-suppliers"
            className="inline-flex items-center justify-center gap-2 px-[18px] py-[9px] rounded-[6px] text-[0.92rem] font-semibold bg-transparent text-[#0E241C] border border-[#F0EADB] no-underline hover:border-[#17362A] hover:text-[#234A3A] hover:-translate-y-[1px] transition-all duration-150"
          >
            How We Verify
          </Link>
        </div>
      </div>
    </header>
  );
}
