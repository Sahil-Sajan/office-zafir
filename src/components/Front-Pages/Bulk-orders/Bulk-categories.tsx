import { HardHat, Laptop, Shirt, Jar, Sofa, Wrench } from "@/components/common/NavIcons"

const categories = [
    { icon: <HardHat />, savings: "Up to 30%", title: "Construction Materials", desc: "Cement, rebar, tiles — popular with contractors." },
    { icon: <Laptop />, savings: "Up to 22%", title: "Electronics & Tech", desc: "Devices and accessories for resellers." },
    { icon: <Shirt />, savings: "Up to 28%", title: "Textiles & Fashion", desc: "Seasonal bulk buys for boutiques and markets." },
    { icon: <Jar />, savings: "Up to 20%", title: "Food & Beverage", desc: "FMCG and packaged goods for retailers." },
    { icon: <Sofa />, savings: "Up to 25%", title: "Home & Furniture", desc: "Household goods for furnishing businesses." },
    { icon: <Wrench />, savings: "Up to 18%", title: "Auto Parts", desc: "OEM parts for workshops and dealers." },
]

export default function () {
    return (
        <section className="py-12 sm:py-16 border-t border-[#F0EADB] border-b border-[#F0EADB] bg-[#F0EADB]">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
                <div className="flex justify-between items-end gap-6 flex-wrap mb-9">
                    <div>
                        <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
                            Popular bulk categories
                        </span>
                        <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-3 mb-[10px] text-[#0E241C]">
                            Highest bulk demand <span className="text-[#C9A853] italic">from Iraqi businesses.</span>
                        </h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {categories.map((c) => (
                        <div
                            key={c.title}
                            className="bg-white border border-[#F0EADB] rounded-[16px] p-7 transition-all duration-200 hover:border-[#17362A] hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)]"
                        >
                            <div className="w-14 h-14 rounded-[14px] bg-[#F0EADB] text-[#234A3A] flex items-center justify-center text-[1.6rem] shrink-0">
                                {c.icon}
                            </div>
                            <span className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold px-[10px] py-[4px] rounded-[6px] bg-[#F0EADB] text-[#234A3A] before:content-['●'] before:text-[0.5rem] mt-4 block w-fit">
                                {c.savings}
                            </span>
                            <h3 className="text-[1.15rem] font-bold mt-2">{c.title}</h3>
                            <p className="text-[0.88rem] text-[#1C2420] leading-[1.55] mt-0">{c.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
