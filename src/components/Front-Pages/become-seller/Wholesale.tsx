const features = [
    {
        title: "No re-listing",
        desc: "Title, images, video, and spec tables copy from the wholesale listing to the retail one.",
    },
    {
        title: "Margin visibility",
        desc: "The commission calculator shows gross revenue, platform commission, delivery fee, and net earnings before a price is set.",
    },
    {
        title: "Linked inventory",
        desc: "Stock is shared with the source wholesale record — a sale in one tier updates availability in the other.",
    },
]

export default function WholesaleImport() {
    return (
        <section className="py-16 border-t border-[#F0EADB] border-b border-[#F0EADB] bg-[#F0EADB]">
            <div className="max-w-[1180px] mx-auto px-7">
                <div className="flex justify-between items-end gap-6 flex-wrap mb-9">
                    <div>
                        <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
                            The killer feature
                        </span>
                        <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-3 mb-[10px] text-[#0E241C]">
                            One-click import <span className="text-[#C9A853] italic">from Zafir360 wholesale.</span>
                        </h2>
                    </div>
                    <p className="text-[1.1rem] text-[#1C2420] max-w-[640px] leading-[1.65]">
                        Every product a seller has purchased wholesale can be imported into their storefront directly — photos, description, and specifications carry over automatically, so nothing is re-typed.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px border border-[#F0EADB] rounded-[10px] overflow-hidden bg-[#F0EADB]">
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
