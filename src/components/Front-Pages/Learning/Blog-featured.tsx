export default function BlogFeatured() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        <div className="bg-[#0E241C] text-white rounded-[16px] p-6 sm:p-[44px] grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <span className="inline-flex items-center text-[0.72rem] font-semibold px-[10px] py-[3px] rounded-[6px] bg-white/10 text-white/90">
              Featured · Product
            </span>
            <h2 className="text-[1.6rem] font-bold mt-3 max-w-[560px] leading-[1.2]">
              Inside Zafir Wallet: <span className="text-[#C9A853] italic">how 40,000 sellers get paid in 24 hours.</span>
            </h2>
            <p className="text-white/70 text-[0.95rem] mt-2 max-w-[540px]">
              A look at the escrow and payout engine that moved IQD 40M+ last quarter — and what it took to build a wallet Iraqi banks would trust.
            </p>
            <div className="flex items-center gap-3 mt-5 text-[0.8rem] text-white/60">
              <span>Jun 2025</span>
              <span>·</span>
              <span>7 min read</span>
            </div>
          </div>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-[18px] py-[9px] rounded-[6px] text-[0.9rem] font-semibold bg-white text-[#0E241C] no-underline hover:bg-[#F0EADB] transition-colors duration-150 justify-self-start md:justify-self-end whitespace-nowrap"
          >
            Read Story →
          </a>
        </div>
      </div>
    </section>
  );
}
