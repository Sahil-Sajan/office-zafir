import { Mail } from "@/components/common/NavIcons";

export default function PressHero() {
  return (
    <header className="px-4 sm:px-7 py-12 sm:py-[76px] pb-10 sm:pb-14 border-b border-[#F0EADB]">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center text-center">
        <span className="block text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853] mb-[14px]">
          ◆ Press &amp; Media
        </span>
        <h1 className="max-w-[760px] mb-[18px] text-[clamp(2.1rem,1.6rem+2vw,3.4rem)] font-bold tracking-[-0.02em] leading-[1.1] text-[#0E241C]">
          News &amp; <span className="text-[#C9A853] italic">press room.</span>
        </h1>
        <p className="text-[1.1rem] text-[#1C2420] max-w-[640px] leading-[1.65]">
          The latest from Zafir360 — product news, milestones, partnerships, and more.
        </p>
        <p className="flex items-center justify-center gap-1.5 text-[0.9rem] text-[#5B6961] mt-4">
          <Mail /> Media contact: <a href="mailto:press@zafir360.com" className="text-[#234A3A] underline">press@zafir360.com</a>
        </p>
      </div>
    </header>
  );
}
