import WhatsNewHero from "@/components/Front-Pages/WhatsNew/WhatsNew-hero";
import WhatsNewTimeline from "@/components/Front-Pages/WhatsNew/WhatsNew-timeline";

export function WhatsNewView({ lang }: { lang: string }) {
  return (
    <div>
      <WhatsNewHero />
      <WhatsNewTimeline />
    </div>
  );
}
