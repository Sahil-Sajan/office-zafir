export default function BuiltForBusiness() {
    return (
        <section className="py-14 sm:py-20">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-7 text-center">
                <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
                    Built for Modern Businesses
                </span>
                <h2 className="text-[clamp(1.8rem,1.5rem+1.2vw,2.6rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-3 max-w-[640px] mx-auto mb-12 text-[#0E241C]">
                    We handle the infrastructure, technology, and security — <span className="text-[#C9A853] italic">so you can focus on growth.</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left mb-12">
                    <div className="sm:col-span-2 border border-[#F0EADB] rounded-[16px] p-5 bg-white hover:border-[#17362A] hover:-translate-y-[2px] hover:shadow-[0_4px_12px_rgba(14,36,28,0.06)] transition-all duration-200">
                        <div className="text-[2.2rem] font-extrabold tracking-[-0.02em] text-[#17362A] leading-[1.1]">0%</div>
                        <div className="text-[0.88rem] text-[#1C2420] leading-[1.5] mt-1">Zero platform fees during your launch period</div>
                        <svg className="w-full h-auto overflow-visible mt-4" viewBox="0 0 160 40">
                            <polyline points="0,32 20,28 40,30 60,18 80,22 100,10 120,14 140,6 160,2" fill="none" stroke="#17362A" strokeWidth="1.5" />
                            <circle cx="160" cy="2" r="2.5" fill="#17362A" />
                        </svg>
                    </div>

                    <div className="sm:row-span-2 border border-[#F0EADB] rounded-[16px] p-5 bg-white flex flex-col gap-4 hover:border-[#17362A] hover:-translate-y-[2px] hover:shadow-[0_4px_12px_rgba(14,36,28,0.06)] transition-all duration-200">
                        <div>
                            <div className="flex items-baseline gap-[6px] mb-1">
                                <span className="text-[1.6rem] font-extrabold tracking-[-0.02em] text-[#17362A] leading-[1.1]">Real-time</span>
                                <span className="text-[0.72rem] font-semibold text-[#234A3A] bg-[rgba(23,54,42,0.1)] px-[7px] py-[1px] rounded-[4px]">Live</span>
                            </div>
                            <div className="text-[0.88rem] text-[#1C2420] leading-[1.5]">Advanced analytics from live market data</div>
                            <svg className="w-full h-auto overflow-visible mt-3" viewBox="0 0 140 36">
                                <rect x="0" y="18" width="12" height="16" rx="2" fill="#F0EADB" />
                                <rect x="16" y="12" width="12" height="22" rx="2" fill="#F0EADB" />
                                <rect x="32" y="8" width="12" height="26" rx="2" fill="#F0EADB" />
                                <rect x="48" y="20" width="12" height="14" rx="2" fill="#F0EADB" />
                                <rect x="64" y="6" width="12" height="28" rx="2" fill="#F0EADB" />
                                <rect x="80" y="14" width="12" height="20" rx="2" fill="#F0EADB" />
                                <rect x="96" y="2" width="12" height="32" rx="2" fill="#17362A" />
                                <rect x="112" y="10" width="12" height="24" rx="2" fill="#F0EADB" />
                                <rect x="128" y="4" width="12" height="30" rx="2" fill="#17362A" />
                            </svg>
                        </div>

                        <div className="pt-3 border-t border-[#F0EADB]">
                            <div className="text-[0.82rem] font-semibold text-[#0E241C]">Order volume, live</div>
                            <svg className="w-full h-auto overflow-visible mt-2" viewBox="0 0 140 32">
                                <polyline points="0,26 20,22 40,24 60,14 80,17 100,8 120,11 140,3" fill="none" stroke="#17362A" strokeWidth="1.5" />
                                <circle cx="140" cy="3" r="2.5" fill="#17362A" />
                            </svg>
                        </div>

                        <div className="pt-3 border-t border-[#F0EADB] mt-auto">
                            <div className="flex items-baseline gap-[6px]">
                                <span className="text-[1.1rem] font-extrabold text-[#0E241C]">99.9%</span>
                                <span className="text-[0.78rem] text-[#1C2420]">platform uptime</span>
                            </div>
                            <svg className="w-full h-auto overflow-visible mt-2" viewBox="0 0 140 20">
                                <polyline points="0,10 10,10 14,4 18,16 22,10 32,10 36,6 40,14 44,10 60,10 64,3 68,17 72,10 140,10" fill="none" stroke="#17362A" strokeWidth="1.5" />
                            </svg>
                        </div>
                    </div>

                    <div className="sm:row-span-2 border border-[#332F27] rounded-[16px] p-5 flex flex-col gap-1" style={{ background: "linear-gradient(145deg, #0E241C, #1a1a2e)" }}>
                        <span className="text-[0.72rem] font-semibold tracking-[0.06em] uppercase text-[#C9A853]">Growth Accelerator</span>
                        <div className="text-[2.8rem] font-extrabold tracking-[-0.03em] text-[#17362A] mt-1 leading-[1]">85%</div>
                        <div className="text-[0.88rem] font-semibold text-white leading-[1.3]">Faster year-over-year growth</div>
                        <p className="text-[0.8rem] text-[#C9A853] leading-[1.6] mt-2">Average seller performance increase across all regions</p>
                        <div className="mt-auto flex gap-3">
                            {[
                                { label: "Tier 1", width: "72%" },
                                { label: "Tier 2", width: "58%" },
                                { label: "Tier 3", width: "91%" },
                            ].map((bar) => (
                                <div key={bar.label} className="flex-1 text-left">
                                    <div className="text-[0.7rem] text-[#C9A853] uppercase tracking-[0.04em]">{bar.label}</div>
                                    <div className="h-[4px] bg-[#332F27] rounded-[4px] mt-1 overflow-hidden">
                                        <div className="h-full bg-[#17362A] rounded-[4px]" style={{ width: bar.width }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="border border-[#F0EADB] rounded-[16px] p-5 bg-white flex flex-col hover:border-[#17362A] hover:-translate-y-[2px] hover:shadow-[0_4px_12px_rgba(14,36,28,0.06)] transition-all duration-200">
                        <svg className="w-full h-auto overflow-visible mb-2" viewBox="0 0 100 36">
                            <circle cx="18" cy="18" r="16" fill="none" stroke="#F0EADB" strokeWidth="6" />
                            <circle cx="18" cy="18" r="16" fill="none" stroke="#17362A" strokeWidth="6" strokeDasharray="75 100" strokeLinecap="round" transform="rotate(-90,18,18)" />
                            <text x="18" y="21" textAnchor="middle" fontSize="8" fontWeight="700" fill="#0E241C">92%</text>
                        </svg>
                        <div className="text-[0.88rem] font-semibold text-[#0E241C]">Seller satisfaction rate</div>
                        <div className="text-[0.78rem] text-[#1C2420] leading-[1.5] mt-1">Retention driven by transparent payouts</div>
                    </div>

                    <div className="border border-[#F0EADB] rounded-[16px] p-5 bg-white flex flex-col hover:border-[#17362A] hover:-translate-y-[2px] hover:shadow-[0_4px_12px_rgba(14,36,28,0.06)] transition-all duration-200">
                        <div className="text-[2rem] font-extrabold tracking-[-0.02em] text-[#17362A]">Instant</div>
                        <div className="text-[0.88rem] text-[#1C2420] leading-[1.5]">Direct-to-bank payouts with full transparency</div>
                        <div className="flex gap-2 mt-auto">
                            <div className="w-[8px] h-[8px] rounded-full bg-[#17362A] opacity-60" />
                            <div className="w-[8px] h-[8px] rounded-full bg-[#17362A] opacity-60" />
                            <div className="w-[8px] h-[8px] rounded-full bg-[#17362A]" />
                            <div className="w-[8px] h-[8px] rounded-full bg-[#17362A]" />
                            <div className="w-[8px] h-[8px] rounded-full bg-[#17362A]" />
                        </div>
                    </div>

                    <div className="sm:col-span-2 border border-[#F0EADB] rounded-[16px] p-5 bg-white flex flex-row items-center gap-4 hover:border-[#17362A] hover:-translate-y-[2px] hover:shadow-[0_4px_12px_rgba(14,36,28,0.06)] transition-all duration-200">
                        <div className="w-[48px] h-[48px] rounded-[12px] bg-[#F0EADB] flex items-center justify-center shrink-0">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#234A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                        </div>
                        <div className="text-left flex-1">
                            <div className="font-semibold text-[0.95rem] text-[#0E241C]">SOC 2 compliant infrastructure</div>
                            <div className="text-[0.82rem] text-[#1C2420] leading-[1.5] mt-[2px]">End-to-end encryption, immutable audit trails, and role-based access controls across all tiers.</div>
                        </div>
                        <div className="flex-none w-[110px] hidden sm:block">
                            <div className="text-[0.68rem] text-[#1C2420] mb-1 whitespace-nowrap">Audit events / mo</div>
                            <svg className="w-full h-auto overflow-visible" viewBox="0 0 100 28">
                                <rect x="0" y="14" width="8" height="14" rx="1.5" fill="#F0EADB" />
                                <rect x="12" y="18" width="8" height="10" rx="1.5" fill="#F0EADB" />
                                <rect x="24" y="10" width="8" height="18" rx="1.5" fill="#F0EADB" />
                                <rect x="36" y="16" width="8" height="12" rx="1.5" fill="#F0EADB" />
                                <rect x="48" y="6" width="8" height="22" rx="1.5" fill="#F0EADB" />
                                <rect x="60" y="12" width="8" height="16" rx="1.5" fill="#F0EADB" />
                                <rect x="72" y="2" width="8" height="26" rx="1.5" fill="#234A3A" />
                                <rect x="84" y="8" width="8" height="20" rx="1.5" fill="#F0EADB" />
                            </svg>
                        </div>
                    </div>

                    <div className="sm:col-span-2 border border-[#F0EADB] rounded-[16px] p-5 bg-white flex flex-row items-center gap-4 hover:border-[#17362A] hover:-translate-y-[2px] hover:shadow-[0_4px_12px_rgba(14,36,28,0.06)] transition-all duration-200">
                        <div className="text-left flex-1">
                            <div className="font-semibold text-[0.95rem] text-[#0E241C]">GMV growth, live</div>
                            <div className="text-[0.82rem] text-[#1C2420] leading-[1.5] mt-[2px]">Gross merchandise value tracked in real time across all three commercial tiers.</div>
                        </div>
                        <div className="flex-none w-[110px] hidden sm:block">
                            <div className="text-[0.68rem] text-[#1C2420] mb-1 whitespace-nowrap">GMV / week</div>
                            <svg className="w-full h-auto overflow-visible" viewBox="0 0 100 28">
                                <polyline points="0,24 14,20 28,22 42,12 56,16 70,6 84,9 100,2" fill="none" stroke="#17362A" strokeWidth="1.5" />
                                <circle cx="100" cy="2" r="2.2" fill="#17362A" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
