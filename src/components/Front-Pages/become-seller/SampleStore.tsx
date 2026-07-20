import Image from "next/image"
import { fridge, induction, stainless, cottonblend } from "@/utils/images"

export default function SampleStorefront() {
    return (
        <section className="py-12 sm:py-16">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
                <div className="flex justify-between items-end gap-6 flex-wrap mb-9">
                    <div>
                        <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
                            Sample storefront
                        </span>
                        <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-3 mb-[10px] text-[#0E241C]">
                            What a live store <span className="text-[#C9A853] italic">looks like.</span>
                        </h2>
                    </div>
                </div>

                {/* cover banner */}
                <div className="h-[160px] rounded-[16px] relative overflow-hidden" style={{ background: "linear-gradient(120deg, #0E241C 0%, #3a2c1f 45%, #234A3A 100%)" }} />

                {/* profile head */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5 px-2 -mt-12 relative z-2">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-[10px] bg-white border-4 border-white shadow-[0_8px_24px_rgba(14,36,28,0.08)] flex items-center justify-center text-[1.4rem] sm:text-[2rem] font-extrabold text-[#234A3A] shrink-0">
                        BS
                    </div>
                    <div>
                        <h3 className="text-[1.2rem] font-bold text-[#FFFFFF] -mt-1 ">Baghdad Home Supplies</h3>
                        <div className="text-[0.85rem] text-[#1C2420]">zafir360.com/store/baghdad-home-supplies · Baghdad, Iraq</div>
                    </div>
                </div>

                {/* stat row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px border border-[#F0EADB] rounded-[10px] overflow-hidden bg-[#F0EADB] mt-6">
                    <div className="bg-white p-7 pr-6 text-left">
                        <div className="text-[2.1rem] font-extrabold tracking-[-0.02em] flex items-baseline gap-0.5">
                            84<span className="text-[1.2rem] text-[#17362A] font-bold">/100</span>
                        </div>
                        <div className="text-[0.85rem] text-[#1C2420] mt-[6px]">Performance score</div>
                    </div>
                    <div className="bg-white p-7 pr-6 text-left">
                        <div className="text-[2.1rem] font-extrabold tracking-[-0.02em]">2,140</div>
                        <div className="text-[0.85rem] text-[#1C2420] mt-[6px]">Products listed</div>
                    </div>
                    <div className="bg-white p-7 pr-6 text-left">
                        <div className="text-[2.1rem] font-extrabold tracking-[-0.02em] flex items-baseline gap-0.5">
                            4.7<span className="text-[1.2rem] text-[#17362A] font-bold">★</span>
                        </div>
                        <div className="text-[0.85rem] text-[#1C2420] mt-[6px]">Buyer rating</div>
                    </div>
                    <div className="bg-white p-7 pr-6 text-left">
                        <div className="text-[2.1rem] font-extrabold tracking-[-0.02em] flex items-baseline gap-0.5">
                            98<span className="text-[1.2rem] text-[#17362A] font-bold">%</span>
                        </div>
                        <div className="text-[0.85rem] text-[#1C2420] mt-[6px]">On-time dispatch</div>
                    </div>
                </div>

                {/* grid cols-2 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-px border border-[#F0EADB] rounded-[10px] overflow-hidden bg-[#F0EADB] mt-6">
                    <div className="bg-white p-[26px] relative transition-all duration-250 hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)]">
                        <h3 className="text-[1.05rem] font-bold mb-2">Store photos &amp; policies</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
                            {[fridge.src, induction.src, stainless.src, cottonblend.src].map((img, i) => (
                                <div
                                    key={img}
                                    className="aspect-square rounded-[6px] overflow-hidden relative"
                                >
                                    <Image src={img} alt="" fill sizes="(min-width: 640px) 25vw, 50vw" className="object-cover" />
                                    <span className="absolute bottom-0 left-0 right-0 px-2 py-[6px] text-[0.7rem] font-semibold text-white" style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.55), transparent)" }}>
                                        {["Storefront", "Packaging", "Dispatch", "Invoices"][i]}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white p-[26px] relative transition-all duration-250 hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)]">
                        <h3 className="text-[1.05rem] font-bold mb-2">Trust signals on the store page</h3>
                        <div className="flex gap-2 flex-wrap mt-4">
                            <span className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold px-[10px] py-[4px] rounded-[6px] bg-[#F0EADB] text-[#17362A] before:content-['✓'] before:text-[0.75rem]">
                                Verified Seller
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold px-[10px] py-[4px] rounded-[6px] bg-[#F0EADB] text-[#234A3A] before:content-['●'] before:text-[0.5rem]">
                                7-Day Payout
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold px-[10px] py-[4px] rounded-[6px] bg-[#F0EADB] text-[#17362A] before:content-['✓'] before:text-[0.75rem]">
                                Fast Dispatch
                            </span>
                        </div>
                        <p className="text-[0.88rem] text-[#1C2420] leading-[1.6] mt-[16px]">
                            Reviews, return rate, and cancellation rate all sit on the public scorecard — no seller can hide a bad month.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
