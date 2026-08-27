export type Locale = "en" | "de" | "zh";

export const LOCALES: Locale[] = ["en", "de", "zh"];

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  zh: "中文",
};

export const LOCALE_SHORT: Record<Locale, string> = {
  en: "EN",
  de: "DE",
  zh: "中文",
};

export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_STORAGE_KEY = "hbanna-locale";

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "en" || value === "de" || value === "zh";
}
