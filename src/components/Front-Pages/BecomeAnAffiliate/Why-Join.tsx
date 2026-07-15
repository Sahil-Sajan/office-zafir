import { Cash, Link2, ChartBar, ShoppingBag } from "@/components/common/NavIcons";

const cards = [
    {
        icon: <Cash />,
        title: "Commission Per Sale",
        desc: "Earn a percentage of every order placed through your link — no cap on how much you can refer.",
    },
    {
        icon: <Link2 />,
        title: "Custom Tracked Links",
        desc: "A unique link and code for every campaign, so every click and sale is attributed back to you automatically.",
    },
    {
        icon: <ChartBar />,
        title: "Performance Dashboard",
        desc: "Clicks, conversions, and pending payouts in one view — the affiliate dashboard is coming as the program rolls out.",
    },
    {
        icon: <ShoppingBag />,
        title: "Marketing & Creative Kit",
        desc: "Product photos, videos, banners, and suggested copy ready to drop into a post, story, or newsletter.",
    },
]

export default function WhyJoin() {
    return (
        <section className="py-11">
            <div className="max-w-[1180px] mx-auto px-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {cards.map((c) => (
                        <div
                            key={c.title}
                            className="bg-white border border-[#F0EADB] rounded-[16px] p-7 transition-all duration-200 hover:border-[#17362A] hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)]"
                        >
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-14 h-14 rounded-[14px] bg-[#F0EADB] text-[#234A3A] flex items-center justify-center text-[1.6rem] shrink-0">
                                    {c.icon}
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
