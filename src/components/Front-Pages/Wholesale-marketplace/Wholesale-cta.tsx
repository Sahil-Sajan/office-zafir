import Link from "next/link"

export default function WholesaleCTA() {
    return (
        <section className="py-12 sm:py-16 border-t border-[#F0EADB] border-b border-[#F0EADB] bg-[#F0EADB]">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
                <div className="bg-[#0E241C] rounded-[16px] p-6 sm:p-[52px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 flex-wrap text-[#FAF6EA]">
                    <div>
                        <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] text-white max-w-[480px]">
                            Ready to start buying wholesale?
                        </h2>
                        <p className="text-[#C9A853] mt-[10px] max-w-[440px] text-[1rem]">
                            Join the Iraqi businesses already saving on bulk purchases through Zafir360.
                        </p>
                    </div>
                    <div className="flex gap-3 flex-wrap w-full lg:w-auto">
                        <Link
                            href="/categories"
                            className="inline-flex items-center justify-center gap-2 px-[18px] py-[10px] rounded-[8px] text-[0.9rem] font-semibold bg-white text-[#0E241C] no-underline hover:bg-[#F0EADB] hover:-translate-y-px transition-all duration-200"
                        >
                            Browse Wholesale Products
                        </Link>
                        <Link
                            href="/request-for-quote"
                            className="inline-flex items-center justify-center gap-2 px-[18px] py-[10px] rounded-[8px] text-[0.9rem] font-semibold bg-transparent text-white border border-[rgba(255,255,255,0.25)] no-underline hover:border-[#17362A] hover:text-[#17362A] hover:-translate-y-px transition-all duration-200"
                        >
                            Submit an RFQ
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
