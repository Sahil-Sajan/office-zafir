const steps = [
    { title: "1 · Document Submission", desc: "Business registration, tax certificates, product catalogues, and proof of legal operation." },
    { title: "2 · Business Verification", desc: "Documents cross-checked against official Iraqi and international trade registries." },
    { title: "3 · Product Sampling", desc: "Samples reviewed against category benchmarks for quality and accuracy." },
    { title: "4 · Factory / Site Audit", desc: "Sam's personal visit — the gate that has no automated path around it." },
    { title: "5 · Final Approval & Badge", desc: "Suppliers who pass every stage receive the gold \"Verified by Sam\" badge on their storefront." },
]

export default function VerifyProcess() {
    return (
        <section className="py-12 sm:py-16">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
                <div className="flex justify-between items-end gap-6 flex-wrap mb-9">
                    <div>
                        <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
                            The 5-step verification process
                        </span>
                        <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-3 mb-[10px] text-[#0E241C]">
                            The same path, <span className="text-[#C9A853] italic">every applicant.</span>
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
