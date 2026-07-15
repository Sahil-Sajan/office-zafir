import Link from "next/link"

const tiers = [
    {
        name: "Starter",
        note: "For a first store finding its first customers.",
        price: "Free",
        period: " setup",
        commission: "15% commission per sale",
        popular: false,
        features: [
            "Up to 100 products",
            "Basic analytics dashboard",
            "Email support",
            "Mobile seller app",
            "7-day payout cycle",
        ],
        href: "/sellers",
        btn: "ghost",
        label: "Get Started",
    },
    {
        name: "Professional",
        note: "For sellers ready to stop managing everything by hand.",
        price: "Free",
        period: " setup",
        commission: "10% commission per sale",
        popular: true,
        features: [
            "Unlimited products",
            "Full analytics & performance scorecard",
            "Priority support",
            "Featured placement credits",
            "7-day payout cycle",
        ],
        href: "/sellers",
        btn: "primary",
        label: "Get Started",
    },
    {
        name: "Enterprise",
        note: "For sellers running real volume across categories.",
        price: "Custom",
        period: "",
        commission: "8% commission per sale",
        popular: false,
        features: [
            "Seller API access",
            "Bulk product & inventory management",
            "Dedicated account manager",
            "Custom commercial terms",
            "7-day payout cycle",
        ],
        href: "/contact",
        btn: "ghost",
        label: "Contact Sales",
    },
]

export default function PricingCards() {
    return (
        <section className="py-12 sm:py-16">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {tiers.map((t) => (
                        <div
                            key={t.name}
                            className={`bg-white border rounded-[16px] p-6 sm:p-8 relative flex flex-col transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)] ${t.popular ? "border-2 border-[#17362A]" : "border-[#F0EADB]"
                                }`}
                        >
                            {t.popular && (
                                <span className="absolute top-[-13px] left-1/2 -translate-x-1/2 bg-[#17362A] text-white text-[0.68rem] font-bold px-[14px] py-[4px] rounded-full uppercase tracking-[0.04em] whitespace-nowrap">
                                    Most Popular
                                </span>
                            )}
                            <span className="text-[1.15rem] font-bold">{t.name}</span>
                            <p className="text-[0.85rem] text-[#1C2420] mt-[6px] min-h-[40px]">{t.note}</p>
                            <div className="text-[2.1rem] font-extrabold mt-4 mb-[2px]">
                                {t.price}
                                {t.period && <span className="text-[0.9rem] font-semibold text-[#1C2420]">{t.period}</span>}
                            </div>
                            <div className="text-[0.85rem] text-[#234A3A] font-semibold mb-4">{t.commission}</div>
                            <ul className="list-none m-0 p-0 flex flex-col gap-[10px] flex-1 mb-6">
                                {t.features.map((f) => (
                                    <li key={f} className="flex gap-2 text-[0.88rem] text-[#1C2420] before:content-['✓'] before:text-[#16A34A] before:font-bold before:shrink-0">
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href={t.href}
                                className={`inline-flex items-center justify-center gap-2 px-[18px] py-[10px] rounded-[8px] text-[0.9rem] font-semibold no-underline transition-all duration-200 ${t.btn === "primary"
                                    ? "bg-[#17362A] text-white hover:bg-[#234A3A] hover:-translate-y-px"
                                    : "bg-transparent text-[#0E241C] border border-[#F0EADB] hover:border-[#17362A] hover:text-[#234A3A] hover:-translate-y-px"
                                    }`}
                            >
                                {t.label}
                            </Link>
                        </div>
                    ))}
                </div>
                <p className="mt-6 text-[0.85rem] text-[#1C2420] text-center">
                    Commission rates fall within the platform&apos;s published 8–15% marketplace range. JayakHub delivery fees are calculated separately and shown at checkout.
                </p>
            </div>
        </section>
    )
}
