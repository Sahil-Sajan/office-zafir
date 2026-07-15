import Hero from "@/components/Front-Pages/home/Hero";
import ProductGrid from "@/components/Front-Pages/home/Listing";
import Recommended from "@/components/Front-Pages/home/Recommended";
import BentoGrid from "@/components/Front-Pages/home/SameProduct";
import ComparisonCarousel from "@/components/Front-Pages/home/AlibabaTrust";
import FeatureGrid from "@/components/Front-Pages/home/CapabilitiesGlance";
import Timeline from "@/components/Front-Pages/home/OneOrderFourSystems";
import CTABand from "@/components/Front-Pages/home/CTA";
import MarqueeBar from "@/components/Front-Pages/home/Marquee";
import SimpleSteps from "@/components/Front-Pages/home/SimpleSteps";

interface HomeViewProps {
  lang: string;
  home: Record<string, string>;
}

export function HomeView({ lang, home }: HomeViewProps) {
  return (
    <>
      <Hero home={home} lang={lang} />
      <MarqueeBar home={home} />
      <SimpleSteps home={home} />
      <ProductGrid home={home} lang={lang} />
      <Recommended lang={lang} />
      <BentoGrid home={home} />
      <ComparisonCarousel home={home} />
      <FeatureGrid home={home} />
      <Timeline home={home} />
      <CTABand home={home} />
    </>
  );
}
