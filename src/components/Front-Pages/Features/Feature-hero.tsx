import Link from "next/link"
import Image from "next/image"
import { feature, featurehero } from "@/utils/images"


export default function FeaturesHero() {
    return (
        <header className="px-4 sm:px-7 py-12 sm:py-[76px] pb-10 sm:pb-14 border-b border-[#F0EADB]">
            <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
                <div>
                    <span className="block text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853] mb-[14px]">
                        A New Standard in Digital Commerce
                    </span>
                    <h1 className="max-w-[760px] mb-[18px] text-[clamp(2.1rem,1.6rem+2vw,3.4rem)] font-bold tracking-[-0.02em] leading-[1.1] text-[#0E241C]">
                        The Future of <span className="text-[#C9A853] italic">Global Marketplaces</span>
                    </h1>
                    <p className="text-[1.1rem] text-[#1C2420] max-w-[640px] leading-[1.65]">
                        Buy, sell, and scale with confidence through a unified marketplace built for premium brands,
                        trusted sellers, and worldwide customers.
                    </p>
                    <div className="flex gap-3 flex-wrap mt-6">
                        <Link
                            href="/become-a-seller"
                            className="inline-flex items-center justify-center gap-2 px-[18px] py-[9px] rounded-[6px] text-[0.92rem] font-semibold bg-[#17362A] text-white no-underline hover:bg-[#234A3A] hover:-translate-y-[1px] hover:shadow-[0_8px_20px_rgba(23,54,42,0.28)] transition-all duration-150"
                        >
                            Start Selling Today
                        </Link>
                        <Link
                            href="/our-mission-vision"
                            className="inline-flex items-center justify-center gap-2 px-[18px] py-[9px] rounded-[6px] text-[0.92rem] font-semibold bg-transparent text-[#0E241C] border border-[#F0EADB] no-underline hover:border-[#17362A] hover:text-[#234A3A] hover:-translate-y-[1px] transition-all duration-150"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>

                <div className="hidden lg:flex items-start justify-center mt-2 perspective-[1400px]">
                    <Image
                        src={featurehero}
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
