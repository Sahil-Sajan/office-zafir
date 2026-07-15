const features = [
    {
        title: "Command Centre",
        desc: "Orders to process with urgency flags, low-inventory alerts, revenue today/week/month against the prior period, unread messages, and review activity — in one Arabic-first view.",
    },
    {
        title: "Real-Time Inventory",
        desc: "Live stock per SKU and variant. Low-stock alerts fire across SMS, push, and email; a listing auto-hides at zero rather than accepting an order it can't fulfil.",
    },
    {
        title: "Payouts & Reports",
        desc: "Every 7 days, net earnings post automatically: gross revenue minus commission, minus JayakHub delivery fees, minus refunds.",
    },
    {
        title: "Performance Scorecard",
        desc: "A public 1–100 score built from order acceptance rate, on-time dispatch, response time, review average, return rate, and cancellation rate.",
    },
]

export default function DashboardFeatures() {
    return (
        <section className="py-16">
            <div className="max-w-[1180px] mx-auto px-7">
                <div className="flex justify-between items-end gap-6 flex-wrap mb-9">
                    <div>
                        <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
                            Running the store
                        </span>
                        <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-3 mb-[10px] text-[#0E241C]">
                            What the seller dashboard <span className="text-[#C9A853] italic">actually shows.</span>
                        </h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-px border border-[#F0EADB] rounded-[10px] overflow-hidden bg-[#F0EADB]">
                    {features.map((f) => (
                        <div key={f.title} className="bg-white p-[26px] relative transition-all duration-250 hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)]">
                            <h3 className="text-[1.05rem] font-bold mb-2">{f.title}</h3>
                            <p className="text-[0.92rem] text-[#1C2420] leading-[1.6]">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
