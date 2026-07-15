import Link from "next/link"

export default function ChinaCTA() {
    return (
        <section className="py-12 sm:py-16">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
                <div className="bg-[#0E241C] rounded-[16px] p-6 sm:p-[52px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 flex-wrap text-[#FAF6EA]">
                    <div>
                        <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] text-white max-w-[480px]">
                            Ready to import from China?
                        </h2>
                        <p className="text-[#C9A853] mt-[10px] max-w-[440px] text-[1rem]">
                            Submit a sourcing request and our team will identify the right manufacturers for your product and budget.
                        </p>
                    </div>
                    <Link
                        href="/request-for-quote"
                        className="inline-flex items-center justify-center gap-2 px-[18px] py-[10px] rounded-[8px] text-[0.9rem] font-semibold bg-white text-[#0E241C] no-underline hover:bg-[#F0EADB] hover:-translate-y-px transition-all duration-200 w-full lg:w-auto"
                    >
                        Source from China
                    </Link>
                </div>
            </div>
        </section>
    )
}
