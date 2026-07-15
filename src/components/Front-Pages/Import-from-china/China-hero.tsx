import Link from "next/link"

export default function ImportChinaHero() {
    return (
        <header className="px-4 sm:px-7 pt-12 sm:pt-[76px] pb-10 sm:pb-[56px] border-b border-[#F0EADB]">
            <div className="max-w-[1180px] mx-auto flex flex-col items-center text-center">
                <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853] mb-[14px] block">
                    Import sourcing — China
                </span>
                <h1 className="max-w-[760px] mb-[18px] text-[clamp(2.1rem,1.6rem+2vw,3.4rem)] font-bold tracking-[-0.02em] leading-[1.1] text-[#0E241C]">
                    The world&apos;s factory, <span className="text-[#C9A853] italic">now reachable from Iraq.</span>
                </h1>
                <p className="text-[1.1rem] text-[#1C2420] max-w-[640px] leading-[1.65] mb-6">
                    Zafir360 gives Iraqi importers direct access to China&apos;s manufacturing base — with sourcing, inspection, and shipping handled for you end to end.
                </p>
                <Link
                    href="/request-for-quote"
                    className="inline-flex items-center justify-center gap-2 px-[18px] py-[10px] rounded-[8px] text-[0.9rem] font-semibold bg-[#17362A] text-white no-underline hover:bg-[#234A3A] hover:-translate-y-px hover:shadow-[0_8px_20px_rgba(23,54,42,0.28)] transition-all duration-200"
                >
                    Source from China
                </Link>

            </div>
        </header>
    )
}
