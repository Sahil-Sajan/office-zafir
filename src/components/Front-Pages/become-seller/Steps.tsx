const steps = [
    { title: "01 · Profile", desc: "KYC verification for the business — trade documents and owner identity." },
    { title: "02 · Store Design", desc: "Store name, logo, banner, policies, and a branded URL: zafir360.com/store/name." },
    { title: "03 · First Product", desc: "List manually, or import directly from anything already purchased on Zafir360 wholesale." },
    { title: "04 · Payment Setup", desc: "Bank details for the 7-day IQD payout cycle." },
    { title: "05 · Test Order", desc: "A guided first transaction before the storefront goes fully live." },
]

export default function OnboardingSteps() {
    return (
        <section id="onboarding" className="py-16">
            <div className="max-w-[1180px] mx-auto px-7">
                <div className="flex justify-between items-end gap-6 flex-wrap mb-9">
                    <div>
                        <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
                            Seller Onboarding Wizard
                        </span>
                        <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-3 mb-[10px] text-[#0E241C]">
                            Five steps <span className="text-[#C9A853] italic">from application to first sale.</span>
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
                <div className="mt-10 max-w-[420px]">
                    <div className="flex justify-between text-[0.85rem] mb-2">
                        <span className="font-semibold">Onboarding progress</span>
                        <span className="text-[#1C2420]">3 of 5 steps</span>
                    </div>
                    <div className="h-2 rounded-full bg-[#F0EADB] overflow-hidden">
                        <span className="block h-full rounded-full" style={{ background: "linear-gradient(90deg, #17362A, #234A3A)", width: "60%" }} />
                    </div>
                </div>
            </div>
        </section>
    )
}
