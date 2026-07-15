const tiers = [
    { range: "10 – 50 units", savings: "5% off", audience: "Small businesses getting started with wholesale" },
    { range: "51 – 200 units", savings: "15% off", audience: "Retailers and growing operations" },
    { range: "201 – 500 units", savings: "25% off", audience: "Distributors and importers" },
    { range: "500+ units", savings: "Custom pricing", audience: "Dedicated account manager and negotiated rates", bestValue: true },
]

export default function BulkSavingsTable() {
    return (
        <section className="py-12 sm:py-16">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
                <div className="flex justify-between items-end gap-6 flex-wrap mb-9">
                    <div>
                        <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
                            Savings tiers
                        </span>
                        <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-3 mb-[10px] text-[#0E241C]">
                            Applied automatically <span className="text-[#C9A853] italic">at checkout.</span>
                        </h2>
                    </div>
                </div>
                <div className="flex flex-col gap-3 sm:hidden">
                    {tiers.map((t) => (
                        <div key={t.range} className="bg-white border border-[#F0EADB] rounded-[10px] p-4">
                            <div className="flex items-center justify-between gap-3">
                                <span className="font-bold text-[0.95rem]">
                                    {t.range}
                                    {t.bestValue && (
                                        <span className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold px-[10px] py-[4px] rounded-[6px] bg-[#F0EADB] text-[#234A3A] before:content-['●'] before:text-[0.5rem] ml-[6px]">
                                            Best Value
                                        </span>
                                    )}
                                </span>
                                <span className="text-[#234A3A] font-bold text-[0.9rem] whitespace-nowrap tabular-nums">{t.savings}</span>
                            </div>
                            <p className="text-[0.85rem] text-[#1C2420] leading-[1.55] mt-2">{t.audience}</p>
                        </div>
                    ))}
                </div>
                <div className="hidden sm:block overflow-x-auto">
                    <table className="w-full border-collapse text-[0.92rem]">
                        <thead>
                            <tr>
                                <th className="text-left p-3 px-4 border-b border-[#F0EADB] text-[0.75rem] uppercase tracking-[0.05em] text-[#1C2420] font-semibold">Order Quantity</th>
                                <th className="text-left p-3 px-4 border-b border-[#F0EADB] text-[0.75rem] uppercase tracking-[0.05em] text-[#1C2420] font-semibold">Savings</th>
                                <th className="text-left p-3 px-4 border-b border-[#F0EADB] text-[0.75rem] uppercase tracking-[0.05em] text-[#1C2420] font-semibold">Who it&apos;s for</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tiers.map((t) => (
                                <tr key={t.range}>
                                    <td className="p-3 px-4 border-b border-[#F0EADB] align-top">
                                        {t.range}
                                        {t.bestValue && (
                                            <span className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold px-[10px] py-[4px] rounded-[6px] bg-[#F0EADB] text-[#234A3A] before:content-['●'] before:text-[0.5rem] ml-[6px]">
                                                Best Value
                                            </span>
                                        )}
                                    </td>
                                    <td className="p-3 px-4 border-b border-[#F0EADB] align-top font-bold text-[#234A3A] whitespace-nowrap tabular-nums">{t.savings}</td>
                                    <td className="p-3 px-4 border-b border-[#F0EADB] align-top last:border-none">{t.audience}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
