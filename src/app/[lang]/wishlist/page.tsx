import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { WishlistView } from '@/views/front-pages/marketplace/WishlistView';

export const metadata: Metadata = {
  title: "Wishlist | Zafir360",
};

export default async function WishlistPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <WishlistView lang={lang} />;
}
