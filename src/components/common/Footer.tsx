"use client"

import Link from "next/link"
import Image from "next/image"
import { logo } from "@/utils/images"
import { Mail, PhoneCall, MapPin } from "@/components/common/NavIcons"

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-[20px]" fill="currentColor">
      <path d="M12.02 2C6.5 2 2 6.5 2 12.02c0 1.77.46 3.5 1.35 5.02L2 22l5.09-1.33a10 10 0 0 0 4.93 1.3h.01c5.51 0 10-4.5 10-10.02C22 6.5 17.53 2 12.02 2Zm0 18.13h-.01a8.1 8.1 0 0 1-4.14-1.13l-.3-.18-3.02.79.8-2.94-.19-.3a8.14 8.14 0 0 1-1.25-4.35c0-4.5 3.66-8.16 8.16-8.16 4.49 0 8.14 3.66 8.14 8.16 0 4.5-3.65 8.11-8.19 8.11Zm4.47-6.1c-.24-.12-1.44-.71-1.67-.79-.22-.08-.38-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.53.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.35-1.67-.14-.24-.02-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02s.87 2.35.99 2.51c.12.16 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-[20px]" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-[20px]" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-[16px]" fill="currentColor">
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.22-6.82-5.97 6.82H1.66l7.73-8.83L1.25 2.25h6.83l4.72 6.24 5.44-6.24Zm-1.16 17.52h1.83L6.99 4.13H5.03l12.05 15.64Z" />
    </svg>
  );
}

interface FooterProps {
  lang: string;
  footer: Record<string, string>;
}

const footerSections: { titleKey: string; links: { labelKey: string; href: string }[] }[] = [
  {
    titleKey: "section.corporate",
    links: [
      // { labelKey: "corporate.ourStory", href: "/about" },
      { labelKey: "corporate.ourMission", href: "/our-mission-vision" },
      { labelKey: "corporate.leadership", href: "/leadership-team" },
      { labelKey: "corporate.careers", href: "/careers" },
      { labelKey: "corporate.press", href: "/press-media" },
      { labelKey: "trust.whyZafir360", href: "/why-zafir360" },
      { labelKey: "trust.platformStatus", href: "/status" },
    ],
  },
  // {
  //   titleKey: "section.trust",
  //   links: [
  //     { labelKey: "trust.whyZafir360", href: "/why-zafir360" },
  //     { labelKey: "trust.whyBuyFromTurkey", href: "/why-buy-from-turkey" },
  //     { labelKey: "trust.buyerProtection", href: "/buyer-protection" },
  //     { labelKey: "trust.securePayments", href: "/secure-payments" },
  //     { labelKey: "trust.qualityGuarantee", href: "/quality-guarantee" },
  //     { labelKey: "trust.warranty", href: "/warranty" },
  //     { labelKey: "trust.returnsRefunds", href: "/returns-refunds" },
  //     { labelKey: "trust.shipping", href: "/shipping-information" },
  //     { labelKey: "supplier.howWeVerify", href: "/how-we-verify-suppliers" },
  //     { labelKey: "supplier.factoryInspection", href: "/factory-inspection-process" },
  //   ],
  // },
  // {
  //   titleKey: "section.marketplace",
  //   links: [
  //     { labelKey: "marketplace.shopProducts", href: "/shop" },
  //     { labelKey: "marketplace.productCategories", href: "/categories" },
  //     { labelKey: "marketplace.brands", href: "/brands" },
  //     { labelKey: "marketplace.deals", href: "/deals" },
  //     { labelKey: "marketplace.newArrivals", href: "/new-arrivals" },
  //     { labelKey: "marketplace.bestSellers", href: "/best-sellers" },
  //   ],
  // },
  {
    titleKey: "section.rewardsTools",
    links: [
      // { labelKey: "rewardsTools.wishlist", href: "/wishlist" },
      // { labelKey: "rewardsTools.compareProducts", href: "/compare" },
      { labelKey: "rewardsTools.giftCards", href: "/gift-cards" },
      { labelKey: "rewardsTools.nuqatRewards", href: "/loyalty" },
      { labelKey: "rewardsTools.wallet", href: "/wallet" },
      { labelKey: "rewardsTools.referEarn", href: "/referral" },
      // { labelKey: "rewardsTools.whatsNew", href: "/whats-new" },
      { labelKey: "rewardsTools.becomeAffiliate", href: "/become-an-affiliate" },
    ],
  },
  {
    titleKey: "section.factory",
    links: [
      // { labelKey: "factory.directory", href: "/factory-directory" },
      { labelKey: "factory.profiles", href: "/factory-profiles" },
      { labelKey: "factory.visitReports", href: "/factory-visit-reports" },
      // { labelKey: "factory.featuredManufacturers", href: "/featured-manufacturers" },
      { labelKey: "factory.turkish", href: "/turkish-manufacturers" },
      { labelKey: "factory.chinese", href: "/chinese-manufacturers" },
      { labelKey: "factory.verified", href: "/verified-factories" },
    ],
  },
  {
    titleKey: "section.learn",
    links: [
      { labelKey: "help.blog", href: "/blog" },
      { labelKey: "learn.buyingGuides", href: "/buying-guides" },
      { labelKey: "help.importGuides", href: "/import-guides" },
      { labelKey: "learn.businessTips", href: "/business-tips" },
      // { labelKey: "learn.constructionArticles", href: "/construction" },
      // { labelKey: "learn.homeImprovementArticles", href: "/home-improvement" },
      { labelKey: "learn.marketNews", href: "/market-news" },
    ],
  },
  {
    titleKey: "section.legal",
    links: [
      { labelKey: "legal.privacy", href: "/privacy-policy" },
      { labelKey: "legal.terms", href: "/terms-conditions" },
      { labelKey: "legal.cookie", href: "/cookie-policy" },
      { labelKey: "legal.sellerAgreement", href: "/seller-agreement" },
      { labelKey: "legal.supplierAgreement", href: "/supplier-agreement" },
      { labelKey: "legal.buyerAgreement", href: "/buyer-agreement" },
    ],
  },
];

