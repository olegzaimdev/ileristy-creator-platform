/*
 * Supported locales. The URL segment is the market code users recognise
 * (`/bg`, `/ua`); `htmlLang` is the BCP 47 language tag used for <html lang>,
 * hreflang and Intl APIs (Ukrainian is `uk`, not `ua`).
 */
export const locales = ["bg", "ua"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "bg";

export const htmlLang: Record<Locale, string> = { bg: "bg", ua: "uk" };

export const localeNames: Record<Locale, string> = { bg: "Български", ua: "Українська" };

export const localeCookie = "NEXT_LOCALE";

export function hasLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}
