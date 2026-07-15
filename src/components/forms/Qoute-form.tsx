"use client"

import Link from "next/link"
import { DocumentText, Mail, Handshake, Sparkles, Storefront } from "@/components/common/NavIcons"

export default function QuoteForm() {
    return (
        <section className="py-12 sm:py-16">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10">
                    {/* Form */}
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]"
                    >
                        <div className="col-span-full">
                            <h3 className="text-[1.05rem] font-bold mb-1">Product requirements</h3>
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <label className="text-[0.82rem] font-semibold text-[#1C2420]" htmlFor="rfq-name">Product Name *</label>
                            <input id="rfq-name" type="text" placeholder="e.g. Portland Cement 42.5N" className="p-[11px_14px] border border-[#F0EADB] rounded-[6px] text-[0.92rem] text-[#0E241C] bg-white focus:outline-none focus:border-[#17362A] focus:shadow-[0_0_0_3px_#F0EADB]" />
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <label className="text-[0.82rem] font-semibold text-[#1C2420]" htmlFor="rfq-cat">Product Category *</label>
                            <select id="rfq-cat" className="p-[11px_14px] border border-[#F0EADB] rounded-[6px] text-[0.92rem] text-[#0E241C] bg-white focus:outline-none focus:border-[#17362A] focus:shadow-[0_0_0_3px_#F0EADB]">
                                <option>Select a category</option>
                                <option>Construction Materials</option>
                                <option>Electronics & Tech</option>
                                <option>Textiles & Fashion</option>
                                <option>Food & Beverage</option>
                                <option>Home & Furniture</option>
                                <option>Auto Parts</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <label className="text-[0.82rem] font-semibold text-[#1C2420]" htmlFor="rfq-qty">Quantity Needed *</label>
                            <input id="rfq-qty" type="text" placeholder="e.g. 500" className="p-[11px_14px] border border-[#F0EADB] rounded-[6px] text-[0.92rem] text-[#0E241C] bg-white focus:outline-none focus:border-[#17362A] focus:shadow-[0_0_0_3px_#F0EADB]" />
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <label className="text-[0.82rem] font-semibold text-[#1C2420]" htmlFor="rfq-unit">Unit *</label>
                            <select id="rfq-unit" className="p-[11px_14px] border border-[#F0EADB] rounded-[6px] text-[0.92rem] text-[#0E241C] bg-white focus:outline-none focus:border-[#17362A] focus:shadow-[0_0_0_3px_#F0EADB]">
                                <option>Select unit</option>
                                <option>Units</option>
                                <option>Cartons</option>
                                <option>Pallets</option>
                                <option>Tons</option>
                                <option>Containers</option>
                            </select>
                        </div>
                        <div className="col-span-full flex flex-col gap-[6px]">
                            <label className="text-[0.82rem] font-semibold text-[#1C2420]" htmlFor="rfq-spec">Specifications *</label>
                            <textarea id="rfq-spec" placeholder="Describe grade, brand preference, packaging type, certifications, or any specific requirements..." className="p-[11px_14px] border border-[#F0EADB] rounded-[6px] text-[0.92rem] text-[#0E241C] bg-white min-h-[120px] resize-y focus:outline-none focus:border-[#17362A] focus:shadow-[0_0_0_3px_#F0EADB]"></textarea>
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <label className="text-[0.82rem] font-semibold text-[#1C2420]" htmlFor="rfq-price">Target Price (optional)</label>
                            <input id="rfq-price" type="text" placeholder="e.g. 150,000 IQD per ton" className="p-[11px_14px] border border-[#F0EADB] rounded-[6px] text-[0.92rem] text-[#0E241C] bg-white focus:outline-none focus:border-[#17362A] focus:shadow-[0_0_0_3px_#F0EADB]" />
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <label className="text-[0.82rem] font-semibold text-[#1C2420]" htmlFor="rfq-loc">Delivery Location *</label>
                            <select id="rfq-loc" className="p-[11px_14px] border border-[#F0EADB] rounded-[6px] text-[0.92rem] text-[#0E241C] bg-white focus:outline-none focus:border-[#17362A] focus:shadow-[0_0_0_3px_#F0EADB]">
                                <option>Select governorate</option>
                                <option>Baghdad</option>
                                <option>Basra</option>
                                <option>Erbil</option>
                                <option>Mosul</option>
                                <option>Najaf</option>
                            </select>
                        </div>
                        <div className="col-span-full">
                            <h3 className="text-[1.05rem] font-bold mt-2 mb-1">Contact information</h3>
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <label className="text-[0.82rem] font-semibold text-[#1C2420]" htmlFor="rfq-fname">Full Name *</label>
                            <input id="rfq-fname" type="text" placeholder="Your name" className="p-[11px_14px] border border-[#F0EADB] rounded-[6px] text-[0.92rem] text-[#0E241C] bg-white focus:outline-none focus:border-[#17362A] focus:shadow-[0_0_0_3px_#F0EADB]" />
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <label className="text-[0.82rem] font-semibold text-[#1C2420]" htmlFor="rfq-email">Email *</label>
                            <input id="rfq-email" type="email" placeholder="you@company.com" className="p-[11px_14px] border border-[#F0EADB] rounded-[6px] text-[0.92rem] text-[#0E241C] bg-white focus:outline-none focus:border-[#17362A] focus:shadow-[0_0_0_3px_#F0EADB]" />
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <label className="text-[0.82rem] font-semibold text-[#1C2420]" htmlFor="rfq-phone">Phone *</label>
                            <input id="rfq-phone" type="tel" placeholder="+964 7xx xxx xxxx" className="p-[11px_14px] border border-[#F0EADB] rounded-[6px] text-[0.92rem] text-[#0E241C] bg-white focus:outline-none focus:border-[#17362A] focus:shadow-[0_0_0_3px_#F0EADB]" />
                        </div>
                        <div className="col-span-full">
                            <button type="submit" className="inline-flex items-center justify-center gap-2 px-[18px] py-[10px] rounded-[8px] text-[0.9rem] font-semibold bg-[#17362A] text-white no-underline hover:bg-[#234A3A] hover:-translate-y-px hover:shadow-[0_8px_20px_rgba(23,54,42,0.28)] transition-all duration-200 self-start">
                                Submit RFQ — Get Quotes in 24–48 Hours
                            </button>
                            <p className="text-[0.78rem] text-[#1C2420] mt-[10px]">Your information is shared only with matched, verified suppliers.</p>
                        </div>
                    </form>

                    {/* Info stack */}
                    <div className="flex flex-col gap-5">
                        <div className="bg-white border border-[#F0EADB] rounded-[10px] p-5 sm:p-[26px] relative transition-all duration-250 hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)]">
                            <h3 className="text-[1.05rem] font-bold mb-2 inline-flex items-center gap-2"><DocumentText /> Submit Your RFQ</h3>
                            <p className="text-[0.92rem] text-[#1C2420] leading-[1.6]">Fill in product details, quantity, and target price. The more specific, the better quotes you get.</p>
                        </div>
                        <div className="bg-white border border-[#F0EADB] rounded-[10px] p-5 sm:p-[26px] relative transition-all duration-250 hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)]">
                            <h3 className="text-[1.05rem] font-bold mb-2 inline-flex items-center gap-2"><Mail /> Suppliers Respond</h3>
                            <p className="text-[0.92rem] text-[#1C2420] leading-[1.6]">Matched suppliers review your request and send competitive quotes, typically within 24–48 hours.</p>
                        </div>
                        <div className="bg-white border border-[#F0EADB] rounded-[10px] p-5 sm:p-[26px] relative transition-all duration-250 hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)]">
                            <h3 className="text-[1.05rem] font-bold mb-2 inline-flex items-center gap-2"><Handshake /> Compare &amp; Negotiate</h3>
                            <p className="text-[0.92rem] text-[#1C2420] leading-[1.6]">All quotes side by side in one comparison matrix — negotiate terms and confirm your preferred supplier.</p>
                        </div>
                        <div className="bg-white border border-[#F0EADB] rounded-[10px] p-6">
                            <h3 className="text-[1.05rem] font-bold inline-flex items-center gap-2"><Sparkles /> Tips for better quotes</h3>
                            <ul className="mt-3 pl-0 list-none flex flex-col gap-2 text-[0.88rem] text-[#1C2420]">
                                <li>→ Be specific about grade, brand, and packaging</li>
                                <li>→ Set a realistic target price for faster responses</li>
                                <li>→ Mention your delivery timeline if it&apos;s urgent</li>
                                <li>→ Higher quantities attract more competitive quotes</li>
                            </ul>
                        </div>
                        <div className="border-l-[3px] border-[#17362A] py-4 px-5 bg-[#F0EADB] rounded-r-[6px] text-[0.92rem] text-[#332F27]">
                            <span className="inline-flex items-center gap-2"><Storefront /> Already know your supplier?</span> <Link href="/categories" className="text-inherit underline">Browse wholesale products directly →</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
