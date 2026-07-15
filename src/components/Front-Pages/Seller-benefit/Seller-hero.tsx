import Link from "next/link"

export default function SellerBenefitsHero() {
    return (
        <header className="px-4 sm:px-7 pt-12 sm:pt-[76px] pb-10 sm:pb-[56px] border-b border-[#F0EADB]">
            <div className="max-w-[1180px] mx-auto flex flex-col items-center text-center">
                <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853] mb-[14px] block">
                    Join Iraq&apos;s #1 marketplace
                </span>
                <h1 className="max-w-[760px] mb-[18px] text-[clamp(2.1rem,1.6rem+2vw,3.4rem)] font-bold tracking-[-0.02em] leading-[1.1] text-[#0E241C]">
                    Empower your business <span className="text-[#C9A853] italic">in the digital heart of Iraq.</span>
                </h1>
                <p className="text-[1.1rem] text-[#1C2420] max-w-[640px] leading-[1.65]">
                    Join over 10,000 local sellers transforming how Iraq shops online — with nationwide logistics and a payout cycle you can plan around.
                </p>
                <div className="flex gap-3 flex-wrap justify-center mt-6">
                    <Link
                        href="/become-a-seller"
                        className="inline-flex items-center justify-center gap-2 px-[18px] py-[10px] rounded-[8px] text-[0.9rem] font-semibold bg-[#17362A] text-white no-underline hover:bg-[#234A3A] hover:-translate-y-px hover:shadow-[0_8px_20px_rgba(23,54,42,0.28)] transition-all duration-200"
                    >
                        Start Selling Now
                    </Link>
                    <Link
                        href="/become-a-seller#onboarding"
                        className="inline-flex items-center justify-center gap-2 px-[18px] py-[10px] rounded-[8px] text-[0.9rem] font-semibold bg-transparent text-[#0E241C] border border-[#F0EADB] no-underline hover:border-[#17362A] hover:text-[#234A3A] hover:-translate-y-px transition-all duration-200"
                    >
                        See How It Works
                    </Link>
                </div>
            </div>
        </header>
    )
}
