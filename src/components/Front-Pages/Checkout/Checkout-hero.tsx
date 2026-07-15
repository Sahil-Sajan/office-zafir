export default function CheckoutHero() {
  return (
    <header className="px-4 sm:px-7 pt-10 sm:pt-14 pb-6 border-b border-[#F0EADB]">
      <div className="max-w-[1180px] mx-auto">
        <span className="block text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853] mb-[10px]">
          ◆ Checkout
        </span>
        <h1 className="text-[clamp(1.6rem,1.3rem+1.5vw,2.6rem)] font-bold tracking-[-0.02em] leading-[1.1] text-[#0E241C]">
          Submit your <span className="text-[#C9A853] italic">request for quote.</span>
        </h1>
        <p className="text-[0.9rem] text-[#5B6961] mt-1.5">
          Suppliers confirm final pricing, MOQ, and lead time before any payment is taken.
        </p>
      </div>
    </header>
  );
}
