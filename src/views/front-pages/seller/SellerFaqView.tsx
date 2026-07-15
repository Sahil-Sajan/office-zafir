"use client";
import FAQAccordion from '@/components/Front-Pages/Seller-faq/Accordian';
import FaqCTA from '@/components/Front-Pages/Seller-faq/faq-cta';
import SellerFAQHero from '@/components/Front-Pages/Seller-faq/faq-hero';

interface SellerFaqViewProps { lang: string; }

export function SellerFaqView({ lang }: SellerFaqViewProps) {
  return (
    <div className="container mx-auto ">
      <SellerFAQHero />
      <FAQAccordion />
      <FaqCTA />

    </div>
  );
}