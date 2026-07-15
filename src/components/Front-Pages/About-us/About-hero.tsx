import Link from "next/link"

interface AboutHeroProps {
  about: Record<string, string>;
}

export default function AboutHero({ about }: AboutHeroProps) {
  const t = (key: string, fallback: string) => about[key] ?? fallback;

  return (
    <header className="px-4 sm:px-7 pb-10 sm:pb-14 border-b border-[#F0EADB]">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center text-center">
        <span className="block text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853] mb-[14px]">
          {t("hero.eyebrow", "About Zafir360")}
        </span>
        <h1 className="max-w-[760px] mb-[18px] text-[clamp(2.1rem,1.6rem+2vw,3.4rem)] font-bold tracking-[-0.02em] leading-[1.1] text-[#0E241C]">
          {about["hero.title"] ?? <>Empowering Iraq&rsquo;s <span className="text-[#C9A853] italic">digital economy.</span></>}
        </h1>
        <p className="text-[1.1rem] text-[#1C2420] max-w-[640px] leading-[1.65]">
          {t("hero.lede", "Zafir360 is transforming Iraqi commerce by connecting buyers and sellers through trust, technology, and a unified marketplace. We enable seamless transactions, empower local businesses, and drive the growth of Iraq\u2019s digital economy.")}
        </p>
        <div className="flex gap-3 flex-wrap justify-center mt-6">
          <Link
            href="/our-mission-vision"
            className="inline-flex items-center justify-center gap-2 px-[18px] py-[9px] rounded-[6px] text-[0.92rem] font-semibold bg-[#17362A] text-white no-underline hover:bg-[#234A3A] hover:-translate-y-[1px] hover:shadow-[0_8px_20px_rgba(23,54,42,0.28)] transition-all duration-150"
          >
            {t("hero.btn1", "Our Story")}
          </Link>
          <Link
            href="/become-a-seller"
            className="inline-flex items-center justify-center gap-2 px-[18px] py-[9px] rounded-[6px] text-[0.92rem] font-semibold bg-transparent text-[#0E241C] border border-[#F0EADB] no-underline hover:border-[#17362A] hover:text-[#234A3A] hover:-translate-y-[1px] transition-all duration-150"
          >
            {t("hero.btn2", "Join the Movement")}
          </Link>
        </div>
      </div>
    </header>
  )
}
