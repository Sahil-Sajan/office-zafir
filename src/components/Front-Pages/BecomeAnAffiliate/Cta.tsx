import Link from "next/link"

export default function AffiliateCTA() {
    return (
        <section className="py-16 ">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
                <div className="bg-[#0E241C] rounded-[16px] p-6 sm:p-[52px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 flex-wrap text-[#FAF6EA]">
                    <div>
                        <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] text-white max-w-[480px]">
                            Ready to earn from your audience?
                        </h2>
                        <p className="text-[#C9A853] mt-[10px] max-w-[440px] text-[1rem]">
                            No fees to join — you earn a commission only when someone you referred buys. Free to Apply · Creative Kit Included · Tracked Links.
                        </p>
                    </div>
                    <div className="flex gap-3 flex-wrap w-full lg:w-auto">
                        <Link
                            href="/become-an-affiliate"
                            className="inline-flex items-center justify-center gap-2 px-[18px] py-[10px] rounded-[8px] text-[0.9rem] font-semibold bg-white text-[#0E241C] no-underline hover:bg-[#F0EADB] hover:-translate-y-px transition-all duration-200"
                        >
                            Apply to Become an Affiliate
                        </Link>
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center justify-center gap-2 px-[18px] py-[10px] rounded-[8px] text-[0.9rem] font-semibold bg-transparent text-white border border-[rgba(255,255,255,0.25)] no-underline hover:border-[#17362A] hover:text-[#17362A] hover:-translate-y-px transition-all duration-200"
                        >
                            Contact Support
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
