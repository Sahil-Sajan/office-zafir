"use client";

import BulkCategories from "@/components/Front-Pages/Bulk-orders/Bulk-categories";
import BulkCTA from "@/components/Front-Pages/Bulk-orders/Bulk-cta";
import BulkHero from "@/components/Front-Pages/Bulk-orders/Bulk-hero";
import BulkProcess from "@/components/Front-Pages/Bulk-orders/Bulk-process";
import BulkSavingsTable from "@/components/Front-Pages/Bulk-orders/Saving-table";


interface BulkOrdersViewProps { lang: string; }

export function BulkOrdersView({ lang }: BulkOrdersViewProps) {
  return (
    <div className="container mx-auto ">
      <BulkHero />
      <BulkSavingsTable />
      <BulkCategories />
      <BulkProcess />
      <BulkCTA />
    </div>
  );
}