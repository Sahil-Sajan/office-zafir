"use client"

import { useState } from "react"

const faqs = [
    {
        q: "What do I need to register as a seller?",
        a: "A phone number, national ID, and basic business details for KYC. Most sellers finish the onboarding wizard — Profile → Store Design → First Product → Payment Setup → Test Order — in under 10 minutes.",
    },
    {
        q: "How much commission do I actually pay?",
        a: "Between 8% and 15% depending on your plan and category. The commission calculator shows the exact amount before you set a price — never deducted as a surprise at payout.",
    },
    {
        q: "When do I get paid?",
        a: "Every 7 days, automatically. Net earnings — gross revenue minus commission, delivery fees, and refunds — post to your chosen payout method without you having to request it.",
    },
    {
        q: "Can I sell something I bought on Zafir360 wholesale?",
        a: "Yes — that's the one-click import. Click Import on any product you purchased wholesale and the photos, description, and specs carry over automatically. Set a retail price and it's live.",
    },
    {
        q: "Why does my listing take time to go live?",
        a: "Every new listing is reviewed before publishing. It's a short delay, and it's the same reason buyers trust what they click on the marketplace.",
    },
    {
        q: "What happens if a buyer returns an item or files a dispute?",
        a: "It goes into the unified dispute queue with evidence attached, not a dead-end support ticket. Return rate and dispute history feed directly into your public performance scorecard.",
    },
    {
        q: "Can I manage inventory across more than one location?",
        a: "Yes. Real-time stock per SKU and variant, with low-stock alerts across SMS, push, and email, and multi-location support for sellers running a warehouse plus a shop.",
    },
    {
        q: "How do I get help if something goes wrong?",
        a: "Arabic-first live chat with a fast response target during business hours, plus WhatsApp support. For anything urgent, contact us directly.",
    },
]

export default function FAQAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggle = (i: number) => {
        setOpenIndex(openIndex === i ? null : i)
    }

    return (
        <section className="py-12 sm:py-16">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
                <div className="max-w-[760px] mx-auto">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i
                        return (
                            <div key={i} className={`border-b border-[#F0EADB] ${isOpen ? "is-open" : ""}`}>
                                <button
                                    onClick={() => toggle(i)}
                                    className="w-full text-left bg-transparent border-none cursor-pointer py-5 px-1 text-[0.98rem] font-semibold text-[#0E241C] flex justify-between items-center gap-4"
                                    style={{ fontFamily: "var(--font-inter, 'Inter', sans-serif)" }}
                                >
                                    {faq.q}
                                    <span
                                        className="shrink-0 text-[1.1rem] text-[#17362A] transition-transform duration-200"
                                        style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                                    >
                                        +
                                    </span>
                                </button>
                                <div
                                    className="overflow-hidden transition-[max-height] duration-250 ease"
                                    style={{ maxHeight: isOpen ? "300px" : "0" }}
                                >
                                    <p className="px-1 pb-5 text-[0.9rem] text-[#1C2420] leading-[1.6]">{faq.a}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
