import { ReactNode } from "react";

export default function AgreementDocument({ children }: { children: ReactNode }) {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-7">
        <div className="bg-white border-2 border-[#F0EADB] rounded-[20px] overflow-hidden shadow-[0_1px_2px_rgba(14,36,28,0.06),0_1px_1px_rgba(14,36,28,0.04)]">
          <div className="flex items-center justify-between gap-2 flex-wrap px-4 sm:px-8 py-4 bg-[#0E241C] text-white">
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.08em]">Zafir360 Official Agreement</span>
            <span className="inline-flex items-center gap-1.5 text-[0.72rem] font-semibold px-[10px] py-[3px] rounded-[6px] bg-white/10">
              ✓ Binding
            </span>
          </div>
          <div
            className="p-5 sm:p-8 md:p-12
            [&_h2]:text-[1.2rem] [&_h2]:font-bold [&_h2]:text-[#0E241C] [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:pl-4 [&_h2]:border-l-[3px] [&_h2]:border-[#17362A] [&_h2]:scroll-mt-24
            [&_p]:text-[0.95rem] [&_p]:text-[#1C2420] [&_p]:leading-[1.75] [&_p]:mb-4
            [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_ul]:text-[0.95rem] [&_ul]:text-[#1C2420] [&_ul]:mb-4
            [&_li]:leading-[1.7]
            [&_strong]:text-[#0E241C] [&_strong]:font-semibold
            [&_a]:text-[#234A3A] [&_a]:underline"
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
