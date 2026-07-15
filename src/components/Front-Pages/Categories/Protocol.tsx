const cards = [
    {
        idx: "Analyze",
        title: "What the world is watching.",
        desc: "Real-time acquisition signals across 47 countries. Our intelligence layer tracks cross-border flow of luxury goods, rare materials, and precision hardware — updated every 60 minutes.",
    },
    {
        idx: "70% Alignment",
        title: "Private Archive Access",
        desc: "We synchronize our collections with your professional and personal values. Your aesthetic fingerprint shapes every recommendation — pieces outside the public catalogue surface automatically.",
    },
    {
        idx: "Concierge",
        title: "Seeking a Rare Asset?",
        desc: "Our concierge team identifies, authenticates, and sources pieces the public market never sees. Submit a brief and we locate what matches your brief — with discretion, globally.",
    },
]

export default function ProtocolFeatures() {
    return (
        <section className="py-8 sm:py-11">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-[1px] border border-[#F0EADB] rounded-[10px] overflow-hidden bg-[#F0EADB]">
                    {cards.map((c) => (
                        <div key={c.idx} className="bg-white p-[26px] hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)] transition-all duration-300 relative z-[1] hover:z-[2]">
                            <span className="text-[0.78rem] font-bold text-[#234A3A] tabular-nums">{c.idx}</span>
                            <h3 className="text-[1.05rem] font-bold mb-2 mt-1">{c.title}</h3>
                            <p className="text-[0.92rem] text-[#1C2420] leading-[1.6]">{c.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
