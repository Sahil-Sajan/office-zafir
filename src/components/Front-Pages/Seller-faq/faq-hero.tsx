import Link from "next/link"

export default function SellerFAQHero() {
    return (
        <header className="px-4 sm:px-7 pt-12 sm:pt-[76px] pb-10 sm:pb-[56px] border-b border-[#F0EADB]">
            <div className="max-w-[1180px] mx-auto flex flex-col items-center text-center">
                <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853] mb-[14px] block">
                    Seller FAQ
                </span>
                <h1 className="max-w-[760px] mb-[18px] text-[clamp(2.1rem,1.6rem+2vw,3.4rem)] font-bold tracking-[-0.02em] leading-[1.1] text-[#0E241C]">
                    What most sellers ask <span className="text-[#C9A853] italic">before opening a store.</span>
                </h1>
                <p className="text-[1.1rem] text-[#1C2420] max-w-[640px] leading-[1.65]">
                    If it&apos;s not here, <Link href="/contact-us" className="text-inherit underline">contact us</Link> directly — someone will answer within one business day.
                </p>
            </div>
        </header>
    )
}
