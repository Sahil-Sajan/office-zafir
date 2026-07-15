"use client"

import { useState } from "react"

const tabs = [
    { id: "t1", label: "Wholesale Trade" },
    { id: "t2", label: "Marketplace" },
    { id: "t3", label: "Consumer Retail" },
    { id: "t4", label: "Platform & Admin" },
]

const tiers = {
    t1: {
        title: "Wholesale & B2B Trade — 75 capabilities",
        count: "40 core · 31 growth · 4 future",
        cards: [
            { domain: "Trust", title: "Business Buyer Verification (KYB)", desc: "No trade license, no prices. It keeps the wholesale catalogue a business-to-business room, not a public storefront." },
            { domain: "Pricing", title: "MOQ + 4-Tier Volume Pricing", desc: "Type a quantity, watch the per-unit price drop. Buyers see the volume discount before they commit, not after." },
            { domain: "Pricing", title: "Container Load Calculator", desc: "Answers the question every importer asks first: does this order fill a 20ft box, or am I paying to ship air in a 40ft one?" },
            { domain: "Pricing", title: "Landed Cost Calculator", desc: "The factory price was never the real price. This adds freight, duty, and clearance so Baghdad, Basra, and Erbil all get an honest number." },
            { domain: "Pricing", title: "Prices Hidden Until Verified", desc: "Anyone can browse the catalogue. Nobody sees a number until KYB clears — pricing stays a buyer's privilege, not public data." },
            { domain: "RFQ", title: "Bulk RFQ to 5 Suppliers", desc: "Write the request once. It reaches five matched factories simultaneously instead of five separate emails." },
            { domain: "RFQ", title: "RFQ Auto-Match", desc: "The system already knows which suppliers can actually fill this order — by category, capacity, and track record." },
            { domain: "RFQ", title: "Quote Comparison Matrix", desc: "Five quotes, one screen. Price, lead time, and terms lined up so the comparison takes a glance, not a spreadsheet." },
            { domain: "Supplier", title: "Supplier Application & Approval", desc: "A factory doesn't list itself. It gets reviewed and approved by a person before a single buyer ever sees it." },
            { domain: "Supplier", title: "Supplier RFQ Management", desc: "Every incoming request lands in one dashboard with a 24-hour clock — slow suppliers show up in their own numbers." },
            { domain: "Documents", title: "Proforma Invoice Generator", desc: "The paperwork a bank or customs officer expects, generated the moment a quote is accepted — not typed up from scratch." },
            { domain: "Payments", title: "Escrow Payment System", desc: "The buyer's money sits with the platform, not the supplier, until the delivery milestone actually happens." },
            { domain: "Payments", title: "Wholesale Payment Methods", desc: "Wire transfer, Letter of Credit, deposit structures, terms for repeat buyers — the ways Iraqi import trade actually gets paid." },
            { domain: "Logistics", title: "Container Shipment Tracking", desc: "From the factory gate to an Iraqi port, with a status a buyer can check instead of a forwarder to call." },
            { domain: "Trust", title: "B2B Verified Reviews", desc: "Only verified buyers who placed the order get to rate — on quality, packaging, and whether the lead time was real." },
        ],
        footer: "Full catalogue of all 75 wholesale capabilities in the platform specification.",
    },
    t2: {
        title: "Marketplace & Reseller — 55 capabilities",
        count: "15 core · 31 growth · 9 future",
        cards: [
            { domain: "Seller", title: "Seller Onboarding Wizard", desc: "Five steps, one guided path, ending in a real test order — nobody opens a store without knowing it actually works." },
            { domain: "Seller", title: "Seller Dashboard", desc: "What needs attention today — low stock, unread messages, orders waiting — surfaces first. Nothing hides in a tab." },
            { domain: "Seller", title: "Seller Performance Scorecard", desc: "Acceptance rate, dispatch speed, reviews, returns — public, rolled into one number. A bad month doesn't stay hidden." },
            { domain: "Catalog", title: "One-Click Import from Wholesale", desc: "Already bought it wholesale? Click import and the photos, specs, and description are already there. Set a price and it's live." },
            { domain: "Catalog", title: "Bulk Product Upload", desc: "One spreadsheet, up to 1,000 products, with a validation pass that catches errors before they go live." },
            { domain: "Admin", title: "Product Moderation Queue", desc: "Every listing gets reviewed before a shopper sees it. The delay is the point — it's what makes the marketplace worth trusting." },
            { domain: "Finance", title: "Commission Calculator", desc: "Set a price and see what's actually left after fees and delivery — before the sale, not as a surprise on payout day." },
            { domain: "Finance", title: "Financial Reports & Payouts", desc: "Commissions, delivery fees, and refunds already subtracted. The number that lands is the number that's yours." },
            { domain: "Trust", title: "Seller Rating System", desc: "Shoppers rate accuracy, packaging, and delivery speed per order — the score a new buyer sees before they click buy." },
        ],
        footer: null,
    },
    t3: {
        title: "Consumer Retail — 65 capabilities",
        count: "23 core · 34 growth · 8 future",
        cards: [
            { domain: "Auth", title: "Consumer Registration", desc: "A phone number and an OTP is all it takes to buy. Full registration can wait until after the first order." },
            { domain: "Search", title: "Full Arabic Product Search", desc: "Understands Arabic the way people actually type it — typos, dialect, and all — not just a dictionary match." },
            { domain: "Trust", title: "Purchase-Verified Reviews", desc: "You can't review what you didn't buy. Every star on a listing came from someone who actually received the box." },
            { domain: "Cart", title: "Multi-Seller Shopping Cart", desc: "Order from three sellers at once and the cart keeps them straight — grouped, with delivery cost shown per seller." },
            { domain: "Cart", title: "Iraq-Optimised Checkout", desc: "Address, payment, confirm. Three screens, no detour, built for someone checking out on mobile data." },
            { domain: "Cart", title: "Smart Address Management", desc: "Iraqi addresses aren't always a street number — so you drop a pin instead of guessing at a format that doesn't fit." },
            { domain: "Payments", title: "Local Payment Methods", desc: "Cash on delivery still wins in Iraq, so it's first — alongside Zain Cash, Qi Card, and international cards." },
            { domain: "Delivery", title: "Real-Time Driver Tracking", desc: "Watch the driver move on the map instead of wondering if the order left the warehouse." },
            { domain: "Delivery", title: "Flexible Delivery Slots", desc: "Need it in an hour or fine with next week — the slot is a choice, not whatever the courier decides first." },
            { domain: "Delivery", title: "Proof of Delivery Photo", desc: "A photo at the door closes the order — so \"it never arrived\" is a claim that can actually be checked." },
            { domain: "Support", title: "Arabic Consumer Support", desc: "A real conversation in Arabic, answered in minutes, not a ticket that sits overnight." },
            { domain: "Security", title: "Adaptive Account Security", desc: "A new phone logging into your account triggers an OTP — quietly, every time, no exceptions." },
        ],
        footer: null,
    },
    t4: {
        title: "Platform & Admin Infrastructure — 105 capabilities",
        count: "56 core · 38 growth · 11 future",
        cards: [
            { domain: "Admin", title: "Super Admin Dashboard", desc: "GMV, live deliveries, open RFQs, and disputes — the state of all three tiers on one screen, updating in real time." },
            { domain: "Admin", title: "AI-Assisted Moderation Queue", desc: "Every listing gets an AI pass first, a human look second, and a 24-hour clock the whole time." },
            { domain: "Admin", title: "Dynamic Commission Engine", desc: "Commission flexes by category, seller tier, and promotion — no code change needed to move the number." },
            { domain: "Admin", title: "Immutable Audit Log", desc: "Every admin action is recorded permanently — who changed what, and what it was before." },
            { domain: "Notifications", title: "Unified Notification System", desc: "One service decides push, SMS, email, or WhatsApp — and retries by SMS if the push never lands." },
            { domain: "Trust", title: "Iraq-Specific Trust Framework", desc: "A prohibited-items and compliance list written for Iraq specifically, not copied from a template built for somewhere else." },
            { domain: "Catalog", title: "Three-Tier Unified Product Index", desc: "The single record every feature depends on — a buyer, a seller, and a shopper reading the same product three different ways." },
            { domain: "Admin", title: "Launch Readiness Gate", desc: "The checklist nobody skips — every core feature tested, a live payment processed, a real JayakHub delivery completed before go-live is even discussed." },
        ],
        footer: 'Architecture detail on the <a href="/features">Platform</a> page.',
    },
}

