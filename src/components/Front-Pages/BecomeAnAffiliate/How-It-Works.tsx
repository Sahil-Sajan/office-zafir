const steps = [
    { title: "01 · Apply", desc: "Tell us about your audience — platform, following, and the kind of content you make." },
    { title: "02 · Get Your Link", desc: "Once approved, you get a unique tracked link and referral code for the Zafir360 marketplace." },
    { title: "03 · Share Content", desc: "Post it in a review, story, video, or newsletter — however your audience already follows you." },
    { title: "04 · Earn Commission", desc: "When a referred visitor completes a purchase, your commission is credited to your affiliate balance." },
]

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-16">
            <div className="max-w-[1180px] mx-auto px-7">
                <div className="flex justify-between items-end gap-6 flex-wrap mb-9">
                    <div>
                        <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
                            Getting started
                        </span>
                        <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-3 mb-[10px] text-[#0E241C]">
                            Four steps <span className="text-[#C9A853] italic">from application to first payout.</span>
                        </h2>
                    </div>
                </div>
                <div className="relative pl-9">
                    <div className="absolute left-[11px] top-[6px] bottom-[6px] w-[2px] bg-[#F0EADB]" />
                    {steps.map((s) => (
                        <div key={s.title} className="relative pb-8 last:pb-0">
                            <div className="absolute left-[-36px] top-[2px] w-6 h-6 rounded-full border-2 border-[#17362A] bg-[#F0EADB]" />
                            <h3 className="text-[1rem] font-bold mb-1">{s.title}</h3>
                            <p className="text-[0.9rem] text-[#1C2420]">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
