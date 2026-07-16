"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { Navbar } from "./Navbar";
import Footer from "./Footer";
import { ChatBot } from "./ChatBot";
import { FeedbackWidget } from "./FeedbackWidget";
import { CartProvider } from "@/contexts/CartContext";
import { WishlistProvider } from "@/contexts/WishlistContext";
import { CompareProvider } from "@/contexts/CompareContext";

const CHROMELESS_ROUTES = ["/login", "/signup", "/dashboard"];

interface SiteChromeProps {
  lang: string;
  nav: Record<string, string>;
  footer: Record<string, string>;
  children: ReactNode;
}

export function SiteChrome({ lang, nav, footer, children }: SiteChromeProps) {
  const pathname = usePathname();
  const isChromeless = CHROMELESS_ROUTES.some((route) => pathname.startsWith(`/${lang}${route}`));

  const toaster = (
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 2200,
        style: {
          background: "#0E241C",
          color: "#FAF6EA",
          fontSize: "0.85rem",
          fontWeight: 600,
          borderRadius: "8px",
          padding: "10px 14px",
        },
        success: { iconTheme: { primary: "#C9A853", secondary: "#0E241C" } },
      }}
    />
  );

  if (isChromeless) {
    return (
      <CartProvider>
        <WishlistProvider>
          <CompareProvider>
            {toaster}
            {children}
            <FeedbackWidget />
          </CompareProvider>
        </WishlistProvider>
      </CartProvider>
    );
  }

  return (
    <CartProvider>
      <WishlistProvider>
        <CompareProvider>
          {toaster}
          <Navbar lang={lang} nav={nav} />
          <main className="flex-1">{children}</main>
          <Footer lang={lang} footer={footer} />
          <ChatBot />
          <FeedbackWidget />
        </CompareProvider>
      </WishlistProvider>
    </CartProvider>
  );
}
