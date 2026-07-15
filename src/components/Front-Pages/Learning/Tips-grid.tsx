import { Cash, Cube, CreditCard, Camera, Megaphone, TrendingUp, Globe, Refresh } from "@/components/common/NavIcons";

const tips = [
  { icon: Cash, title: "Price for margin, not for matching competitors", desc: "Undercutting on price alone erodes margin fast — factor in commission, delivery fees, and returns before you set a number." },
  { icon: Cube, title: "Keep 2 weeks of your best-sellers in stock", desc: "Stockouts on top movers cost more in lost ranking than the cash tied up in extra inventory." },
  { icon: CreditCard, title: "Reconcile your payout weekly, not monthly", desc: "Catching a fee or refund discrepancy early is far easier than untangling six weeks of transactions." },
  { icon: Camera, title: "Reshoot product photos every 6 months", desc: "Listings with recent, well-lit photos convert noticeably better than ones with launch-day images." },
  { icon: Megaphone, title: "Respond to buyer messages within 2 hours", desc: "Fast response time is one of the strongest signals in your seller performance scorecard." },
  { icon: TrendingUp, title: "Watch your return rate, not just your sales", desc: "A rising return rate quietly kills the margin a sales spike appears to create — check both together." },
  { icon: Globe, title: "List in Arabic first, then translate", desc: "Titles and descriptions written natively in Arabic outperform machine-translated English copy." },
  { icon: Refresh, title: "Re-engage past buyers before chasing new ones", desc: "A returning customer costs less to convert than a new one — use order history to time your follow-up." },
];

export default function TipsGrid() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {tips.map((t) => (
            <div key={t.title} className="flex gap-4 bg-white border border-[#F0EADB] rounded-[16px] p-6">
              <div className="flex-none w-12 h-12 rounded-[12px] bg-[#F0EADB] text-[#234A3A] flex items-center justify-center text-[1.3rem]">
                <t.icon />
              </div>
              <div>
                <h3 className="text-[1rem] font-bold text-[#0E241C]">{t.title}</h3>
                <p className="text-[0.86rem] text-[#1C2420] leading-[1.6] mt-1.5">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
