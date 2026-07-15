const releases = [
  { date: "Jun 2025", tag: "Product", title: "Zafir360 launches Nuqat loyalty programme across all 18 Iraqi governorates", desc: "The new rewards layer gives consumers points on every purchase, redeemable for discounts and free delivery." },
  { date: "Mar 2025", tag: "Funding", title: "Zafir360 raises Series A to accelerate Iraqi e-commerce infrastructure", desc: "The round funds engineering growth, JayakHub expansion, and the Zafir Wallet product roadmap." },
  { date: "Jan 2025", tag: "Partnership", title: "JayakHub and Zafir360 deepen API integration for real-time last-mile tracking", desc: "Iraqi consumers can now track deliveries live from the Zafir360 app, powered by JayakHub's driver network." },
  { date: "Oct 2024", tag: "Milestone", title: "Zafir360 surpasses 100,000 registered users and 5,000 daily orders", desc: "Eighteen months from launch, the platform reaches scale across buyer, seller, and wholesale tiers." },
  { date: "Jul 2024", tag: "Product", title: "Zafir Wallet goes live — Iraq's first merchant-grade digital wallet", desc: "Sellers can hold IQD/USD balances, pay suppliers, and withdraw to any Iraqi bank account within 24 hours." },
];

export default function PressReleases() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        <div className="mb-9">
          <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
            Press releases
          </span>
          <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-[10px] text-[#0E241C]">
            What's happened, <span className="text-[#C9A853] italic">in order.</span>
          </h2>
        </div>
        <div className="flex flex-col">
          {releases.map((r) => (
            <div key={r.title} className="flex flex-col sm:flex-row gap-2 sm:gap-6 py-6 border-b border-[#F0EADB] last:border-b-0">
              <div className="flex sm:block sm:flex-none items-center gap-2 sm:gap-0 sm:w-[110px]">
                <div className="text-[0.85rem] font-semibold text-[#0E241C]">{r.date}</div>
                <span className="inline-flex items-center text-[0.7rem] font-semibold px-[8px] py-[2px] rounded-[6px] bg-[#F0EADB] text-[#234A3A] mt-1.5">
                  {r.tag}
                </span>
              </div>
              <div>
                <h3 className="text-[1.02rem] font-bold text-[#0E241C] leading-[1.35]">{r.title}</h3>
                <p className="text-[0.88rem] text-[#1C2420] leading-[1.6] mt-1.5">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
