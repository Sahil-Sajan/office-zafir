const options = [
    {
        badge: "Most economical",
        badgeBg: "bg-[#F0EADB] text-[#17362A] before:content-['✓']",
        title: "Land · 3–5 days",
        desc: "Truck convoys via the Ibrahim Khalil border crossing. Best for full and part loads that aren&apos;t time-critical.",
    },
    {
        badge: "Fastest available",
        badgeBg: "bg-[#F0EADB] text-[#234A3A] before:content-['●'] before:text-[0.5rem]",
        title: "Air · 24–48 hours",
        desc: "Istanbul IST and SAW both connect directly to Baghdad and Erbil. Reserve for urgent or high-value goods.",
    },
    {
        badge: "For heavy cargo",
        badgeBg: "bg-[#F0EADB] text-[#17362A] before:content-['✓']",
        title: "Sea via Mersin · 6–9 days",
        desc: "Container shipments out of Mersin Port connect to Umm Qasr — right for bulk construction materials and machinery.",
    },
]

export default function TurkeyShipping() {
    return (
        <section className="py-12 sm:py-16">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
                <div className="flex justify-between items-end gap-6 flex-wrap mb-9">
                    <div>
                        <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
                            Shipping options
                        </span>
                        <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-3 mb-[10px] text-[#0E241C]">
                            Three routes, <span className="text-[#C9A853] italic">one recommendation for your cargo.</span>
                        </h2>
                    </div>
                </div>
                <div className="gap-px border border-[#F0EADB] rounded-[10px] overflow-hidden bg-[#F0EADB] grid grid-cols-1 md:grid-cols-3">
                    {options.map((o) => (
                        <div key={o.title} className="bg-white p-6">
                            <span className={`inline-flex items-center gap-1.5 text-[0.78rem] font-semibold px-[10px] py-[4px] rounded-[6px] ${o.badgeBg}`}>
                                {o.badge}
                            </span>
                            <h3 className="text-[1rem] font-bold mt-4 mb-2">{o.title}</h3>
                            <p className="text-[0.9rem] text-[#1C2420] leading-[1.6]">{o.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
