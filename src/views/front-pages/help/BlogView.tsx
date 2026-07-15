"use client";

import BlogCta from "@/components/Front-Pages/Learning/Blog-cta";
import BlogFeatured from "@/components/Front-Pages/Learning/Blog-featured";
import BlogGrid from "@/components/Front-Pages/Learning/Blog-grid";
import BlogHero from "@/components/Front-Pages/Learning/Blog-hero";

interface BlogViewProps {
  lang: string;
}

export function BlogView({ lang }: BlogViewProps) {
  return (
    <div>
      <BlogHero lang={lang} />
      <BlogFeatured />
      <BlogGrid />
      <BlogCta />
    </div>
  );
}
