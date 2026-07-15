const reasons = [
    { title: "World's largest manufacturer", desc: "No country matches China's manufacturing scale, depth of specialisation, or speed of production across every category." },
    { title: "Unbeatable pricing", desc: "Factory-direct access and a mature export ecosystem mean landed costs no domestic or regional supplier can undercut." },
    { title: "Huge product variety", desc: "From raw components to finished consumer goods — if it's made anywhere, it's almost certainly also made in China." },
    { title: "Fast production turnaround", desc: "High-capacity factories and experienced export teams compress production lead times to a minimum." },
]

export default function ChinaWhySource() {
    return (
        <section className="py-12 sm:py-16">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
                <div className="flex justify-between items-end gap-6 flex-wrap mb-9">
                    <div>
                        <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
                            Why source from China?
                        </span>
                        <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-3 mb-[10px] text-[#0E241C]">
                            The default manufacturing partner, <span className="text-[#C9A853] italic">worldwide.</span>
                        </h2>
                    </div>
                </div>
                <div className="gap-px border border-[#F0EADB] rounded-[10px] overflow-hidden bg-[#F0EADB] grid grid-cols-1 md:grid-cols-2">
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
