import Image from "next/image"
import { categories, chero } from "@/utils/images"
import { Search } from "@/components/common/NavIcons"

export default function CategoriesHero() {
    return (
        <header className="px-4 sm:px-7 py-12 sm:py-[76px] pb-10 sm:pb-14 border-b border-[#F0EADB]">
            <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
                <div>
                    <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853] block mb-[14px]">
                        Discovery Protocol Active
                    </span>
                    <h1 className="text-[clamp(2rem,1.6rem+2vw,3.2rem)] font-extrabold tracking-[-0.03em] leading-[1.1] max-w-[760px] mb-[18px] text-[#0E241C]">
                        Acquire Your Next <span className="text-[#C9A853] italic">Masterpiece</span>
                    </h1>
                    <p className="text-[1.1rem] text-[#1C2420] max-w-[640px] leading-[1.65]">
                        The protocol is live — curating access to exceptional pieces across apparel, hardware, and private archives. Every item passes human review before it reaches you.
                    </p>
                    <div className="flex items-center gap-2 sm:gap-3 mt-6 bg-white border border-[#F0EADB] rounded-[999px] p-[4px] pl-[16px] focus-within:border-[#17362A] focus-within:shadow-[0_0_0_4px_#F0EADB] transition-all duration-200">
                        <span><Search /></span>
                        <input type="search" placeholder="Search by aesthetic, technical spec, or heritage…" className="flex-1 min-w-0 bg-transparent border-none py-[10px] text-[0.85rem] sm:text-[0.9rem] outline-none text-[#0E241C] placeholder-[#5B6961]" />
                        <span className="hidden sm:inline text-[0.78rem] font-semibold text-[#1C2420] bg-[#F0EADB] px-3 py-1.5 rounded-[999px] whitespace-nowrap">All Collections ▾</span>
                    </div>
                    <div className="flex gap-2 flex-wrap mt-[14px]">
                        {["All", "Apparel & Luxury", "Elite Hardware", "Private Archive", "Market Momentum"].map((chip, i) => (
                            <span key={chip} className={`px-[14px] py-[6px] rounded-[999px] text-[0.82rem] font-medium cursor-pointer transition-all duration-200 ${i === 0 ? "bg-[#0E241C] text-white" : "bg-white text-[#1C2420] border border-[#F0EADB] hover:border-[#17362A] hover:text-[#234A3A] hover:bg-[#F0EADB]"
                                }`}>{chip}</span>
                        ))}
                    </div>
                </div>

                <div className="hidden lg:flex items-start justify-center mt-9 perspective-[1400px]">
                    <Image
                        src={chero}
                        alt=""
                        className="w-full max-w-[560px] h-auto rounded-[18px] transition-transform duration-400 ease hover:rotate-y-[-8deg] hover:rotate-x-[4deg] hover:-translate-y-1"
                        style={{
                            transform: "rotateY(-14deg) rotateX(8deg) rotateZ(-1deg)",
                            filter: "drop-shadow(24px 20px 40px rgba(0,0,0,0.18)) drop-shadow(60px 50px 70px rgba(0,0,0,0.16))",
                        }}
                    />
                </div>
            </div>
        </header>
    )
}
