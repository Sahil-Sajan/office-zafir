"use client";

import ContactForm from '@/components/forms/Contact-from';
import ContactCards from '@/components/Front-Pages/Contact/Contact-cards';
import HelpHero from "@/components/Front-Pages/Help/HelpHero";

interface ContactSupportViewProps { lang: string; }

export function ContactSupportView({ lang }: ContactSupportViewProps) {
  return (
    <div>
      <HelpHero
        eyebrow="Support"
        title="Contact support"
        description="Live chat and WhatsApp during business hours, or send us a message and we'll follow up."
      />
      <ContactCards />
      <ContactForm />
    </div>
  );
}
