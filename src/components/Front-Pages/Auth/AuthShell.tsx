import Link from "next/link";
import { ReactNode } from "react";
import { Lock, Truck } from "@/components/common/NavIcons";

const points = [
  { icon: "✓", text: "Every supplier personally verified by Sam before listing" },
  { icon: <Lock />, text: "Escrow-protected payments on every wholesale order" },
  { icon: <Truck />, text: "Door-to-door delivery through JayakHub, all 18 governorates" },
];

interface AuthShellProps {
  lang: string;
  eyebrow: string;
  title: string;
  lede: string;
  children: ReactNode;
}

export default function AuthShell({ lang, eyebrow, title, lede, children }: AuthShellProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      <div className="hidden lg:flex flex-col justify-between bg-[#0E241C] text-white p-12">
        <Link href={`/${lang}`} className="flex items-center gap-2 font-extrabold text-[1.05rem] tracking-tight no-underline text-white">
          <span aria-hidden="true" className="text-[1.1rem] leading-none">←</span>
          <span className="relative w-[22px] h-[22px] rounded-[5px] bg-white inline-block flex-none">
            <span className="absolute w-[8px] h-[8px] bg-[#17362A] rounded-[2px] left-[6px] top-[6px]" />
          </span>
          Zafir360
        </Link>

        <div className="max-w-[420px]">
          <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#17362A]">
            {eyebrow}
          </span>
          <h1 className="text-[2rem] font-bold tracking-[-0.02em] leading-[1.15] mt-3">{title}</h1>
          <p className="text-white/70 text-[0.98rem] leading-[1.65] mt-3">{lede}</p>

          <div className="flex flex-col gap-4 mt-9 pt-8 border-t border-white/15">
            {points.map((p) => (
              <div key={p.text} className="flex items-start gap-3">
                <span className="flex-none flex items-center justify-center size-7 rounded-full bg-white/10 text-[0.85rem]">
                  {p.icon}
                </span>
                <span className="text-white/80 text-[0.88rem] leading-[1.5] pt-0.5">{p.text}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-white/40 text-[0.78rem]">© 2026 Zafir360. Iraq's premier B2B2C marketplace.</p>
      </div>

      <div className="flex items-center justify-center p-7 py-12 bg-[#FAF6EA]">
        <div className="w-full max-w-[400px]">
          <div className="lg:hidden mb-8">
            <Link href={`/${lang}`} className="flex items-center gap-2 font-extrabold text-[1.05rem] tracking-tight no-underline text-[#0E241C]">
              <span aria-hidden="true" className="text-[1.1rem] leading-none">←</span>
              <span className="relative w-[22px] h-[22px] rounded-[5px] bg-[#0E241C] inline-block flex-none">
                <span className="absolute w-[8px] h-[8px] bg-[#17362A] rounded-[2px] left-[6px] top-[6px]" />
              </span>
              Zafir360
            </Link>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
