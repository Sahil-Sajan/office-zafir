interface PlatformBreakdownProps {
    features?: Record<string, string>;
}

export default function PlatformBreakdown({ features = {} }: PlatformBreakdownProps) {
    const t = (key: string, fallback: string) => features[key] ?? fallback;

    return (
        <section className="py-14 sm:py-20 bg-[#F0EADB] border-t border-[#F0EADB] border-b border-[#F0EADB]">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
                <div className="mb-10 flex flex-col items-center text-center">
                    <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
                        {t("stackbar.eyebrow", "Platform Breakdown")}
                    </span>
                    <h2 className="text-[clamp(1.8rem,1.5rem+1.2vw,2.6rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-3 max-w-[580px] text-[#0E241C]">
                        {(() => {
                          const title = t("stackbar.title", "Every tier is built to deliver, not to decorate.");
                          const gold = "not to decorate.";
                          return title.includes(gold)
                            ? <>{title.slice(0, -gold.length)}<span className="text-[#C9A853] italic">{gold}</span></>
                            : title;
                        })()}
                    </h2>
                    <p className="text-[0.95rem] text-[#1C2420] leading-[1.7] max-w-[640px] mt-3">
                        {t("stackbar.desc", "Core platform capabilities dominate the feature count — infrastructure and trust outnumber every commercial tier. A marketplace is easy to sketch; keeping the machine honest underneath is the actual job.")}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {[
                        { num: "75", label: "Tier 1 — Wholesale & B2B Trade" },
                        { num: "55", label: "Tier 2 — Marketplace & Reseller" },
                        { num: "65", label: "Tier 3 — Consumer & Retail" },
                        { num: "105", label: "Platform & Technical Infrastructure" },
                    ].map((s) => (
                        <div key={s.label} className="text-center border border-[#F0EADB] rounded-[12px] p-5 bg-white">
                            <div className="text-[2rem] font-extrabold tracking-[-0.02em] text-[#17362A]">{s.num}</div>
                            <div className="text-[0.8rem] text-[#1C2420] mt-1 leading-[1.4]">{s.label}</div>
                        </div>
                    ))}
                </div>

                <svg className="w-full h-auto overflow-visible" viewBox="0 0 560 220" role="img" aria-label="Stacked bar chart">
                    <line x1="20" y1="180" x2="550" y2="180" className="stroke-[#F0EADB] stroke-[1]" />
                    <g>
                        <rect x="40" y="119" width="90" height="61" fill="#17362A" />
                        <rect x="40" y="72" width="90" height="47" fill="#0E241C" />
                        <rect x="40" y="66" width="90" height="6" fill="#C9A853" />
                        <text x="85" y="58" textAnchor="middle" className="text-[11px] font-bold fill-[#0E241C]" style={{ fontFamily: "inherit" }}>75</text>
                        <text x="85" y="200" textAnchor="middle" className="text-[10px] fill-[#1C2420]" style={{ fontFamily: "inherit" }}>Wholesale</text>
                    </g>
                    <g>
                        <rect x="180" y="157" width="90" height="23" fill="#17362A" />
                        <rect x="180" y="110" width="90" height="47" fill="#0E241C" />
                        <rect x="180" y="96" width="90" height="14" fill="#C9A853" />
                        <text x="225" y="88" textAnchor="middle" className="text-[11px] font-bold fill-[#0E241C]" style={{ fontFamily: "inherit" }}>55</text>
                        <text x="225" y="200" textAnchor="middle" className="text-[10px] fill-[#1C2420]" style={{ fontFamily: "inherit" }}>Marketplace</text>
                    </g>
                    <g>
                        <rect x="320" y="145" width="90" height="35" fill="#17362A" />
                        <rect x="320" y="93" width="90" height="52" fill="#0E241C" />
                        <rect x="320" y="81" width="90" height="12" fill="#C9A853" />
                        <text x="365" y="73" textAnchor="middle" className="text-[11px] font-bold fill-[#0E241C]" style={{ fontFamily: "inherit" }}>65</text>
                        <text x="365" y="200" textAnchor="middle" className="text-[10px] fill-[#1C2420]" style={{ fontFamily: "inherit" }}>Consumer</text>
                    </g>
                    <g>
                        <rect x="460" y="95" width="90" height="85" fill="#17362A" />
                        <rect x="460" y="37" width="90" height="58" fill="#0E241C" />
                        <rect x="460" y="20" width="90" height="17" fill="#C9A853" />
                        <text x="505" y="12" textAnchor="middle" className="text-[11px] font-bold fill-[#0E241C]" style={{ fontFamily: "inherit" }}>105</text>
                        <text x="505" y="200" textAnchor="middle" className="text-[10px] fill-[#1C2420]" style={{ fontFamily: "inherit" }}>Platform</text>
                    </g>
                </svg>

                <div className="flex gap-[18px] flex-wrap mt-4 text-[0.8rem] text-[#1C2420]">
                    <span className="flex items-center gap-[6px]">
                        <span className="w-[10px] h-[10px] rounded-[2px] bg-[#17362A]" />
                        Core · Ship-ready features
                    </span>
                    <span className="flex items-center gap-[6px]">
                        <span className="w-[10px] h-[10px] rounded-[2px] bg-[#0E241C]" />
                        Growth · Scale-enabling features
                    </span>
                    <span className="flex items-center gap-[6px]">
                        <span className="w-[10px] h-[10px] rounded-[2px] bg-[#C9A853]" />
                        Future · Expansion features
                    </span>
                </div>
            </div>
        </section>
    )
}
