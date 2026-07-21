import { Rocket, Cash, TrendingUp, Target } from "@/components/common/NavIcons";

const cards = [
    {
        icon: Rocket,
        title: "Quick Setup",
        desc: "Profile to test order in five guided steps — no waiting on a sales call to open a store.",
    },
    {
        icon: Cash,
        title: "Fast Payouts",
        desc: "Net earnings post automatically every 7 days — commission and delivery fees already subtracted.",
    },
    {
        icon: TrendingUp,
        title: "Growth Tools",
        desc: "A live command centre and a public scorecard — you see what's working before a customer complains.",
    },
    {
        icon: Target,
        title: "Built to Reach All 18",
        desc: "JayakHub delivery is designed to cover every Iraqi governorate, not just Baghdad's central districts.",
    },
]

export default function QuickSetupCards() {
    return (
        <section className="py-16">
            <div className="max-w-[1180px] mx-auto px-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {cards.map((c) => (
                        <div
                            key={c.title}
                            className="bg-white border border-[#F0EADB] rounded-[16px] p-7 transition-all duration-200 hover:border-[#17362A] hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)]"
                        >
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-14 h-14 rounded-[14px] bg-[#F0EADB] text-[#234A3A] flex items-center justify-center scale-125 shrink-0">
                                    <c.icon />
                                </div>
                                <h3 className="text-[1.15rem] font-bold">{c.title}</h3>
                            </div>
                            <p className="text-[0.88rem] text-[#1C2420] leading-[1.55]">{c.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
