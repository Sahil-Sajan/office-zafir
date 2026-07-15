const tiers = [
    {
        name: "Starter",
        range: "Up to $2,000 / mo in referred sales",
        rate: "8%",
        note: "Base rate for every new affiliate — applies from your very first referred order.",
    },
    {
        name: "Growth",
        range: "$2,000 – $10,000 / mo in referred sales",
        rate: "10%",
        note: "Unlocked automatically once your trailing 30-day referred volume crosses the threshold.",
    },
    {
        name: "Elite",
        range: "$10,000+ / mo in referred sales",
        rate: "12%",
        note: "Our top tier, plus priority access to new product drops and campaign briefs.",
    },
]

export default function CommissionStructure() {
    return (
        <section id="commission" className="py-16 border-t border-[#F0EADB] border-b border-[#F0EADB] bg-[#F0EADB]">
            <div className="max-w-[1180px] mx-auto px-7">
                <div className="flex justify-between items-end gap-6 flex-wrap mb-9">
                    <div>
                        <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
                            Commission structure
                        </span>
                        <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-3 mb-[10px] text-[#0E241C]">
                            The more you refer, <span className="text-[#C9A853] italic">the higher your rate.</span>
                        </h2>
                    </div>
                    <p className="text-[1.1rem] text-[#1C2420] max-w-[640px] leading-[1.65]">
                        Tiers are based on your trailing 30-day referred sales volume and update automatically — no need to renegotiate as your audience grows.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-px border border-[#F0EADB] rounded-[10px] overflow-hidden bg-[#F0EADB]">
                    {tiers.map((t) => (
                        <div key={t.name} className="bg-white p-[26px] relative transition-all duration-250 hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)]">
                            <div className="flex items-baseline justify-between mb-2">
                                <h3 className="text-[1.05rem] font-bold">{t.name}</h3>
                                <span className="text-[1.6rem] font-extrabold text-[#17362A]">{t.rate}</span>
                            </div>
                            <div className="text-[0.8rem] font-semibold text-[#C9A853] mb-2">{t.range}</div>
                            <p className="text-[0.88rem] text-[#1C2420] leading-[1.6]">{t.note}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
