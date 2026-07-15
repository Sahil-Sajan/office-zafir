import Link from "next/link"
import { Bolt, Sparkles, Shirt } from "@/components/common/NavIcons"

const categories = [
    {
        icon: <Bolt />,
        title: "Electronics & Technology",
        desc: "Explore next-generation devices that redefine convenience, connectivity, and performance. From smart gadgets to innovative home tech, find products designed to elevate daily life.",
        href: "/categories#electronics",
    },
    {
        icon: <Sparkles />,
        title: "Health & Wellness",
        desc: "Access premium health and wellness products curated for holistic living. Our selection ensures safety, effectiveness, and quality. From fitness gear to personal care essentials, everything is verified for authenticity.",
        href: "/categories#health",
    },
    {
        icon: <Shirt />,
        title: "Fashion & Lifestyle",
        desc: "Discover curated fashion collections that blend style, comfort, and sustainability. Premium brands bring the latest trends directly to your wardrobe. Every piece is carefully verified for quality and authenticity.",
        href: "/categories#fashion",
    },
]

export default function CategoryExplore() {
    return (
        <section className="py-14 sm:py-20 bg-[#F0EADB]">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
                <div className="flex flex-col sm:flex-row sm:items-end items-start justify-between gap-4 sm:gap-6 flex-wrap mb-8 sm:mb-12">
                    <div>
                        <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
                            Explore by Category
                        </span>
                        <h2 className="text-[clamp(1.8rem,1.5rem+1.2vw,2.6rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-3 text-[#0E241C]">
                            Dive into our meticulously <span className="text-[#C9A853] italic">curated collections.</span>
                        </h2>
                    </div>
                    <Link
                        href="/categories"
                        className="inline-flex items-center gap-[6px] text-[0.9rem] font-semibold text-[#234A3A] no-underline hover:text-[#17362A] transition-colors duration-150 whitespace-nowrap"
                    >
                        View All Categories <span className="text-[0.85rem]">→</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {categories.map((cat) => (
                        <Link
                            key={cat.title}
                            href={cat.href}
                            className="group block bg-white border border-[#F0EADB] rounded-[16px] p-7 no-underline hover:border-[#17362A] hover:-translate-y-[3px] hover:shadow-[0_12px_32px_rgba(14,36,28,0.08)] transition-all duration-300"
                        >
                            <div className="w-14 h-14 rounded-[14px] bg-[#F0EADB] text-[#234A3A] flex items-center justify-center text-[1.5rem] mb-5 group-hover:scale-110 transition-transform duration-300">
                                {cat.icon}
                            </div>
                            <h3 className="text-[1.15rem] font-bold text-[#0E241C] mb-3">{cat.title}</h3>
                            <p className="text-[0.88rem] text-[#1C2420] leading-[1.7]">{cat.desc}</p>
                            <span className="inline-flex items-center gap-[6px] text-[0.85rem] font-semibold text-[#234A3A] mt-4 group-hover:gap-2.5 transition-all duration-200">
                                Explore Collection <span className="text-[0.85rem]">→</span>
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
