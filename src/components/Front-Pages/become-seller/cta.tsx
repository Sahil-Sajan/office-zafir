import Link from "next/link"

export default function SellersCTA() {
    return (
        <section className="py-16">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
                <div className="bg-[#0E241C] rounded-[16px] p-6 sm:p-[52px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 flex-wrap text-[#FAF6EA]">
                    <div>
                        <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] text-white max-w-[480px]">
                            The margin is yours. The commission is transparent.
                        </h2>
                        <p className="text-[#C9A853] mt-[10px] max-w-[440px] text-[1rem]">
                            Every seller sees the exact commission on every transaction before it&apos;s charged — no hidden deductions at payout.
                        </p>
                    </div>
                    <Link
                        href="#onboarding"
                        className="inline-flex items-center justify-center gap-2 px-[18px] py-[10px] rounded-[8px] text-[0.9rem] font-semibold bg-white text-[#0E241C] no-underline hover:bg-[#F0EADB] hover:-translate-y-px transition-all duration-200 w-full lg:w-auto"
                    >
                        Start the Onboarding Wizard
                    </Link>
                </div>
            </div>
        </section>
    )
}
