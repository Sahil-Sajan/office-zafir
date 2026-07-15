import { IdCard, Lock, ChartBar, ChatBubble, Globe } from "@/components/common/NavIcons";

const benefits = [
  { icon: IdCard, title: "Verified Buyer Network", desc: "Every buyer clears KYB before they ever see a wholesale price — you're quoting real, verified importers, not tire-kickers browsing for fun." },
  { icon: Lock, title: "Secure Payments", desc: "Buyer funds sit in escrow until agreed delivery milestones are met. Payment protection that doesn't depend on trusting a stranger's word." },
  { icon: "✓", title: "A Badge That's Hard to Get", desc: "Sam personally visits every factory before it lists, and re-verifies annually. The badge means something because the gate is real." },
  { icon: ChartBar, title: "Growth Analytics", desc: "A supplier dashboard tracking RFQs received, quote-to-order conversion, and buyer behaviour — so you know what's actually working." },
  { icon: ChatBubble, title: "Dedicated Support", desc: "Direct messaging with Arabic↔Turkish and Arabic↔Chinese translation built in, so language is never the reason a deal stalls." },
  { icon: Globe, title: "Regional Reach", desc: "Built to extend beyond Iraq as the platform's international footprint grows — your factory profile scales with the network, not just one market." },
];

export default function BenefitsGrid() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        <div className="mb-9">
          <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
            Six reasons suppliers stay
          </span>
          <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-[10px] text-[#0E241C]">
            Everything you need to scale <span className="text-[#C9A853] italic">a B2B business here.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-white border border-[#F0EADB] rounded-[16px] p-6 hover:border-[#17362A] hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)] transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-[12px] bg-[#F0EADB] text-[#234A3A] flex items-center justify-center text-[1.3rem]">
                {typeof b.icon === "string" ? b.icon : <b.icon />}
              </div>
              <h3 className="text-[1rem] font-bold mt-4">{b.title}</h3>
              <p className="text-[0.88rem] text-[#1C2420] leading-[1.6] mt-2">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
