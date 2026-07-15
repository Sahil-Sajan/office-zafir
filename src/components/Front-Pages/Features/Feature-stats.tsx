import { Globe, Bolt, ShieldCheck, ChatBubble } from "@/components/common/NavIcons"

const features = [
    {
        icon: <Globe />,
        title: "Global Storefront Infrastructure",
        desc: "Expand internationally with built-in multi-currency support, localized storefronts, and seamless cross-border operations.",
    },
    {
        icon: <Bolt />,
        title: "Accelerated Fulfillment Network",
        desc: "Deliver faster with our optimized logistics partners, real-time tracking, and priority shipping options.",
    },
    {
        icon: <ShieldCheck />,
        title: "Enterprise-Grade Secure Escrow",
        desc: "Every transaction is safeguarded through encrypted escrow, fraud prevention systems, and buyer-seller protection.",
    },
    {
        icon: <ChatBubble />,
        title: "Premium Human Support",
        desc: "Access round-the-clock assistance from real experts, available in multiple languages across global time zones.",
    },
]

export default function ScaleFeatures() {
    return (
        <section className="py-20">
            <div className="max-w-[1180px] mx-auto px-7 text-center">
                <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
                    Everything You Need to Scale
                </span>
                <h2 className="text-[clamp(1.8rem,1.5rem+1.2vw,2.6rem)] font-bold tracking-[-0.02em] leading-[1.1] max-w-[580px] mx-auto mt-3 mb-12 text-[#0E241C]">
                    A powerful suite of tools designed for <span className="text-[#C9A853] italic">ambitious sellers and discerning buyers.</span>
                </h2>
                <div className="grid gap-6 text-left" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
                    {features.map((f) => (
                        <div
                            key={f.title}
                            className="bg-white border border-[#F0EADB] rounded-[16px] p-7 hover:border-[#17362A] hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)] transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-[12px] bg-[#F0EADB] text-[#234A3A] flex items-center justify-center text-[1.3rem] mb-5">
                                {f.icon}
                            </div>
                            <h3 className="text-[1.05rem] font-bold mb-2">{f.title}</h3>
                            <p className="text-[0.88rem] text-[#1C2420] leading-[1.6]">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
