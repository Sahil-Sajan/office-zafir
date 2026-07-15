"use client";

import HelpHero from "@/components/Front-Pages/Help/HelpHero";
import LinkCards from "@/components/Front-Pages/Help/LinkCards";

interface AccountHelpViewProps { lang: string; }

const items = [
  { icon: "userPlus", title: "Profile & verification", desc: "Update your details and manage KYC verification.", href: "/account-help" },
  { icon: "shieldCheck", title: "Security", desc: "Change your password and manage login sessions.", href: "/account-help" },
  { icon: "clipboardList", title: "Order history", desc: "Track past orders, returns, and payouts.", href: "/account-help" },
  { icon: "question", title: "Still stuck?", desc: "Check the FAQ for common account questions.", href: "/faq" },
  { icon: "rocket", title: "Talk to support", desc: "Reach our team directly for account-specific issues.", href: "/contact-support" },
];

export function AccountHelpView({ lang }: AccountHelpViewProps) {
  return (
    <div>
      <HelpHero
        eyebrow="Account"
        title="Account help"
        description="Manage your profile, security, and order history, or get help from our team."
      />
      <LinkCards lang={lang} items={items} />
    </div>
  );
}
