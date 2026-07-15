const steps = [
    {
        title: "Quick Onboarding",
        desc: "Set up your store in minutes with just your ID and phone number.",
    },
    {
        title: "Smart Inventory",
        desc: "Manage stock across multiple locations with low-stock alerts before you run out.",
    },
    {
        title: "Marketing Engine",
        desc: "Built-in visibility tools and featured placement — no separate ad platform to learn.",
    },
    {
        title: "Real Support",
        desc: "Arabic-first support that actually answers, not a bot loop.",
    },
]

export default function SellerJourney() {
    return (
        <section className="py-12 sm:py-16">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
                <div className="flex justify-between items-end gap-6 flex-wrap mb-9">
                    <div>
                        <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
                            The seller journey
                        </span>
                        <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-3 mb-[10px] text-[#0E241C]">
                            From signup <span className="text-[#C9A853] italic">to scale.</span>
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
