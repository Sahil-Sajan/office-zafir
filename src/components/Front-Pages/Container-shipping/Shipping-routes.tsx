const routes = [
    { route: "Turkey → Iraq", transit: "5–7 days", mode: "Land / Mersin Port", notes: "Land convoys via Ibrahim Khalil or sea from Mersin to Umm Qasr — most consistent for mid-volume orders." },
    { route: "China → Iraq", transit: "25–35 days", mode: "Sea — Umm Qasr", notes: "Shanghai, Ningbo, and Guangzhou connect to Umm Qasr — plan production timelines accordingly." },
    { route: "UAE → Iraq", transit: "3–5 days", mode: "Land — Safwan crossing", notes: "Dubai Jebel Ali to Baghdad via Safwan — fast re-export option for goods staged in the UAE." },
]

export default function ShippingRoutes() {
    return (
        <section className="py-12 sm:py-16">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
                <div className="flex justify-between items-end gap-6 flex-wrap mb-9">
                    <div>
                        <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
                            Active shipping routes
                        </span>
                        <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-3 mb-[10px] text-[#0E241C]">
                            Established carriers <span className="text-[#C9A853] italic">and customs relationships.</span>
                        </h2>
                    </div>
                </div>
                <div className="flex flex-col gap-3 sm:hidden">
                    {routes.map((r) => (
                        <div key={r.route} className="bg-white border border-[#F0EADB] rounded-[10px] p-4">
                            <div className="flex items-center justify-between gap-3">
                                <span className="font-bold text-[0.95rem] text-[#234A3A]">{r.route}</span>
                                <span className="text-[0.85rem] text-[#1C2420]">{r.transit}</span>
                            </div>
                            <div className="text-[0.85rem] text-[#1C2420] mt-1.5">{r.mode}</div>
                            <p className="text-[0.85rem] text-[#1C2420] leading-[1.55] mt-2">{r.notes}</p>
                        </div>
                    ))}
                </div>
                <div className="hidden sm:block overflow-x-auto">
                    <table className="w-full border-collapse text-[0.92rem]">
                        <thead>
                            <tr>
                                <th className="text-left p-3 px-4 border-b border-[#F0EADB] text-[0.75rem] uppercase tracking-[0.05em] text-[#1C2420] font-semibold">Route</th>
                                <th className="text-left p-3 px-4 border-b border-[#F0EADB] text-[0.75rem] uppercase tracking-[0.05em] text-[#1C2420] font-semibold">Transit</th>
                                <th className="text-left p-3 px-4 border-b border-[#F0EADB] text-[0.75rem] uppercase tracking-[0.05em] text-[#1C2420] font-semibold">Mode</th>
                                <th className="text-left p-3 px-4 border-b border-[#F0EADB] text-[0.75rem] uppercase tracking-[0.05em] text-[#1C2420] font-semibold">Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {routes.map((r) => (
                                <tr key={r.route}>
                                    <td className="p-3 px-4 border-b border-[#F0EADB] align-top font-bold text-[#234A3A] whitespace-nowrap tabular-nums">{r.route}</td>
                                    <td className="p-3 px-4 border-b border-[#F0EADB] align-top">{r.transit}</td>
                                    <td className="p-3 px-4 border-b border-[#F0EADB] align-top">{r.mode}</td>
                                    <td className="p-3 px-4 border-b border-[#F0EADB] align-top last:border-none">{r.notes}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
