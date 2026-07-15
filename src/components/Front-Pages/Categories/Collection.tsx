import Link from "next/link"
import { Shirt, Bolt, Lock, TrendingUp, Handshake, BookOpen } from "@/components/common/NavIcons"

const categories = [
    {
        icon: <Shirt />,
        title: "Apparel & Luxury",
        note: "An archive of timeless apparel and bespoke accessories from world-renowned ateliers — each piece authenticated and provenance-tracked.",
        chips: ["Haute Couture", "Bespoke Tailoring", "Leather Goods", "Footwear", "Timepieces", "Fine Jewelry", "Eyewear", "Silk & Cashmere"],
    },
    {
        icon: <Bolt />,
        title: "Elite Performance Hardware",
        note: "Pioneering technology and smart hardware engineered for the futurist lifestyle. Precision, power, and design in every spec.",
        chips: ["Smart Infrastructure", "Audio Systems", "Lighting", "Home Automation", "Workspace Tech", "Portable Power", "Materials Science"],
    },
    {
        icon: <Lock />,
        title: "Private Archive",
        note: "Exclusive access to pieces outside the public catalogue. Curated by our concierge team based on your aesthetic fingerprint.",
        chips: ["One-of-a-Kind", "Limited Editions", "Collector Pieces", "Commission Only", "Heritage Restorations"],
    },
    {
        icon: <TrendingUp />,
        title: "Market Momentum",
        note: "What the world is watching right now — cross-border flow intelligence updated every 60 minutes from verified trade corridors and auction houses.",
        chips: ["Trending Now", "Emerging Markets", "Price Movements", "Supply Signals", "Auction Results"],
    },
    {
        icon: <Handshake />,
        title: "Concierge Services",
        note: "Beyond the catalogue lies a private network. Submit a brief and our curators source what the public market never sees.",
        chips: ["Sourcing Requests", "Authentication", "Provenance Research", "Private Sales", "White-Glove Delivery"],
    },
    {
        icon: <BookOpen />,
        title: "Our Philosophy",
        note: "Every piece on this platform passed a human review. We don't algorithmically scrape — we deliberately select. Quality of curation over quantity of listings.",
        chips: ["Verified Provenance", "Human Curation", "Aesthetic Alignment", "Discretion", "Live Intelligence"],
    },
]

export default function CollectionsGrid() {
    return (
        <section className="py-14 sm:py-20">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
                <div className="mb-9 flex flex-col items-center text-center">
                    <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
                        The collections, unpacked
                    </span>
                    <h2 className="text-[clamp(1.7rem,1.3rem+1.6vw,2.6rem)] font-bold tracking-[-0.02em] leading-[1.15] mt-3 max-w-[680px] text-[#0E241C]">
                        Curated around what discerning<br /><span className="text-[#C9A853] italic">buyers actually acquire.</span>
                    </h2>
                    <p className="text-[1.1rem] text-[#1C2420] leading-[1.65] max-w-[640px] mt-3">
                        Not a placeholder list — these collections are shaped by real acquisition patterns across our global network. Every category is editorially maintained, not algorithmically generated.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {categories.map((cat) => (
                        <div key={cat.title} className="bg-white border border-[#F0EADB] rounded-[16px] p-7 hover:border-[#17362A] hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)] transition-all duration-300">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-14 h-14 rounded-[14px] bg-[#F0EADB] text-[#234A3A] flex items-center justify-center text-[1.6rem] shrink-0">{cat.icon}</div>
                                <h3 className="text-[1.15rem] font-bold">{cat.title}</h3>
                            </div>
                            <p className="text-[0.88rem] text-[#1C2420] leading-[1.55] mb-4">{cat.note}</p>
                            <div className="flex gap-2 flex-wrap">
                                {cat.chips.map((chip) => (
                                    <span key={chip} className="text-[0.78rem] font-medium px-3 py-1.5 rounded-[999px] bg-white text-[#1C2420] border border-[#F0EADB]">{chip}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
