"use client"

import { useState } from "react"

const faqs = [
    {
        q: "What is Zafir360?",
        a: "Zafir360 is Iraq's B2B2C marketplace — verified factories sell wholesale to Iraqi buyers, buyers resell to consumers, and every order ships through JayakHub. One product record powers all three tiers.",
    },
    {
        q: "How do I create an account?",
        a: "Click Sign Up, verify your phone number, and choose whether you're buying wholesale, running a store, or shopping as a consumer. You can add seller or supplier access later from your account settings.",
    },
    {
        q: "How is my payment protected?",
        a: "Funds are held in escrow until you confirm delivery or the return window closes. Nothing is released to a seller or supplier until you're satisfied with the order.",
    },
    {
        q: "How long does delivery take?",
        a: "Domestic marketplace orders typically arrive in 2-5 days. Wholesale imports from Turkey or China depend on the shipping method chosen at checkout — see the Shipping Guide for exact timelines.",
    },
    {
        q: "What if I need to return an item?",
        a: "Open a return request from your order history within the return window for that product. See the Returns Guide for step-by-step instructions and eligibility rules.",
    },
    {
        q: "How do I reach a human if this doesn't answer my question?",
        a: "Use Contact Support for live chat and WhatsApp during business hours, or submit a ticket for anything that needs investigation.",
    },
]

export default function GeneralFaqAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggle = (i: number) => {
        setOpenIndex(openIndex === i ? null : i)
    }

    return (
        <section className="py-16">
            <div className="max-w-[1180px] mx-auto px-7">
                <div className="max-w-[760px]">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i
                        return (
                            <div key={i} className={`border-b border-[#F0EADB] ${isOpen ? "is-open" : ""}`}>
                                <button
                                    onClick={() => toggle(i)}
                                    className="w-full text-left bg-transparent border-none cursor-pointer py-5 px-1 text-[0.98rem] font-semibold text-[#0E241C] flex justify-between items-center gap-4"
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
