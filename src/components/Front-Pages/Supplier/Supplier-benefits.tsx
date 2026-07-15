const benefits = [
    {
        title: "Verified Buyer Network",
        desc: "Every buyer clears KYB before they see a price — you're quoting real, verified importers, not tire-kickers.",
    },
    {
        title: "Secure Payments",
        desc: "Buyer funds sit in escrow until delivery milestones are met — payment protection that doesn't depend on trust alone.",
    },
    {
        title: "Quality Standards",
        desc: "Sam personally visits every factory before it lists — the badge means something because the gate is real.",
    },
    {
        title: "Growth Analytics",
        desc: "A supplier dashboard tracking RFQs, quote-to-order conversion, and buyer behaviour.",
    },
    {
        title: "Dedicated Support",
        desc: "Direct messaging with Arabic↔Turkish and Arabic↔Chinese translation built in.",
    },
    {
        title: "Regional Reach",
        desc: "Built to extend beyond Iraq as the platform's international-expansion framework matures.",
    },
]

export default function SupplierBenefits() {
    return (
        <section id="benefits" className="py-12 sm:py-16">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
                <div className="flex justify-between items-end gap-6 flex-wrap mb-9">
                    <div>
                        <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
                            Why suppliers choose Zafir360
                        </span>
                        <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-3 mb-[10px] text-[#0E241C]">
                            Everything you need to scale <span className="text-[#C9A853] italic">a B2B business here.</span>
                        </h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px border border-[#F0EADB] rounded-[10px] overflow-hidden bg-[#F0EADB]">
                    {benefits.map((b) => (
                        <div key={b.title} className="bg-white p-[26px] relative transition-all duration-250 hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)]">
                            <h3 className="text-[1.05rem] font-bold mb-2">{b.title}</h3>
                            <p className="text-[0.92rem] text-[#1C2420] leading-[1.6]">{b.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
