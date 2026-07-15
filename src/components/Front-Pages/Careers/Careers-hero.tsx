import Link from "next/link";

export default function CareersHero() {
  return (
    <header className="px-7 py-[76px] pb-14 border-b border-[#F0EADB]">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center text-center">
        <span className="block text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853] mb-[14px]">
          ◆ Careers at Zafir360
        </span>
        <h1 className="max-w-[760px] mb-[18px] text-[clamp(2.1rem,1.6rem+2vw,3.4rem)] font-bold tracking-[-0.02em] leading-[1.1] text-[#0E241C]">
          Build Iraq's <span className="text-[#C9A853] italic">commerce future.</span>
        </h1>
        <p className="text-[1.1rem] text-[#1C2420] max-w-[640px] leading-[1.65]">
          Join a team of builders solving hard problems that matter to Iraqi buyers, sellers, and suppliers.
        </p>
        <div className="flex gap-3 flex-wrap justify-center mt-6">
          <a
            href="#open-roles"
            className="inline-flex items-center justify-center gap-2 px-[18px] py-[9px] rounded-[6px] text-[0.92rem] font-semibold bg-[#17362A] text-white no-underline hover:bg-[#234A3A] hover:-translate-y-[1px] hover:shadow-[0_8px_20px_rgba(23,54,42,0.28)] transition-all duration-150"
          >
            See Open Roles
          </a>
          <Link
            href="/leadership-team"
            className="inline-flex items-center justify-center gap-2 px-[18px] py-[9px] rounded-[6px] text-[0.92rem] font-semibold bg-transparent text-[#0E241C] border border-[#F0EADB] no-underline hover:border-[#17362A] hover:text-[#234A3A] hover:-translate-y-[1px] transition-all duration-150"
          >
            Meet the Team
          </Link>
        </div>
      </div>
    </header>
  );
}
