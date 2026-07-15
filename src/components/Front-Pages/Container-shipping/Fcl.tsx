export default function FclVsLcl() {
    return (
        <section className="py-12 sm:py-16">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
                <div className="flex justify-between items-end gap-6 flex-wrap mb-9">
                    <div>
                        <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
                            FCL vs LCL — which do you need?
                        </span>
                        <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-3 mb-[10px] text-[#0E241C]">
                            The choice affects cost, transit time, <span className="text-[#C9A853] italic">and cargo risk.</span>
                        </h2>
                    </div>
                </div>
                <div className="gap-px border border-[#F0EADB] rounded-[10px] overflow-hidden bg-[#F0EADB] grid grid-cols-1 md:grid-cols-2">
                    <div className="bg-white p-6">
                        <span className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold px-[10px] py-[4px] rounded-[6px] bg-[#F0EADB] text-[#234A3A] before:content-['●'] before:text-[0.5rem]">
                            Best for larger, regular orders
                        </span>
                        <h3 className="text-[1rem] font-bold mt-4 mb-2">FCL — Full Container Load</h3>
                        <p className="text-[0.9rem] text-[#1C2420] leading-[1.6]">
                            You rent the entire container. Your goods travel alone from origin to destination — no co-mingling, no shared risk, faster customs release. The better choice once your order fills roughly 12+ CBM.
                        </p>
                    </div>
                    <div className="bg-white p-6">
                        <span className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold px-[10px] py-[4px] rounded-[6px] bg-[#F0EADB] text-[#17362A] before:content-['✓'] before:text-[0.75rem]">
                            Best for smaller or first orders
                        </span>
                        <h3 className="text-[1rem] font-bold mt-4 mb-2">LCL — Less than Container Load</h3>
                        <p className="text-[0.9rem] text-[#1C2420] leading-[1.6]">
                            Your cargo shares space with other importers&apos; shipments — you pay only for what you use. Ideal for trial imports or before a full container is justified.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
