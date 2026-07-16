"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navEntries } from "@/config/navigation";
import { navIcons, Heart, ShoppingCart, Menu, Close } from "./NavIcons";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { logo } from "@/utils/images";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";

interface NavbarProps {
  lang: string;
  nav: Record<string, string>;
}

export function Navbar({ lang, nav }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count } = useCart();
  const { count: wishlistCount } = useWishlist();

  useEffect(() => {
    if (!mobileOpen) return;
    document.body.style.overflow = "hidden";
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-[#F0EADB]/92 border-b border-[#F0EADB] px-4 sm:px-7">
      <div className="max-w-[1280px] mx-auto h-16 flex items-center justify-between">
        <Link href={`/${lang}`} className="flex items-center gap-1.5 font-extrabold text-[1.05rem] no-underline flex-none">
          <img src={logo.src} alt="Zafir360" className="h-[40px] w-auto" />
          Zafir360
        </Link>

        <ul className="hidden xl:flex items-center m-0 p-0 list-none shrink-0">
          {navEntries.map((entry) =>
            entry.type === "link" ? (
              <li key={entry.href} className="shrink-0">
                <Link
                  href={`/${lang}${entry.href}`}
                  className="flex items-center whitespace-nowrap px-2.5 py-2 text-[0.92rem] font-medium text-[#1C2420] rounded-[6px] no-underline hover:text-[#0E241C] hover:bg-[#F0EADB] transition-colors duration-150"
                >
                  {nav[entry.labelKey] ?? entry.labelKey}
                </Link>
              </li>
            ) : (
              <li key={entry.titleKey} className="relative group shrink-0">
                <span className="flex items-center gap-1 whitespace-nowrap px-2.5 py-2 text-[0.92rem] font-medium text-[#1C2420] rounded-[6px] cursor-pointer hover:text-[#0E241C] hover:bg-[#F0EADB] transition-colors duration-150">
                  {nav[entry.titleKey] ?? entry.titleKey}
                  <span className="text-[0.6rem] mt-[1px] group-hover:rotate-180 transition-transform duration-200">▾</span>
                </span>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white border border-[#F0EADB] rounded-[14px] shadow-[0_16px_40px_rgba(14,36,28,0.12)] p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
                  <div className="flex gap-8">
                    {entry.columns.map((col) => (
                      <div key={col.headingKey} className="flex flex-col gap-1 min-w-[260px]">
                        <span className="px-3 pb-2 text-[0.68rem] font-semibold uppercase tracking-wide text-[#5B6961]">
                          {nav[col.headingKey] ?? col.headingKey}
                        </span>
                        {col.items.map((item) => {
                          const Icon = navIcons[item.icon];
                          return (
                            <Link
                              key={item.href}
                              href={`/${lang}${item.href}`}
                              className="flex items-start gap-3 px-3 py-2 rounded-[8px] no-underline hover:bg-[#F0EADB] transition-colors duration-150"
                            >
                              <span className="flex-none flex items-center justify-center size-9 rounded-[8px] border border-[#E2C368] bg-[#F0EADB] text-[#17362A]">
                                {Icon ? <Icon /> : null}
                              </span>
                              <span className="flex flex-col">
                                <span className="text-[0.86rem] font-semibold text-[#0E241C]">
                                  {nav[item.labelKey] ?? item.labelKey}
                                </span>
                                <span className="text-[0.76rem] text-[#5B6961]">
                                  {nav[item.descKey] ?? ""}
                                </span>
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            )
          )}
        </ul>

        <div className="flex items-center gap-2.5 flex-none">
          <div className="hidden xl:flex items-center gap-2.5 flex-none">

            <LanguageSwitcher currentLang={lang} />
            <Link
              href={`/${lang}/wishlist`}
              aria-label="Wishlist"
              className="relative flex items-center justify-center size-8 rounded-[6px] border border-[#F0EADB] bg-white text-[#0E241C] hover:border-[#17362A] transition-colors duration-150"
            >
              <Heart filled={wishlistCount > 0} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full bg-[#C9A853] text-[#1C2420] text-[0.65rem] font-bold">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link
              href={`/${lang}/cart`}
              aria-label="Inquiry basket"
              className="relative flex items-center justify-center size-8 rounded-[6px] border border-[#F0EADB] bg-white text-[#0E241C] hover:border-[#17362A] transition-colors duration-150"
            >
              <ShoppingCart />
              {count > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full bg-[#C9A853] text-[#1C2420] text-[0.65rem] font-bold">
                  {count}
                </span>
              )}
            </Link>

            <Link
              href={`/${lang}/login`}
              className="flex-none inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-[6px] text-[0.85rem] font-semibold bg-[#17362A] text-white no-underline whitespace-nowrap hover:bg-[#234A3A] hover:-translate-y-[1px] hover:shadow-[0_8px_20px_rgba(23,54,42,0.28)] transition-all duration-150"
            >
              {nav["topnav.login"] ?? "Login"}
            </Link>
          </div>

          <div className="flex xl:hidden items-center gap-2">
            <Link
              href={`/${lang}/wishlist`}
              aria-label="Wishlist"
              className="relative flex items-center justify-center size-8 rounded-[6px] border border-[#F0EADB] bg-white text-[#0E241C] hover:border-[#17362A] transition-colors duration-150"
            >
              <Heart filled={wishlistCount > 0} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full bg-[#C9A853] text-[#1C2420] text-[0.65rem] font-bold">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link
              href={`/${lang}/cart`}
              aria-label="Inquiry basket"
              className="relative flex items-center justify-center size-8 rounded-[6px] border border-[#F0EADB] bg-white text-[#0E241C] hover:border-[#17362A] transition-colors duration-150"
            >
              <ShoppingCart />
              {count > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full bg-[#C9A853] text-[#1C2420] text-[0.65rem] font-bold">
                  {count}
                </span>
              )}
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex size-8 items-center justify-center rounded-md text-lg text-[#1C2420]"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <Close /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
        className={`xl:hidden fixed inset-0 z-[110] bg-[#0E241C]/45 transition-opacity duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      />

      {/* Slide-in drawer, half the mobile viewport width */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`xl:hidden fixed top-0 right-0 z-[120] h-dvh w-1/2 min-w-[240px] max-w-[360px] bg-[#FAF6EA] border-l border-[#F0EADB] flex flex-col transition-transform duration-300 ease-out ${mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between px-4 h-16 border-b border-[#F0EADB] flex-none">
          <span className="font-extrabold text-[0.95rem] text-[#0E241C]">Menu</span>
          <button
            onClick={() => setMobileOpen(false)}
            className="flex size-8 items-center justify-center rounded-md text-lg text-[#1C2420]"
            aria-label="Close menu"
          >
            <Close />
          </button>
        </div>

        <div className="overflow-y-auto px-4 py-4">
          {navEntries.map((entry) =>
            entry.type === "link" ? (
              <Link
                key={entry.href}
                href={`/${lang}${entry.href}`}
                className="block py-2 text-sm font-medium text-[#0E241C] no-underline"
                onClick={() => setMobileOpen(false)}
              >
                {nav[entry.labelKey] ?? entry.labelKey}
              </Link>
            ) : (
              <details key={entry.titleKey} className="group">
                <summary className="flex cursor-pointer items-center justify-between py-2 text-sm font-medium text-[#0E241C]">
                  {nav[entry.titleKey] ?? entry.titleKey}
                  <span className="text-xs text-[#5B6961] transition-transform duration-200 group-open:rotate-45">+</span>
                </summary>
                <div className="border-l-2 border-[#F0EADB] pb-2 pl-4">
                  {entry.columns.flatMap((col) => col.items).map((item) => {
                    const Icon = navIcons[item.icon];
                    return (
                      <Link
                        key={item.href}
                        href={`/${lang}${item.href}`}
                        className="flex items-center gap-2 py-1.5 text-sm text-[#5B6961] no-underline transition-colors hover:text-[#0E241C]"
                        onClick={() => setMobileOpen(false)}
                      >
                        <span className="flex-none text-[#17362A]">{Icon ? <Icon /> : null}</span>
                        {nav[item.labelKey] ?? item.labelKey}
                      </Link>
                    );
                  })}
                </div>
              </details>
            )
          )}
        </div>

        <div className="flex-none flex items-center gap-2 px-4 py-4 border-t border-[#F0EADB]">
          <LanguageSwitcher currentLang={lang} />
          <Link
            href={`/${lang}/login`}
            className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-[6px] text-[0.85rem] font-semibold bg-[#17362A] text-white no-underline hover:bg-[#234A3A] transition-all duration-150 text-center whitespace-nowrap"
            onClick={() => setMobileOpen(false)}
          >
            {nav["topnav.login"] ?? "Login"}
          </Link>
        </div>
      </div>
    </nav>
  );
}
