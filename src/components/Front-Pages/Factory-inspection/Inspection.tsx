const steps = [
    { title: "1 · Production Capacity", desc: "Actual output volumes, machinery throughput, and realistic fulfilment capability — not the number on the pitch deck." },
    { title: "2 · Quality Control Systems", desc: "Documented QC processes, rejection rates, and inline inspection protocols reviewed and tested." },
    { title: "3 · Worker Conditions", desc: "Factory floors assessed against fair labour standards, safety provisions, and working conditions." },
    { title: "4 · Equipment & Machinery", desc: "Production equipment logged, age-assessed, and checked against the supplier's stated capabilities." },
    { title: "5 · Safety Certifications", desc: "Fire, electrical, and occupational safety certifications checked and validated." },
    { title: "6 · Sample Products", desc: "Physical samples pulled from the production line and tested against quality and spec benchmarks." },
]

export default function InspectionScope() {
    return (
        <section className="py-12 sm:py-16">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
                <div className="flex justify-between items-end gap-6 flex-wrap mb-9">
                    <div>
                        <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
                            What we inspect
                        </span>
                        <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-3 mb-[10px] text-[#0E241C]">
                            Six areas. <span className="text-[#C9A853] italic">Nothing taken on the supplier&apos;s word.</span>
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
