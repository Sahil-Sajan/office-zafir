const items = [
    { title: "Customs clearance", desc: "Licensed brokers manage Iraqi import documentation, HS codes, and duty calculations." },
    { title: "Door-to-door delivery", desc: "Last-mile coordination from port to your warehouse anywhere in Iraq — Baghdad, Basra, Erbil, Mosul." },
    { title: "Cargo insurance", desc: "All-risk marine insurance available for every shipment, factory gate to Iraqi destination." },
    { title: "Live shipment tracking", desc: "Real-time visibility into container position, ETA, and customs status." },
]

export default function ShippingIncluded() {
    return (
        <section className="py-12 sm:py-16 border-t border-[#F0EADB] border-b border-[#F0EADB] bg-[#F0EADB]">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
                <div className="flex justify-between items-end gap-6 flex-wrap mb-9">
                    <div>
                        <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
                            What&apos;s included
                        </span>
                        <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-3 mb-[10px] text-[#0E241C]">
                            The full logistics stack, <span className="text-[#C9A853] italic">not just a booking.</span>
                        </h2>
                    </div>
                </div>
                <div className="gap-px border border-[#F0EADB] rounded-[10px] overflow-hidden bg-[#F0EADB] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {items.map((item) => (
                        <div key={item.title} className="bg-white p-6">
                            <h3 className="text-[1rem] font-bold mb-2">{item.title}</h3>
                            <p className="text-[0.9rem] text-[#1C2420] leading-[1.6]">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