interface DeepDiveTabsProps {
    features?: Record<string, string>;
}

export default function DeepDiveTabs({ features = {} }: DeepDiveTabsProps) {
    const [active, setActive] = useState("t1")
    const tier = tiers[active as keyof typeof tiers]
    const t = (key: string, fallback: string) => features[key] ?? fallback;

    return (
        <section className="py-20 border-b border-[#F0EADB]">
            <div className="max-w-[1180px] mx-auto px-7">
                <div className="mb-10 flex flex-col items-center text-center">
                    <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
                        {t("featureChart.eyebrow", "Deep Dive by Tier")}
                    </span>
                    <h2 className="text-[clamp(1.8rem,1.5rem+1.2vw,2.6rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-3 max-w-[580px] text-[#0E241C]">
                        {(() => {
                          const title = t("featureChart.title", "Every feature has a spec ID, a domain, and a reason.");
                          const gold = "and a reason.";
                          return title.includes(gold)
                            ? <>{title.slice(0, -gold.length)}<span className="text-[#C9A853] italic">{gold}</span></>
                            : title;
                        })()}
                    </h2>
                    <p className="text-[0.95rem] text-[#1C2420] leading-[1.7] max-w-[640px] mt-3">
                        {t("featureChart.desc", "Nothing here is hypothetical — every card links back to a numbered requirement in the platform specification. Open the tier that matches your business.")}
                    </p>
                </div>

                <div className="flex gap-[4px] border-b border-[#F0EADB] mb-6 overflow-x-auto">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActive(tab.id)}
                            className={`px-5 py-3 text-[0.85rem] font-semibold bg-transparent border-b-2 transition-colors duration-150 cursor-pointer whitespace-nowrap ${active === tab.id
                                    ? "text-[#234A3A] border-[#17362A]"
                                    : "text-[#1C2420] border-transparent hover:text-[#0E241C]"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div>
                    <div className="flex items-end justify-between gap-5 flex-wrap mb-5">
                        <h3 className="text-[1.2rem] font-bold">{tier.title}</h3>
                        <span className="text-[0.84rem] text-[#1C2420] whitespace-nowrap">{tier.count}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[14px]">
                        {tier.cards.map((card) => (
                            <div
                                key={card.title}
                                className="border border-[#F0EADB] rounded-[14px] p-4 bg-white hover:border-[#17362A] hover:-translate-y-[2px] hover:shadow-[0_4px_12px_rgba(14,36,28,0.06)] transition-all duration-200"
                            >
                                <div className="flex items-center mb-2">
                                    <span className="text-[0.68rem] font-semibold uppercase tracking-[0.03em] text-[#1C2420] bg-[#F0EADB] px-[7px] py-[2px] rounded-[4px]">{card.domain}</span>
                                </div>
                                <h4 className="text-[0.92rem] font-bold mb-[6px]">{card.title}</h4>
                                <p className="text-[0.82rem] text-[#1C2420] leading-[1.5]">{card.desc}</p>
                            </div>
                        ))}
                    </div>

                    {tier.footer && (
                        <p className="mt-4 text-[0.85rem] text-[#1C2420]">
                            {tier.footer}
                        </p>
                    )}
                </div>
            </div>
        </section>
    )
}
