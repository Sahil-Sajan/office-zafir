"use client";

import CategoriesHero from "@/components/Front-Pages/Categories/Categories-heo";



interface CategoriesViewProps {
    lang: string;
    about: Record<string, string>;
}

export function CategoriesView({ lang, about }: CategoriesViewProps) {
    return (
        <div className="container mx-auto px-4 py-12">
            <CategoriesHero />
        </div>
    );
}
