const partners = [
    { name: "TÜV Rheinland" },
    { name: "SGS" },
    { name: "Bureau Veritas" },
]

export default function InspectionPartners() {
    return (
        <section className="py-12 sm:py-16">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
                <div className="flex justify-between items-end gap-6 flex-wrap mb-9">
                    <div>
                        <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
                            Inspection partners
                        </span>
                        <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-3 mb-[10px] text-[#0E241C]">
                            Globally accredited, <span className="text-[#C9A853] italic">not self-certified.</span>
                        </h2>
                    </div>
                    <p className="text-[1.1rem] text-[#1C2420] max-w-[640px] leading-[1.65]">
                        Pre-shipment inspection booked from 3+ accredited bodies directly on the platform.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-px border border-[#F0EADB] rounded-[10px] overflow-hidden bg-[#F0EADB]">
                    {partners.map((p) => (
                        <div key={p.name} className="bg-white p-[26px] text-center relative transition-all duration-250 hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)]">
                            <h3 className="text-[1.05rem] font-bold mb-2">{p.name}</h3>
                            <span className="inline-block mt-[14px] text-[0.72rem] font-semibold tracking-[0.04em] uppercase text-[#C9A853] bg-[#F0EADB] px-2 py-[3px] rounded-[4px]">
                                Accredited Partner
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
