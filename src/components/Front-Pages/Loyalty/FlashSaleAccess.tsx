import Link from "next/link";

export default function FlashSaleAccess() {
  return (
    <section className="py-16 bg-[#FAF6EA]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        <div className="bg-[#0E241C] text-white rounded-[16px] p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center gap-6 justify-between">
          <div className="max-w-[620px]">
            <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">◆ Gold &amp; Platinum perk</span>
            <h2 className="text-[1.4rem] sm:text-[1.6rem] font-bold tracking-[-0.02em] mt-2 leading-[1.15]">
              First look at flash sales, before restock runs out.
            </h2>
            <p className="text-[0.9rem] text-white/70 mt-2 leading-[1.6]">
              Gold members get 24-hour early access to flash-sale listings; Platinum members get 48 hours. On limited-run
              factory overstock and closeout lots, that head start is often the difference between full MOQ availability
              and a sold-out listing.
            </p>
          </div>
          <Link
            href="/categories"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[8px] text-[0.88rem] font-semibold bg-white text-[#0E241C] hover:bg-[#F0EADB] transition-colors duration-150 whitespace-nowrap"
          >
            Browse categories →
          </Link>
        </div>
      </div>
    </section>
  );
}
