const reasons = [
    { title: "Quality manufacturing", desc: "Turkish factories meet EU standards while keeping costs competitive — built for buyers who cannot afford returns." },
    { title: "Competitive prices", desc: "Proximity eliminates the long ocean-freight markups that come with Far East sourcing." },
    { title: "Geographic proximity", desc: "Istanbul to Baghdad is a single-day flight and a manageable overland run — faster restocks, shorter cash cycles." },
    { title: "Wide product variety", desc: "From marble and ceramics to ready-to-wear fashion, Turkey&apos;s industrial base covers more categories than most buyers expect." },
    { title: "Strong trade relations", desc: "Decades of Iraq–Turkey commerce means established customs corridors and trusted brokers." },
    { title: "Zafir360-verified only", desc: "Every Turkish supplier on the platform is personally visited before listing — not self-certified." },
]

export default function TurkeyWhySource() {
    return (
        <section className="py-12 sm:py-16">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
                <div className="flex justify-between items-end gap-6 flex-wrap mb-9">
                    <div>
                        <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
                            Why source from Turkey?
                        </span>
                        <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-3 mb-[10px] text-[#0E241C]">
                            A trade corridor <span className="text-[#C9A853] italic">that&apos;s worked for two decades.</span>
                        </h2>
                    </div>
                </div>
                <div className="gap-px border border-[#F0EADB] rounded-[10px] overflow-hidden bg-[#F0EADB] grid grid-cols-1 md:grid-cols-3">
                    {reasons.map((r) => (
                        <div key={r.title} className="bg-white p-6">
                            <h3 className="text-[1rem] font-bold mb-2">{r.title}</h3>
                            <p className="text-[0.9rem] text-[#1C2420] leading-[1.6]">{r.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
