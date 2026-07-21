import Link from "next/link"

export default function GlobalCTA() {
    return (
        <section className="py-12 sm:py-16">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
                <div className="relative overflow-hidden text-center flex flex-col items-center bg-[#0E241C] text-white rounded-[20px] p-6 sm:p-12 lg:p-16">
                    <div className="absolute top-0 right-0 w-60 h-60 bg-[rgba(23,54,42,0.08)] rounded-full blur-[60px] pointer-events-none translate-x-[30%] -translate-y-[30%]" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-[rgba(23,54,42,0.06)] rounded-full blur-[50px] pointer-events-none -translate-x-[30%] translate-y-[30%]" />
                    <div className="relative">
                        <h2 className="text-[clamp(1.8rem,1.5rem+1.2vw,2.6rem)] font-bold tracking-[-0.02em] leading-[1.1] max-w-[600px] mx-auto text-white">
                            Ready to Build Your Global Presence?
                        </h2>
                        <p className="text-[#C9A853] text-[1.05rem] max-w-[520px] mx-auto mt-4 leading-[1.7]">
                            Create your account in minutes and unlock access to a secure, scalable, and premium marketplace
                            experience.
                        </p>
                        <div className="mt-8">
                            <Link
                                href="/login"
                                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-[8px] text-[0.95rem] font-semibold bg-white text-[#0E241C] no-underline hover:bg-[#F0EADB] hover:-translate-y-[1px] transition-all duration-200 w-full sm:w-auto"
                            >
                                Create Your Free Account
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
