const rows = [
    { arch: "The Visionary", align: "94%", desc: "Conceptual pieces, limited-edition collaborations, and works from emerging ateliers that challenge convention." },
    { arch: "The High-Performer", align: "88%", desc: "Engineering-first hardware, precision tools, and performance-grade materials built for those who demand peak function." },
    { arch: "The Essentialist", align: "91%", desc: "Edited capsules of timeless design — fewer pieces, higher quality, nothing superfluous in the collection." },
    { arch: "The Futurist", align: "85%", desc: "Pioneering technology, smart systems, and next-generation materials at the intersection of design and innovation." },
    { arch: "The Trendsetter", align: "92%", desc: "What's emerging before it peaks — early signals in fashion, culture, and technology from our global intelligence network." },
    { arch: "The Sanctuary-Seeker", align: "87%", desc: "Pieces that create space — calming materials, intentional design, and objects that bring stillness to demanding lives." },
]

export default function ArchetypeTable() {
    return (
        <section className="py-14 sm:py-20 bg-[#F0EADB] border-t border-[#F0EADB] border-b border-[#F0EADB]">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
                <div className="mb-9 flex flex-col items-center text-center">
                    <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
                        Private Archive Access
                    </span>
                    <h2 className="text-[clamp(1.8rem,1.5rem+1.2vw,2.6rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-3 max-w-[580px] text-[#0E241C]">
                        Alignment by <span className="text-[#C9A853] italic">Aesthetic</span>
                    </h2>
                    <p className="text-[1.1rem] text-[#1C2420] leading-[1.65] max-w-[640px] mt-3">
                        We synchronize our collections with your specific professional and personal values. Your aesthetic fingerprint shapes every recommendation — every piece, every signal, every introduction.
                    </p>
                </div>
                <div className="flex flex-col gap-3 sm:hidden">
                    {rows.map((r) => (
                        <div key={r.arch} className="bg-white border border-[#F0EADB] rounded-[10px] p-4">
                            <div className="flex items-center justify-between gap-3">
                                <span className="font-bold text-[0.95rem]">{r.arch}</span>
                                <span className="text-[#234A3A] font-bold text-[0.9rem]">{r.align}</span>
                            </div>
                            <p className="text-[0.85rem] text-[#1C2420] leading-[1.55] mt-2">{r.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="hidden sm:block overflow-x-auto">
                    <table className="w-full text-left" style={{ borderCollapse: "collapse" }}>
                        <thead>
                            <tr>
                                <th className="text-[0.75rem] uppercase tracking-[0.05em] text-[#1C2420] font-semibold p-3 border-b border-[#F0EADB]" style={{ width: "180px" }}>Archetype</th>
                                <th className="text-[0.75rem] uppercase tracking-[0.05em] text-[#1C2420] font-semibold p-3 border-b border-[#F0EADB] text-center" style={{ width: "160px" }}>Alignment</th>
                                <th className="text-[0.75rem] uppercase tracking-[0.05em] text-[#1C2420] font-semibold p-3 border-b border-[#F0EADB]">What surfaces</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((r) => (
                                <tr key={r.arch} className="hover:bg-[#F0EADB] transition-colors duration-150">
                                    <td className="p-3 border-b border-[#F0EADB] font-bold text-[0.95rem]">{r.arch}</td>
                                    <td className="p-3 border-b border-[#F0EADB] text-[#234A3A] font-bold text-center">{r.align}</td>
                                    <td className="p-3 border-b border-[#F0EADB] text-[0.9rem] text-[#1C2420]">{r.desc}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
