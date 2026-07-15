"use client";

import { useEffect, useRef, useState } from "react";

const targets = [
  { target: 85, suffix: "%", label: "Seller satisfaction target" },
  { target: 98, suffix: "%", label: "On-time delivery SLA" },
  { target: 72, suffix: "%", label: "Return rate reduction, YoY" },
  { target: 100, suffix: "%", label: "Verified-only supplier network" },
];

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
    <div ref={ref} className="text-[2rem] font-extrabold tracking-[-0.02em] text-[#0E241C] tabular-nums">
      {value}{suffix}
    </div>
  );
}

export default function Targets() {
  return (
    <section className="py-16">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="mb-9">
          <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
            Our targets
          </span>
          <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-[10px] text-[#0E241C]">
            What we hold <span className="text-[#C9A853] italic">ourselves to.</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {targets.map((s) => (
            <div key={s.label} className="border border-[#F0EADB] rounded-[12px] p-6 text-center">
              <CountUpStat target={s.target} suffix={s.suffix} />
              <div className="text-[0.85rem] text-[#1C2420] mt-2 leading-[1.4]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
