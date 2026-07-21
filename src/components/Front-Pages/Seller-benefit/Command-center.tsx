export default function DashboardKPI() {
    return (
        <section className="py-16">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
                <div className="flex justify-between items-end gap-6 flex-wrap mb-9">
                    <div>
                        <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853] mb-[14px] block">
                            Sample dashboard — illustrative only
                        </span>
                        <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mb-[10px] text-[#0E241C]">
                            The command centre, <span className="text-[#C9A853] italic">at a glance.</span>
                        </h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px border border-[#F0EADB] rounded-[10px] overflow-hidden bg-[#F0EADB]">
                    <div className="bg-white p-5">
                        <div className="text-[0.76rem] text-[#1C2420]">Revenue this month</div>
                        <div className="text-[1.5rem] font-extrabold mt-[6px]">IQD 2,450,000</div>
                        <div className="text-[0.76rem] font-semibold mt-1 text-[#16A34A]">▲ 23%</div>
                    </div>
                    <div className="bg-white p-5">
                        <div className="text-[0.76rem] text-[#1C2420]">Orders this month</div>
                        <div className="text-[1.5rem] font-extrabold mt-[6px]">156</div>
                        <div className="text-[0.76rem] font-semibold mt-1 text-[#16A34A]">▲ 18%</div>
                    </div>
                    <div className="bg-white p-5">
                        <div className="text-[0.76rem] text-[#1C2420]">Buyer rating</div>
                        <div className="text-[1.5rem] font-extrabold mt-[6px]">4.8★</div>
                        <div className="text-[0.76rem] font-semibold mt-1 text-[#16A34A]">▲ 0.5</div>
                    </div>
                    <div className="bg-white p-5">
                        <div className="text-[0.76rem] text-[#1C2420]">Response rate</div>
                        <div className="text-[1.5rem] font-extrabold mt-[6px]">99.9%</div>
                        <div className="text-[0.76rem] font-semibold mt-1 text-[#16A34A]">Top 1% sellers</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
