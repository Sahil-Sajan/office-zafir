"use client";

import FeaturedStory from "@/components/Front-Pages/SuccessStories/Featured-story";
import StoriesCta from "@/components/Front-Pages/SuccessStories/Stories-cta";
import StoriesGrid from "@/components/Front-Pages/SuccessStories/Stories-grid";
import StoriesHero from "@/components/Front-Pages/SuccessStories/Stories-hero";

interface SellerSuccessStoriesViewProps {
  lang: string;
}

export function SellerSuccessStoriesView({ lang }: SellerSuccessStoriesViewProps) {
  return (
    <div>
      <StoriesHero />
      <FeaturedStory />
      <StoriesGrid />
      <StoriesCta />
    </div>
  );
}
