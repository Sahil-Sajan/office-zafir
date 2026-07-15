import { ChartBar, ShieldCheck, Truck, Cash } from "@/components/common/NavIcons"

const benefits = [
    {
        icon: ChartBar,
        title: "Advanced Analytics",
        desc: "Track revenue, order value, and sales growth on a dashboard built for IQD, not adapted from one built for someone else's market.",
    },
    {
        icon: ShieldCheck,
        title: "Seller Protection",
        desc: "Fraud detection and escrow on every transaction — the platform absorbs the risk before it reaches you.",
    },
    {
        icon: Truck,
        title: "Nationwide Logistics",
        desc: "From Zakho to Basra — JayakHub is built to cover all 18 governorates, not just the capital.",
    },
    {
        icon: Cash,
        title: "Reliable Payouts",
        desc: "Net earnings post automatically every 7 days via ZainCash, Asia Hawala, or bank transfer.",
    },
]

export default function SellerFeatures() {
    return (
        <section className="py-12 sm:py-16 border-t border-[#F0EADB] border-b border-[#F0EADB] bg-[#F0EADB]">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
                <div className="flex justify-between items-end gap-6 flex-wrap mb-9">
                    <div>
                        <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
                            Built for the Iraqi market
                        </span>
                        <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-3 mb-[10px] text-[#0E241C]">
                            Everything you need <span className="text-[#C9A853] italic">to scale.</span>
                        </h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px border border-[#F0EADB] rounded-[10px] overflow-hidden bg-[#F0EADB]">
                    {benefits.map((b) => (
                        <div key={b.title} className="bg-white p-[26px] relative transition-all duration-250 hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)]">
                            <div className="text-[1.8rem] mb-3"><b.icon /></div>
                            <h3 className="text-[1.05rem] font-bold mb-2">{b.title}</h3>
                            <p className="text-[0.92rem] text-[#1C2420] leading-[1.6]">{b.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
