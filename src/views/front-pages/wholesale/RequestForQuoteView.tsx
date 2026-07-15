"use client";

import QuoteForm from "@/components/forms/Qoute-form";
import QuoteHero from "@/components/Front-Pages/Request-for-qoute/Qoute-hero";


interface RequestForQuoteViewProps { lang: string; }

export function RequestForQuoteView({ lang }: RequestForQuoteViewProps) {
  return (
    <div className="container mx-auto ">
      <QuoteHero />
      <QuoteForm />
    </div>
  );
}