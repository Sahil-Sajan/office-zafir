import "server-only";
import type { Locale } from "@/config/i18n";

const dictionaries = {
  en: () => import("@/data/dictionaries/en.json").then((m) => m.default),
  ar: () => import("@/data/dictionaries/ar.json").then((m) => m.default),
  ku: () => import("@/data/dictionaries/ku.json").then((m) => m.default),
};

export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries;

export const getDictionary = async (locale: Locale) => dictionaries[locale]();

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
