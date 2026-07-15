"use client";
import ArchetypeTable from '@/components/Front-Pages/Categories/ArchiTable';
import CategoriesHero from '@/components/Front-Pages/Categories/Categories-heo';
import CategoryLinks from '@/components/Front-Pages/Categories/Category-links';
import CollectionsGrid from '@/components/Front-Pages/Categories/Collection';
import ProtocolFeatures from '@/components/Front-Pages/Categories/Protocol';
import HowItWorks from '@/components/Front-Pages/Categories/Work';


interface CategoriesViewProps { lang: string; }

export function CategoriesView({ lang }: CategoriesViewProps) {
  return (
    <div className="container mx-auto">
      <CategoriesHero />
      <CategoryLinks lang={lang} />
      <ProtocolFeatures />
      <ArchetypeTable />
      <CollectionsGrid />
      <HowItWorks />
    </div>
  );
}