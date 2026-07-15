const items = [
    "Legal business registration documents",
    "Tax registration and compliance certificates",
    "Product quality and safety standards",
    "Production capacity and inventory capability",
    "Past customer reviews and dispute history",
    "Financial standing and trade references",
]

export default function VerifyCriteria() {
    return (
        <section className="py-12 sm:py-16 border-t border-[#F0EADB] border-b border-[#F0EADB] bg-[#F0EADB]">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
                <div className="flex justify-between items-end gap-6 flex-wrap mb-9">
                    <div>
                        <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
                            What gets checked
                        </span>
                        <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-3 mb-[10px] text-[#0E241C]">
                            Over 100 criteria, <span className="text-[#C9A853] italic">six core areas.</span>
                        </h2>
                    </div>
                    <p className="text-[1.1rem] text-[#1C2420] max-w-[640px] leading-[1.65]">
                        Every item on this list must pass before a supplier advances to the next stage.
                    </p>
                </div>
                <div className="flex flex-col gap-[2px] max-w-[640px]">
                    {items.map((item) => (
                        <div key={item} className="flex items-start gap-3 py-[14px] px-1 border-b border-[#F0EADB] last:border-none text-[0.92rem]">
                            <span className="w-5 h-5 rounded-full bg-[#F0EADB] text-[#17362A] flex items-center justify-center text-[0.7rem] font-extrabold shrink-0 mt-[2px]">✓</span>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
