import Link from "next/link"

export default function VerifyBadge() {
    return (
        <section className="py-12 sm:py-16">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
                <div className="flex justify-between items-end gap-6 flex-wrap mb-9">
                    <div>
                        <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
                            The verified supplier badge
                        </span>
                        <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-3 mb-[10px] text-[#0E241C]">
                            Displayed <span className="text-[#C9A853] italic">on every approved storefront.</span>
                        </h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[14px] auto-rows-auto sm:auto-rows-[150px]">
                    <div className="bg-[#0E241C] border border-[#0E241C] text-white rounded-[16px] p-6 flex flex-col justify-between overflow-hidden relative sm:col-span-2 sm:row-span-2 transition-all duration-250 hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)]">
                        <div>
                            <span className="relative inline-flex items-center gap-1.5 group/tip">
                                <span className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold px-[10px] py-[4px] rounded-[6px] bg-[#F0EADB] text-[#234A3A] before:content-['●'] before:text-[0.5rem]">
                                    Zafir360 Verified
                                </span>
                                <button
                                    type="button"
                                    aria-label="What does Zafir360 Verified mean?"
                                    className="flex items-center justify-center size-[24px] rounded-full border border-[#F0EADB]/50 text-[0.65rem] font-bold text-white/80 cursor-pointer"
                                >
                                    ?
                                </button>
                                <div className="hidden group-hover/tip:block group-focus-within/tip:block absolute bottom-full left-0 mb-2 w-[240px] rounded-[10px] bg-white text-[#1C2420] p-3.5 shadow-[0_16px_40px_rgba(14,36,28,0.2)] z-10">
                                    <p className="text-[0.72rem] font-semibold text-[#0E241C] mb-1.5">Zafir360 Verified means:</p>
                                    <ul className="text-[0.72rem] leading-[1.5] flex flex-col gap-0.5">
                                        <li>✓ In-person or video factory visit</li>
                                        <li>✓ Business license checked</li>
                                        <li>✓ Sample inspected before listing</li>
                                    </ul>
                                    <Link href="/how-we-verify-suppliers" className="block text-[0.72rem] font-semibold text-[#234A3A] underline mt-1.5">
                                        Full process →
                                    </Link>
                                </div>
                            </span>
                            <p className="text-[0.88rem] text-[#C9A853] leading-[1.55] mt-4">
                                The badge signals to buyers that a supplier has passed every stage of the review — and will be re-verified every year, not just once at signup.
                            </p>
                        </div>
                        <Link href="/become-a-supplier" className="text-[0.85rem] text-[#C9A853] no-underline">
                            Become a verified supplier →
                        </Link>
                    </div>
                    <div className="bg-white border border-[#F0EADB] rounded-[16px] p-6 flex flex-col justify-between overflow-hidden relative sm:col-span-2 sm:row-span-2 transition-all duration-250 hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)] hover:border-[#C9A853]">
                        <div>
                            <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
                                What it unlocks
                            </span>
                            <p className="text-[0.92rem] text-[#1C2420] leading-[1.55] mt-2">
                                Higher listing visibility, promotional placement, and priority customer support — the badge is worth something because it&apos;s hard to get.
                            </p>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            {["Higher visibility", "Promotional placement", "Priority support"].map((chip) => (
                                <span
                                    key={chip}
                                    className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold px-[10px] py-[4px] rounded-[6px] bg-[#F0EADB] text-[#234A3A] before:content-['✓'] before:text-[0.7rem]"
                                >
                                    {chip}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
