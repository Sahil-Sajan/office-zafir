"use client";

import Collection from "@/components/Front-Pages/Features/Collection";
import GlobalCTA from "@/components/Front-Pages/Features/cta";
import DomainChart from "@/components/Front-Pages/Features/Feature-chart";
import FeaturesHero from "@/components/Front-Pages/Features/Feature-hero";
import TierStats from "@/components/Front-Pages/Features/Feature-stats";
import StackedBarChart from "@/components/Front-Pages/Features/Stackbar";
import Tabs from "@/components/Front-Pages/Features/Tabs";



interface FeaturesViewProps {
    lang: string;
    about: Record<string, string>;
    features: Record<string, string>;
}

export function FeaturesView({ lang, about, features }: FeaturesViewProps) {
    return (
        <div >
            <FeaturesHero />
            <TierStats />
            <StackedBarChart features={features} />
            <DomainChart features={features} />
            <Tabs />
            <Collection />
            <GlobalCTA />
        </div>
    );
}
