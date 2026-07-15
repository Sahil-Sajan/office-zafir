"use client";

import Link from "next/link";
import { navIcons } from "@/components/common/NavIcons";

interface CardItem {
  icon: string;
  title: string;
  desc: string;
  href: string;
}

export default function LinkCards({ lang, items }: { lang: string; items: CardItem[] }) {
  return (
    <section className="py-16">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => {
            const Icon = navIcons[item.icon];
            return (
              <Link
                key={item.href}
                href={`/${lang}${item.href}`}
                className="flex items-start gap-3 p-5 rounded-[10px] border border-[#F0EADB] no-underline hover:border-[#17362A] hover:bg-[#F0EADB] transition-colors duration-150"
              >
                <span className="flex-none flex items-center justify-center size-9 rounded-[8px] border border-[#E2C368] bg-[#F0EADB] text-[#17362A]">
                  {Icon ? <Icon /> : null}
                </span>
                <span className="flex flex-col">
                  <span className="text-[0.94rem] font-semibold text-[#0E241C]">{item.title}</span>
                  <span className="text-[0.82rem] text-[#5B6961]">{item.desc}</span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
