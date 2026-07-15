"use client";

import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";

export interface WishlistItem {
  slug: string;
  name: string;
  image: string;
  price: string;
  tier: "retail" | "marketplace" | "wholesale";
  listName: string;
  alertPriceDrop: boolean;
  alertBackInStock: boolean;
}

interface WishlistContextValue {
  items: WishlistItem[];
  lists: string[];
  count: number;
  isSaved: (slug: string) => boolean;
  toggle: (item: Omit<WishlistItem, "listName" | "alertPriceDrop" | "alertBackInStock">, listName?: string) => void;
  remove: (slug: string) => void;
  createList: (name: string) => void;
  moveToList: (slug: string, listName: string) => void;
  setAlerts: (slug: string, alerts: { alertPriceDrop?: boolean; alertBackInStock?: boolean }) => void;
}

const WishlistContext = createContext<WishlistContextValue | null>(null);

const STORAGE_KEY = "zafir360.wishlist";
const DEFAULT_LIST = "Saved";

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<WishlistItem[]>([]);
  const [lists, setLists] = useState<string[]>([DEFAULT_LIST]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setItems(parsed.items ?? []);
        setLists(parsed.lists ?? [DEFAULT_LIST]);
      }
    } catch {
      // ignore malformed storage
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ items, lists }));
  }, [items, lists, hydrated]);

  const isSaved = (slug: string) => items.some((i) => i.slug === slug);

  const toggle = (item: Omit<WishlistItem, "listName" | "alertPriceDrop" | "alertBackInStock">, listName = DEFAULT_LIST) => {
    setItems((prev) => {
      if (prev.some((i) => i.slug === item.slug)) {
        return prev.filter((i) => i.slug !== item.slug);
      }
      return [...prev, { ...item, listName, alertPriceDrop: false, alertBackInStock: false }];
    });
  };

  const remove = (slug: string) => setItems((prev) => prev.filter((i) => i.slug !== slug));

  const createList = (name: string) => {
    const trimmed = name.trim();
    if (!trimmed || lists.includes(trimmed)) return;
    setLists((prev) => [...prev, trimmed]);
  };

  const moveToList = (slug: string, listName: string) => {
    setItems((prev) => prev.map((i) => (i.slug === slug ? { ...i, listName } : i)));
  };

  const setAlerts = (slug: string, alerts: { alertPriceDrop?: boolean; alertBackInStock?: boolean }) => {
    setItems((prev) => prev.map((i) => (i.slug === slug ? { ...i, ...alerts } : i)));
  };

  const count = useMemo(() => items.length, [items]);

  return (
    <WishlistContext.Provider value={{ items, lists, count, isSaved, toggle, remove, createList, moveToList, setAlerts }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
}
