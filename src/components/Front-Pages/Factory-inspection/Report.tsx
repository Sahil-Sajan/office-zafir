import { DocumentText } from "@/components/common/NavIcons";

const items = [
    "Executive summary with overall score",
    "Full photographic documentation",
    "Production capacity data and projections",
    "Quality control pass/fail breakdown",
    "Worker conditions assessment rating",
    "Equipment inventory and age report",
    "Safety certification status",
    "Inspector's recommendation",
]

export default function InspectionReport() {
    return (
        <section className="py-12 sm:py-16 border-t border-[#F0EADB] border-b border-[#F0EADB] bg-[#F0EADB]">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
                <div className="flex flex-col items-center text-center gap-3 mb-9">
                    <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
                        The inspection report
                    </span>
                    <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] text-[#0E241C]">
                        A full PDF, <span className="text-[#C9A853] italic">before you commit to an order.</span>
                    </h2>
                    <p className="text-[1.1rem] text-[#1C2420] max-w-[640px] leading-[1.65]">
                        Photography, scoring, capacity data, and a clear inspector&apos;s recommendation — issued within 5 business days and kept in your buyer account for 12 months.
                    </p>
                </div>
                <div className="bg-white border border-[#F0EADB] rounded-[10px] p-6 max-w-[640px] mx-auto">
                    <div className="flex justify-between items-center gap-3 flex-wrap">
                        <div className="flex items-center gap-3">
                            <span className="text-[1.8rem] flex items-center [&_svg]:size-7">
                                <DocumentText />
                            </span>
                            <div>
                                <div className="font-bold">Sample Inspection Report</div>
                                <div className="text-[0.82rem] text-[#1C2420]">Issued 28 June 2026 · Illustrative only</div>
                            </div>
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold px-[10px] py-[4px] rounded-[6px] bg-[#F0EADB] text-[#17362A] before:content-['✓'] before:text-[0.75rem]">
                            PDF
                        </span>
                    </div>
                    <div className="flex flex-col gap-[2px] mt-6">
                        {items.map((item) => (
                            <div key={item} className="flex items-start gap-3 py-[14px] px-1 border-b border-[#F0EADB] last:border-none text-[0.92rem]">
                                <span className="w-5 h-5 rounded-full bg-[#F0EADB] text-[#17362A] flex items-center justify-center text-[0.7rem] font-extrabold shrink-0 mt-[2px]">✓</span>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
