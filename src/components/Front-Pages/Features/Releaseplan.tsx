import Link from "next/link"

export default function ReleasePlan() {
    return (
        <section className="bg-[#F0EADB] border-y border-[#F0EADB] py-16">
            <div className="max-w-[1180px] mx-auto px-7">
                <div className="flex justify-between items-end gap-6 flex-wrap mb-9">
                    <div>
                        <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
                            The release plan
                        </span>
                        <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-[10px] text-[#0E241C]">
                            Priority isn&apos;t a label. <span className="text-[#C9A853] italic">It&apos;s the schedule.</span>
                        </h2>
                    </div>
                    <p className="text-[1.1rem] text-[#1C2420] max-w-[640px] leading-[1.65]">
                        Nothing gets a separate roadmap meeting — the P0/P1/P2 already on a feature is the phase it ships in.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[14px]">
                    <div className="col-span-2 bg-[#0E241C] text-white rounded-[16px] p-6 flex flex-col justify-between border border-[#0E241C] transition-all duration-250">
                        <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-white/75">
                            Phase 1 · Ship or nothing works
                        </span>
                        <div className="mt-auto">
                            <span className="text-[2.4rem] font-extrabold tracking-[-0.02em] leading-none">134</span>
                            <p className="text-[#C9A853] text-[0.88rem] leading-[1.55] mt-2">
                                Verified onboarding, RFQ-to-escrow, one-click import, Arabic checkout, JayakHub — the backbone
                                everything else stands on.
                            </p>
                        </div>
                    </div>

                    <div className="col-span-2 bg-white border border-[#F0EADB] rounded-[16px] p-6 flex flex-col justify-between hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)] transition-all duration-250">
                        <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
                            Phase 2 · Earns its keep
                        </span>
                        <div className="mt-auto">
                            <span className="text-[2.4rem] font-extrabold tracking-[-0.02em] leading-none">134</span>
                            <p className="text-[#1C2420] text-[0.88rem] leading-[1.55] mt-2">
                                Negotiation and L/C depth, seller tiers, loyalty, the Arabic chatbot — what turns &quot;it works&quot;
                                into &quot;sellers stay.&quot;
                            </p>
                        </div>
                    </div>

                    <div className="col-span-2 bg-white border border-[#F0EADB] rounded-[16px] p-6 flex flex-col justify-between hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)] transition-all duration-250">
                        <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
                            Phase 3 · If it grows this big
                        </span>
                        <div className="mt-auto">
                            <span className="text-[2.4rem] font-extrabold tracking-[-0.02em] leading-none">32</span>
                            <p className="text-[#1C2420] text-[0.88rem] leading-[1.55] mt-2">
                                Expansion framework, investor reporting, market-intelligence subscriptions — built for a scale
                                that hasn&apos;t happened yet.
                            </p>
                        </div>
                    </div>

                    <Link
                        href="/features#launch-readiness"
                        className="col-span-2 bg-gradient-to-br from-[#17362A] to-[#234A3A] text-white rounded-[16px] p-6 flex flex-col justify-between border border-[#234A3A] transition-all duration-250 hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)] no-underline"
                    >
                        <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-white/85">
                            The gate before all of it
                        </span>
                        <div className="mt-auto">
                            <span className="text-[2.4rem] font-extrabold tracking-[-0.02em] leading-none">Go / No-Go</span>
                            <p className="text-white/85 text-[0.88rem] leading-[1.55] mt-2">
                                One checklist decides go or no-go — a real order, a real payment, a real JayakHub delivery.{' '}
                                <span className="underline">See what&apos;s on it →</span>
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}
