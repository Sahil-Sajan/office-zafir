import Link from "next/link"

const steps = [
    {
        title: "1 · Apply Online",
        desc: "Complete supplier registration with company details, factory photos, product categories, and capacity.",
    },
    {
        title: "2 · Get Verified",
        beforeLink: "Document review, then a personal factory visit from Sam — see the full process on ",
        link: { href: "/how-we-verify", text: "How We Verify" },
        afterLink: ".",
    },
    {
        title: "3 · Start Supplying",
        desc: "List your catalogue with 4-tier volume pricing and start receiving RFQs from verified buyers.",
    },
]

export default function SupplierProcess() {
    return (
        <section className="py-12 sm:py-16 border-t border-[#F0EADB] border-b border-[#F0EADB] bg-[#F0EADB]">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
                <div className="flex justify-between items-end gap-6 flex-wrap mb-9">
                    <div>
                        <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
                            How it works
                        </span>
                        <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-3 mb-[10px] text-[#0E241C]">
                            Three steps <span className="text-[#C9A853] italic">to start supplying.</span>
                        </h2>
                    </div>
                </div>
                <div className="relative pl-9">
                    <div className="absolute left-[11px] top-[6px] bottom-[6px] w-[2px] bg-[#F0EADB]" />
                    {steps.map((s) => (
                        <div key={s.title} className="relative pb-8 last:pb-0">
                            <div className="absolute left-[-36px] top-[2px] w-6 h-6 rounded-full border-2 border-[#17362A] bg-[#F0EADB]" />
                            <h3 className="text-[1rem] font-bold mb-1">{s.title}</h3>
                            <p className="text-[0.9rem] text-[#1C2420]">
                                {s.desc || s.beforeLink}
                                {s.link && <Link href={s.link.href} className="text-inherit underline">{s.link.text}</Link>}
                                {s.afterLink}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
