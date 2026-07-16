export default function NewsCta() {
  return (
    <section className="bg-[#F0EADB]/40 border-t border-[#F0EADB] py-12 sm:py-16">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        <div className="bg-[#0E241C] text-white rounded-[16px] p-6 sm:p-[52px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 flex-wrap">
          <div>
            <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] max-w-[480px]">
              Get market news <span className="text-[#C9A853] italic">before your next order.</span>
            </h2>
            <p className="text-[#C9A853] mt-2.5 max-w-[440px]">
              A monthly digest of currency, tariff, and demand shifts that affect your sourcing costs.
            </p>
          </div>
          <form className="flex gap-2 w-full lg:w-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="you@company.com"
              aria-label="Email for newsletter"
              className="flex-1 min-w-0 lg:flex-initial px-3 py-[9px] border border-white/20 rounded-[6px] text-[0.85rem] bg-white/10 text-white placeholder-white/50 focus:outline-none focus:border-white/50"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-[16px] py-[9px] rounded-[6px] text-[0.85rem] font-semibold bg-white text-[#0E241C] hover:bg-[#F0EADB] transition-colors duration-150 cursor-pointer border-none"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
