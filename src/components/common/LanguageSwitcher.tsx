"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { locales, localeNames, type Locale } from "@/config/i18n";
import { flagEn, flagAr, flagKu } from "@/utils/images";

interface LanguageSwitcherProps {
  currentLang: string;
}

const localeFlags: Record<Locale, string> = {
  en: flagEn.src,
  ar: flagAr.src,
  ku: flagKu.src,
};

export function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  function switchLocale(locale: Locale) {
    const newPath = pathname.replace(`/${currentLang}`, `/${locale}`);
    router.push(newPath);
    setOpen(false);
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-[6px] text-[0.85rem] font-medium text-[#1C2420] border border-[#F0EADB] bg-white hover:border-[#17362A] hover:text-[#0E241C] transition-colors duration-150 cursor-pointer"
      >
        <img
          src={localeFlags[currentLang as Locale]}
          alt=""
          aria-hidden="true"
          className="w-[18px] h-[13px] rounded-[2px] object-cover shrink-0"
        />
        {localeNames[currentLang as Locale] ?? currentLang}
        <span className={`text-[0.6rem] transition-transform duration-200 ${open ? "rotate-180" : ""}`}>▾</span>
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute left-1/2 -translate-x-1/2 top-full z-50 mt-1.5 w-40 rounded-[10px] border border-[#F0EADB] bg-white p-1.5 shadow-[0_16px_40px_rgba(14,36,28,0.12)]"
        >
          {locales.map((locale) => (
            <button
              key={locale}
              type="button"
              role="option"
              aria-selected={locale === currentLang}
              onClick={() => switchLocale(locale)}
              className={`flex w-full items-center gap-2 rounded-[6px] px-3 py-2 text-start text-[0.85rem] transition-colors duration-150 cursor-pointer ${
                locale === currentLang
                  ? "font-semibold text-[#234A3A] bg-[#F0EADB]"
                  : "text-[#1C2420] hover:bg-[#F0EADB] hover:text-[#0E241C]"
              }`}
            >
              <img
                src={localeFlags[locale]}
                alt=""
                aria-hidden="true"
                className="w-[18px] h-[13px] rounded-[2px] object-cover shrink-0"
              />
              {localeNames[locale]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