export default function Footer({ lang, footer }: FooterProps) {
  const t = (key: string, fallback: string) => footer[key] ?? fallback;

  return (
    <footer className="bg-[#F0EADB] border-t border-[#F0EADB] py-8 sm:py-12 px-4 sm:px-7">
      <div className="max-w-[1280px] mx-auto">
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:[grid-template-columns:220px_repeat(5,minmax(0,1fr))_200px] gap-x-8 gap-y-8 pb-10"
        >
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-1.5 font-extrabold text-[1.05rem] tracking-tight no-underline text-[#0E241C]">
              <Image src={logo} alt="Zafir360" className="h-[26px] w-auto flex-none" />
              Zafir360
            </Link>
            <p className="text-[0.9rem] text-[#1C2420] mt-[14px] leading-[1.65]">
              {t("slogan", "Iraq\u2019s premier B2B2C marketplace \u2014 connecting verified suppliers, wholesale buyers, marketplace sellers, and consumers under one platform.")}
            </p>
            <div className="flex flex-col gap-2 mt-4">
              <a href="mailto:hello@zafir360.com" className="text-[0.85rem] text-[#1C2420] no-underline flex items-center gap-2 hover:text-[#234A3A]">
                <Mail /> {t("email", "hello@zafir360.com")}
              </a>
              <a href="tel:+9647700000360" className="text-[0.85rem] text-[#1C2420] no-underline flex items-center gap-2 hover:text-[#234A3A]">
                <PhoneCall /> {t("phone", "+964 770 000 0360")}
              </a>
              <span className="text-[0.85rem] text-[#1C2420] flex items-center gap-2">
                <MapPin /> {t("address", "Mansour, Baghdad, Iraq")}
              </span>
            </div>
            <div className="flex items-center gap-2.5 mt-4">
              {[
                { icon: WhatsAppIcon, tooltipKey: "social.whatsapp", href: "https://wa.me/9647700000360" },
                { icon: LinkedInIcon, tooltipKey: "social.linkedin", href: "https://www.linkedin.com/company/zafir360" },
                { icon: InstagramIcon, tooltipKey: "social.instagram", href: "https://www.instagram.com/zafir360" },
                { icon: XIcon, tooltipKey: "social.twitter", href: "https://x.com/zafir360" },
              ].map((s) => (
                <a
                  key={s.tooltipKey}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-[#F0EADB] flex items-center justify-center no-underline text-[#1C2420] hover:border-[#17362A] hover:text-[#234A3A] transition-all duration-150"
                  title={t(s.tooltipKey, s.tooltipKey)}
                >
                  <s.icon />
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.titleKey} className="min-w-0">
              <h4 className="text-[0.8rem] uppercase tracking-[0.05em] text-[#1C2420] mb-[14px] font-bold">
                {t(section.titleKey, section.titleKey)}
              </h4>
              <ul className="list-none m-0 p-0 flex flex-col gap-[9px]">
                {section.links.map((link) => (
                  <li key={link.labelKey}>
                    <Link
                      href={link.href}
                      className="text-[0.85rem] text-[#1C2420] no-underline hover:text-[#0E241C] transition-colors duration-150"
                    >
                      {t(link.labelKey, link.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="min-w-0">
            <h4 className="text-[0.98rem] font-bold text-[#0E241C] mb-2">
              {t("newsletterTitle", "Stay in the loop")}
            </h4>
            <p className="text-[0.85rem] text-[#1C2420] leading-[1.55] mb-4">
              {t("newsletterLede", "Product drops, wholesale deals, and platform updates — no spam.")}
            </p>
            <form
              className="flex flex-col gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder={t("newsletterPlaceholder", "you@company.com")}
                aria-label={t("newsletterAria", "Email for newsletter")}
                className="px-3 py-[9px] border border-[#F0EADB] rounded-[6px] text-[0.85rem] bg-white text-[#0E241C] focus:outline-none focus:border-[#17362A]"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-[6px] text-[0.85rem] font-semibold bg-[#17362A] text-white hover:bg-[#234A3A] transition-colors duration-150 cursor-pointer border-none"
              >
                {t("newsletterBtn", "Join")}
              </button>
            </form>
            <p className="text-[0.76rem] text-[#5B6961] mt-2.5">
              {t("newsletterFinePrint", "Join 4,000+ sellers and buyers already subscribed. Unsubscribe anytime.")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
