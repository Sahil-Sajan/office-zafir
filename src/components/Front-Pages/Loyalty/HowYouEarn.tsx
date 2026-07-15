import Link from "next/link";

const ways = [
  {
    label: "Base rate",
    title: "1 Nuqat per $1 spent",
    detail: "Earned on the pre-shipping order subtotal, multiplied by your tier bonus at checkout.",
  },
  {
    label: "First purchase",
    title: "+500 Nuqat bonus",
    detail: "One-time bonus credited after your first completed order on Zafir360.",
  },
  {
    label: "Referrals",
    title: "+1,000 Nuqat per referral",
    detail: "Invite another buyer — once their first order ships, you both earn a referral bonus.",
  },
  {
    label: "Product reviews",
    title: "+50 Nuqat per review",
    detail: "Leave a written review with at least one photo on a completed order (capped at 5 per month).",
  },
];

export default function HowYouEarn() {
  return (
    <section className="py-16 bg-[#FAF6EA]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        <span className="block text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853] mb-2">◆ How you earn</span>
        <h2 className="text-[1.5rem] sm:text-[1.8rem] font-bold tracking-[-0.02em] text-[#0E241C] mb-2">
          Points add up <span className="text-[#C9A853] italic">every time you order.</span>
        </h2>
        <p className="text-[0.9rem] text-[#5B6961] mb-8 max-w-[720px]">
          Nuqat is built around one simple base rate, plus a handful of bonus actions worth doing regardless of order size.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ways.map((w) => (
            <div key={w.title} className="bg-white border border-[#F0EADB] rounded-[12px] p-5 sm:p-6">
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.06em] text-[#C9A853]">{w.label}</span>
              <div className="text-[1.05rem] font-bold text-[#0E241C] mt-1.5 leading-snug">{w.title}</div>
              <p className="text-[0.82rem] text-[#5B6961] mt-1.5">{w.detail}</p>
            </div>
          ))}
        </div>

        <p className="text-[0.82rem] text-[#5B6961] mt-6">
          Looking to sell instead of buy? <Link href="/become-a-seller" className="text-[#17362A] font-semibold hover:text-[#234A3A]">Open a store</Link> and earn on your own wholesale orders too.
        </p>
      </div>
    </section>
  );
}
