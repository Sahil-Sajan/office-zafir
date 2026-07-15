"use client";
import ContactForm from '@/components/forms/Contact-from';
import ContactCards from '@/components/Front-Pages/Contact/Contact-cards';
import ContactHero from '@/components/Front-Pages/Contact/Contact-hero';


interface ContactUsViewProps { lang: string; }

export function ContactUsView({ lang }: ContactUsViewProps) {
  return (
    <div className="container mx-auto ">
      <ContactHero />
      <ContactCards />
      <ContactForm />
    </div>
  );
}