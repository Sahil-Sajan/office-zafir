const items = [
    "Valid business registration certificate",
    "Full product catalogue with specifications",
    "Minimum order capacity per category",
    "Quality certifications (ISO preferred)",
]

export default function SupplierRequirements() {
    return (
        <section id="apply" className="py-12 sm:py-16">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
                <div className="flex justify-between items-end gap-6 flex-wrap mb-9">
                    <div>
                        <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
                            Supplier requirements
                        </span>
                        <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-3 mb-[10px] text-[#0E241C]">
                            What we ask for <span className="text-[#C9A853] italic">before you list.</span>
                        </h2>
                    </div>
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
