"use client"

export default function ContactForm() {
    return (
        <section className="py-12 sm:py-16 border-t border-[#F0EADB] border-b border-[#F0EADB] bg-[#F0EADB]">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-7 flex flex-col items-center">
                <div className="flex flex-col items-center text-center gap-6 mb-9 max-w-[720px]">
                    <div>
                        <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
                            Send us a message
                        </span>
                        <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-3 mb-[10px]">
                            We read every message and reply within one business day.
                        </h2>
                    </div>
                </div>
                <form
                    className="grid grid-cols-1 sm:grid-cols-2 gap-[14px] w-full max-w-[720px]"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="flex flex-col gap-[6px]">
                        <label htmlFor="c-name" className="text-[0.82rem] font-semibold text-[#1C2420]">Your name</label>
                        <input id="c-name" type="text" placeholder="Full name" className="px-[14px] py-[11px] border border-[#F0EADB] rounded-[6px] font-[inherit] text-[0.92rem] text-[#0E241C] bg-white focus:outline-none focus:border-[#17362A] focus:shadow-[0_0_0_3px_#F0EADB]" />
                    </div>
                    <div className="flex flex-col gap-[6px]">
                        <label htmlFor="c-email" className="text-[0.82rem] font-semibold text-[#1C2420]">Email address</label>
                        <input id="c-email" type="email" placeholder="you@company.com" className="px-[14px] py-[11px] border border-[#F0EADB] rounded-[6px] font-[inherit] text-[0.92rem] text-[#0E241C] bg-white focus:outline-none focus:border-[#17362A] focus:shadow-[0_0_0_3px_#F0EADB]" />
                    </div>
                    <div className="flex flex-col gap-[6px] sm:col-span-2">
                        <label htmlFor="c-subject" className="text-[0.82rem] font-semibold text-[#1C2420]">Subject</label>
                        <select
                            id="c-subject"
                            className="appearance-none pl-[14px] pr-10 py-[11px] border border-[#F0EADB] rounded-[6px] font-[inherit] text-[0.92rem] text-[#0E241C] bg-white bg-no-repeat focus:outline-none focus:border-[#17362A] focus:shadow-[0_0_0_3px_#F0EADB]"
                            style={{
                                backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236B6759' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
                                backgroundPosition: "right 14px center",
                            }}
                        >
                            <option>Select subject</option>
                            <option>Buying on Zafir360</option>
                            <option>Selling on Zafir360</option>
                            <option>Supplier partnership</option>
                            <option>Press &amp; media</option>
                            <option>Something else</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-[6px] sm:col-span-2">
                        <label htmlFor="c-message" className="text-[0.82rem] font-semibold text-[#1C2420]">Your message</label>
                        <textarea id="c-message" placeholder="Your message..." className="px-[14px] py-[11px] border border-[#F0EADB] rounded-[6px] font-[inherit] text-[0.92rem] text-[#0E241C] bg-white resize-y min-h-[120px] focus:outline-none focus:border-[#17362A] focus:shadow-[0_0_0_3px_#F0EADB]" />
                    </div>
                    <div className="sm:col-span-2">
                        <button type="submit" className="inline-flex items-center justify-center gap-2 px-[18px] py-[10px] rounded-[8px] text-[0.9rem] font-semibold bg-[#17362A] text-white no-underline hover:bg-[#234A3A] hover:-translate-y-px hover:shadow-[0_8px_20px_rgba(23,54,42,0.28)] transition-all duration-200 cursor-pointer">
                            Send Message →
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}
