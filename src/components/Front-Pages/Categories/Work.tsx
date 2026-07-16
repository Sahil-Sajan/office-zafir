const steps = [
    {
        num: "01",
        title: "Your Aesthetic Fingerprint",
        desc: "Tell us your archetype — Visionary, High-Performer, Essentialist, Futurist, Trendsetter, or Sanctuary-Seeker — and the protocol aligns every recommendation to your values.",
    },
    {
        num: "02",
        title: "Live Intelligence Feed",
        desc: "Real-time signals across 47 countries. The protocol tracks what moves, where, and at what velocity — before the consensus forms. Updated every hour.",
    },
    {
        num: "03",
        title: "Concierge Access",
        desc: "What you need isn't always in the catalogue. Submit a brief to our concierge team and we source, authenticate, and deliver pieces from our private network — with full discretion.",
    },
]

export default function HowItWorks() {
    return (
        <section className="py-14  sm:py-20 bg-[#F0EADB]/40 border-t border-[#F0EADB]">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-9">
                    <div>
                        <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
                            Discovery Protocol
                        </span>
                        <h2 className="text-[clamp(1.8rem,1.5rem+1.2vw,2.6rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-3 max-w-[580px] text-[#0E241C]">
                            How the protocol surfaces <span className="text-[#C9A853] italic">what matters to you.</span>
                        </h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-[1px] border border-[#F0EADB] rounded-[10px] overflow-hidden bg-[#F0EADB]">
                    {steps.map((s) => (
                        <div key={s.num} className="bg-white p-[26px] hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)] transition-all duration-300 relative z-[1] hover:z-[2]">
                            <span className="text-[0.78rem] font-bold text-[#234A3A] tabular-nums">{s.num}</span>
                            <h3 className="text-[1.05rem] font-bold mb-2 mt-1">{s.title}</h3>
                            <p className="text-[0.92rem] text-[#1C2420] leading-[1.6]">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
