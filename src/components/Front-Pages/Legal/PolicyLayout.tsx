import { ReactNode } from "react";

interface PolicyLayoutProps {
  toc: { id: string; label: string }[];
  children: ReactNode;
}

export default function PolicyLayout({ toc, children }: PolicyLayoutProps) {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 lg:gap-12">
        <nav className="hidden lg:block">
          <div className="sticky top-24">
            <span className="block text-[0.72rem] font-semibold uppercase tracking-[0.05em] text-[#5B6961] mb-3">
              On this page
            </span>
            <ul className="flex flex-col gap-2 border-l border-[#F0EADB] pl-4">
              {toc.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-[0.85rem] text-[#1C2420] no-underline hover:text-[#234A3A] transition-colors duration-150">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div
          className="max-w-[720px] [&_h2]:text-[1.3rem] [&_h2]:font-bold [&_h2]:text-[#0E241C] [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:pb-2 [&_h2]:border-b [&_h2]:border-[#F0EADB] [&_h2]:scroll-mt-24
          [&_h3]:text-[1.05rem] [&_h3]:font-semibold [&_h3]:text-[#0E241C] [&_h3]:mt-6 [&_h3]:mb-2
          [&_p]:text-[0.95rem] [&_p]:text-[#1C2420] [&_p]:leading-[1.75] [&_p]:mb-4
          [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_ul]:text-[0.95rem] [&_ul]:text-[#1C2420] [&_ul]:mb-4
          [&_li]:leading-[1.7]
          [&_strong]:text-[#0E241C] [&_strong]:font-semibold
          [&_a]:text-[#234A3A] [&_a]:underline"
        >
          {children}
        </div>
      </div>
    </section>
  );
}
