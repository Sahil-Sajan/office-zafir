const steps = [
    { title: "Supplier search", desc: "Manufacturers identified and vetted for your exact specifications — factory visits and references, not just marketplace listings." },
    { title: "Sample ordering", desc: "Samples ordered and reviewed before you commit to a production run, with an honest quality assessment." },
    { title: "Pre-shipment inspection", desc: "A full factory inspection before goods leave China — catching defects before they become your problem." },
    { title: "End-to-end shipping", desc: "Freight booking, customs clearance, and door-to-door delivery — factory gate to your Iraqi warehouse, one place." },
]

export default function ChinaProcess() {
    return (
        <section className="py-12 sm:py-16 border-t border-[#F0EADB] border-b border-[#F0EADB] bg-[#F0EADB]">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
                <div className="flex justify-between items-end gap-6 flex-wrap mb-9">
                    <div>
                        <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
                            Our China sourcing service
                        </span>
                        <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-3 mb-[10px] text-[#0E241C]">
                            We manage the steps <span className="text-[#C9A853] italic">you can&apos;t do from Baghdad.</span>
                        </h2>
                    </div>
                </div>
                <div className="relative pl-9">
                    <div className="absolute left-[11px] top-[6px] bottom-[6px] w-[2px] bg-[#F0EADB]" />
                    {steps.map((s) => (
                        <div key={s.title} className="relative pb-8 last:pb-0">
                            <div className="absolute left-[-36px] top-[2px] w-6 h-6 rounded-full border-2 border-[#17362A] bg-[#F0EADB]" />
                            <h3 className="text-[1rem] font-bold mb-1">{s.title}</h3>
                            <p className="text-[0.9rem] text-[#1C2420]">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
