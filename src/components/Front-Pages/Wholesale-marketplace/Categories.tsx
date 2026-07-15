import { HardHat, Laptop, Shirt, Jar, Sofa, Wrench } from "@/components/common/NavIcons"

const categories = [
    { icon: <HardHat />, title: "Construction Materials", desc: "Cement, steel, tiles, piping, and structural supplies in bulk." },
    { icon: <Laptop />, title: "Electronics & Tech", desc: "Devices, accessories, components, and networking equipment." },
    { icon: <Shirt />, title: "Textiles & Fashion", desc: "Fabrics, garments, uniforms, and seasonal apparel lines." },
    { icon: <Jar />, title: "Food & Beverage", desc: "Packaged goods, dry ingredients, beverages, and FMCG." },
    { icon: <Sofa />, title: "Home & Furniture", desc: "Household goods, furnishings, décor, and storage solutions." },
    { icon: <Wrench />, title: "Auto Parts", desc: "OEM and aftermarket parts, accessories, and workshop supplies." },
]

export default function WholesaleCategories() {
    return (
        <section className="py-12 sm:py-16">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
                <div className="flex justify-between items-end gap-6 flex-wrap mb-9">
                    <div>
                        <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
                            Browse by category
                        </span>
                        <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-3 mb-[10px] text-[#0E241C]">
                            Six high-demand <span className="text-[#C9A853] italic">wholesale verticals.</span>
                        </h2>
                    </div>
                    <p className="text-[1.1rem] text-[#1C2420] max-w-[640px] leading-[1.65]">
                        Every supplier is Zafir360-verified and rated by buyers after every order.
                    </p>
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
                            <h3 className="text-[1.15rem] font-bold mt-4">{c.title}</h3>
                            <p className="text-[0.88rem] text-[#1C2420] leading-[1.55] mt-0">{c.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
