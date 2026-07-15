import { Phone, Cog, Shirt, Cube, Wrench, ShoppingBag } from "@/components/common/NavIcons"

const categories = [
    { icon: <Phone />, title: "Electronics" },
    { icon: <Cog />, title: "Machinery" },
    { icon: <Shirt />, title: "Textiles" },
    { icon: <Cube />, title: "Packaging" },
    { icon: <Wrench />, title: "Hardware" },
    { icon: <ShoppingBag />, title: "Consumer Goods" },
]

export default function ChinaCategories() {
    return (
        <section className="py-12 sm:py-16 border-t border-[#F0EADB] border-b border-[#F0EADB] bg-[#F0EADB]">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
                <div className="flex justify-between items-end gap-6 flex-wrap mb-9">
                    <div>
                        <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
                            Top categories from China
                        </span>
                        <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-3 mb-[10px] text-[#0E241C]">
                            What Iraqi importers source most <span className="text-[#C9A853] italic">through this network.</span>
                        </h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {categories.map((c) => (
                        <div
                            key={c.title}
                            className="bg-white border border-[#F0EADB] rounded-[16px] p-7 text-center transition-all duration-200 hover:border-[#17362A] hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)]"
                        >
                            <div className="w-14 h-14 rounded-[14px] bg-[#F0EADB] text-[#234A3A] flex items-center justify-center text-[1.6rem] mx-auto shrink-0">
                                {c.icon}
                            </div>
                            <h3 className="text-[1.05rem] font-bold mt-4">{c.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
