const sizes = [
    {
        title: "20ft Standard",
        cbm: "25",
        payload: "21,700kg",
        note: "The workhorse — right for most mixed-goods shipments.",
    },
    {
        title: "40ft Standard",
        cbm: "59",
        payload: "26,480kg",
        note: "Double the floor space — optimal for bulky, lighter goods like furniture and textiles.",
    },
    {
        title: "40ft High Cube",
        cbm: "76",
        payload: "26,480kg",
        note: "Extra 30cm of height — preferred for tall pallets, machinery, and retail fixtures.",
    },
]

export default function ContainerSizes() {
    return (
        <section className="py-12 sm:py-16 border-t border-[#F0EADB] border-b border-[#F0EADB] bg-[#F0EADB]">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
                <div className="flex justify-between items-end gap-6 flex-wrap mb-9">
                    <div>
                        <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
                            Container sizes
                        </span>
                        <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-3 mb-[10px] text-[#0E241C]">
                            Standard ISO specs, <span className="text-[#C9A853] italic">used at every port.</span>
                        </h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {sizes.map((s) => (
                        <div
                            key={s.title}
                            className="bg-white border border-[#F0EADB] rounded-[16px] p-5 sm:p-7 transition-all duration-200 hover:border-[#17362A] hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)]"
                        >
                            <h3 className="text-[1.05rem] font-bold">{s.title}</h3>
                            <div className="grid grid-cols-2 gap-px border border-[#F0EADB] rounded-[8px] overflow-hidden bg-[#F0EADB] mt-4">
                                <div className="bg-white p-2.5 sm:p-3.5">
                                    <div className="text-[1.1rem] sm:text-[1.3rem] font-bold text-[#0E241C]">{s.cbm}</div>
                                    <div className="text-[0.78rem] sm:text-[0.85rem] text-[#1C2420] mt-1.5">CBM volume</div>
                                </div>
                                <div className="bg-white p-2.5 sm:p-3.5">
                                    <div className="text-[1.1rem] sm:text-[1.3rem] font-bold text-[#0E241C]">{s.payload}</div>
                                    <div className="text-[0.78rem] sm:text-[0.85rem] text-[#1C2420] mt-1.5">Max payload</div>
                                </div>
                            </div>
                            <p className="text-[0.88rem] text-[#1C2420] leading-[1.55] mt-4">{s.note}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
