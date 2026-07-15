export const locales = ["en", "ar", "ku"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
  ku: "کوردی",
};

export const localeDirections: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  ar: "rtl",
  ku: "rtl",
};

export const localePatterns = {
  en: /^en(?:\b|$)/i,
  ar: /^ar(?:\b|$)/i,
  ku: /^ku(?:\b|$)/i,
};
