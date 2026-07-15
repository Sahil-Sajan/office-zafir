export default function ModerationNote() {
    return (
        <section className="py-16 border-t border-[#F0EADB] border-b border-[#F0EADB]">
            <div className="max-w-[1180px] mx-auto px-7">
                <div className="flex justify-between items-end gap-6 flex-wrap mb-9">
                    <div>
                        <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
                            Before a listing goes live
                        </span>
                        <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-3 mb-[10px] text-[#0E241C]">
                            Every product is moderated — <span className="text-[#C9A853] italic">for buyers&apos; trust and yours.</span>
                        </h2>
                    </div>
                </div>
            </div>
            <div className="bg-[#F0EADB] border-y border-[#E2C368] py-6">
                <div className="max-w-[1180px] mx-auto px-7 border-l-[3px] border-[#17362A] py-1 pl-5 text-[0.92rem] text-[#332F27]">
                    <strong>Product Moderation Queue.</strong> New consumer listings are reviewed before publishing. It adds a short delay to your first listing — the tradeoff is a marketplace where buyers trust what they click, which is what makes the storefront worth having.
                </div>
            </div>
        </section>
    )
}
