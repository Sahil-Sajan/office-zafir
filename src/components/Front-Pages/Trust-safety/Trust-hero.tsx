"use client";

import { useEffect, useRef, useState } from "react";

function CountUpStat({ target, suffix }: { target: number; suffix: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 900;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          setValue(Math.round(progress * target));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-[1.7rem] font-extrabold tracking-[-0.02em] text-[#0E241C] tabular-nums">
      {value}{suffix}
    </div>
  );
}

export default function TrustHero() {
  return (
    <header className="px-4 sm:px-7 py-12 sm:py-[76px] pb-10 sm:pb-14 border-b border-[#F0EADB]">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center text-center">
        <span className="block text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853] mb-[14px]">
          Why buyers pay before they see the goods land
        </span>
        <h1 className="max-w-[760px] mb-[18px] text-[clamp(2.1rem,1.6rem+2vw,3.4rem)] font-bold tracking-[-0.02em] leading-[1.1] text-[#0E241C]">
          No factory is listed <span className="text-[#C9A853] italic">until Sam has stood in it.</span>
        </h1>
        <p className="text-[1.1rem] text-[#1C2420] max-w-[640px] leading-[1.65]">
          Alibaba lets any factory self-list. Zafir360 doesn't. Every supplier is personally visited and verified before a single product goes live — there is no automated path to a listing. Trust is a gate, not a badge you can buy.
        </p>
        <div className="flex gap-6 sm:gap-9 flex-wrap justify-center mt-8 sm:mt-10 pt-8 border-t border-[#F0EADB]">
          <div>
            <CountUpStat target={100} suffix="%" />
            <div className="text-[0.85rem] text-[#1C2420] mt-[2px]">Factories personally visited</div>
          </div>
          <div>
            <div className="text-[1.7rem] font-extrabold tracking-[-0.02em] text-[#0E241C] tabular-nums">24h</div>
            <div className="text-[0.85rem] text-[#1C2420] mt-[2px]">Supplier RFQ response SLA</div>
          </div>
          <div>
            <CountUpStat target={3} suffix="" />
            <div className="text-[0.85rem] text-[#1C2420] mt-[2px]">Strikes before a fraud ban</div>
          </div>
        </div>
      </div>
    </header>
  );
}
