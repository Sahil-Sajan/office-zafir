"use client";

import HelpHero from "@/components/Front-Pages/Help/HelpHero";
import LinkCards from "@/components/Front-Pages/Help/LinkCards";

interface HelpCenterViewProps { lang: string; }

const items = [
  { icon: "lifebuoy", title: "Help Center", desc: "Browse topics and find quick answers.", href: "/help-center" },
  { icon: "question", title: "FAQ", desc: "Common questions from buyers and sellers.", href: "/faq" },
  { icon: "truck", title: "Shipping Guide", desc: "How delivery timelines and tracking work.", href: "/shipping-guide" },
  { icon: "tag", title: "Payment Guide", desc: "Accepted payment methods and escrow explained.", href: "/payment-guide" },
  { icon: "arrowsExchange", title: "Returns Guide", desc: "How to request a return or refund.", href: "/returns-guide" },
  { icon: "userPlus", title: "Account Help", desc: "Manage your profile, security, and settings.", href: "/account-help" },
  { icon: "rocket", title: "Contact Support", desc: "Reach our team for anything unresolved.", href: "/contact-support" },
];

export function HelpCenterView({ lang }: HelpCenterViewProps) {
  return (
    <div>
      <HelpHero
        eyebrow="Support"
        title="How can we help?"
        description="Find guides on shipping, payments, and returns, or reach our team directly."
      />
      <LinkCards lang={lang} items={items} />
    </div>
  );
}
