"use client"

export default function SupplierRegistrationForm() {
    return (
        <section className="py-16 border-t border-[#F0EADB] border-b border-[#F0EADB] bg-[#F0EADB]">
            <div className="max-w-[1180px] mx-auto px-7">
                <div className="flex justify-between items-end gap-6 flex-wrap mb-9">
                    <div>
                        <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
                            Apply now
                        </span>
                        <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-3 mb-[10px]">
                            Start your supplier application.
                        </h2>
                    </div>
                </div>
                <form
                    className="grid grid-cols-1 sm:grid-cols-2 gap-[14px] max-w-[720px]"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="flex flex-col gap-[6px]">
                        <label htmlFor="sr-company" className="text-[0.82rem] font-semibold text-[#1C2420]">Company name</label>
                        <input id="sr-company" type="text" placeholder="Legal business name" className="px-[14px] py-[11px] border border-[#F0EADB] rounded-[6px] font-[inherit] text-[0.92rem] text-[#0E241C] bg-white focus:outline-none focus:border-[#17362A] focus:shadow-[0_0_0_3px_#F0EADB]" />
                    </div>
                    <div className="flex flex-col gap-[6px]">
                        <label htmlFor="sr-email" className="text-[0.82rem] font-semibold text-[#1C2420]">Business email</label>
                        <input id="sr-email" type="email" placeholder="you@company.com" className="px-[14px] py-[11px] border border-[#F0EADB] rounded-[6px] font-[inherit] text-[0.92rem] text-[#0E241C] bg-white focus:outline-none focus:border-[#17362A] focus:shadow-[0_0_0_3px_#F0EADB]" />
                    </div>
                    <div className="flex flex-col gap-[6px]">
                        <label htmlFor="sr-country" className="text-[0.82rem] font-semibold text-[#1C2420]">Country</label>
                        <select id="sr-country" className="px-[14px] py-[11px] border border-[#F0EADB] rounded-[6px] font-[inherit] text-[0.92rem] text-[#0E241C] bg-white focus:outline-none focus:border-[#17362A] focus:shadow-[0_0_0_3px_#F0EADB]">
                            <option>Turkey</option>
                            <option>China</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-[6px]">
                        <label htmlFor="sr-category" className="text-[0.82rem] font-semibold text-[#1C2420]">Product category</label>
                        <select id="sr-category" className="px-[14px] py-[11px] border border-[#F0EADB] rounded-[6px] font-[inherit] text-[0.92rem] text-[#0E241C] bg-white focus:outline-none focus:border-[#17362A] focus:shadow-[0_0_0_3px_#F0EADB]">
                            <option>Home Appliances & Electronics</option>
                            <option>Textile & Apparel</option>
                            <option>Building Materials</option>
                            <option>Food & FMCG</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-[6px] sm:col-span-2">
                        <label htmlFor="sr-capacity" className="text-[0.82rem] font-semibold text-[#1C2420]">Monthly production capacity</label>
                        <input id="sr-capacity" type="text" placeholder="e.g. 80,000 units / month" className="px-[14px] py-[11px] border border-[#F0EADB] rounded-[6px] font-[inherit] text-[0.92rem] text-[#0E241C] bg-white focus:outline-none focus:border-[#17362A] focus:shadow-[0_0_0_3px_#F0EADB]" />
                    </div>
                    <div className="flex flex-col gap-[6px] sm:col-span-2">
                        <label htmlFor="sr-notes" className="text-[0.82rem] font-semibold text-[#1C2420]">Anything else we should know</label>
                        <textarea id="sr-notes" placeholder="Certifications, export history, current buyers..." className="px-[14px] py-[11px] border border-[#F0EADB] rounded-[6px] font-[inherit] text-[0.92rem] text-[#0E241C] bg-white resize-y min-h-[100px] focus:outline-none focus:border-[#17362A] focus:shadow-[0_0_0_3px_#F0EADB]" />
                    </div>
                    <div className="sm:col-span-2">
                        <button type="submit" className="inline-flex items-center justify-center gap-2 px-[18px] py-[10px] rounded-[8px] text-[0.9rem] font-semibold bg-[#17362A] text-white no-underline hover:bg-[#234A3A] hover:-translate-y-px hover:shadow-[0_8px_20px_rgba(23,54,42,0.28)] transition-all duration-200 cursor-pointer">
                            Submit Application →
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}
