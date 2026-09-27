"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { htmlLang, localeCookie, localeNames, locales, type Locale } from "@/i18n/config";

/** BG / UA toggle. Keeps the current path and remembers the choice for `/`. */
export function LanguageSwitcher({ current, label, className }: { current: Locale; label: string; className?: string }) {
  const pathname = usePathname() ?? `/${current}`;
  const rest = pathname.split("/").slice(2).join("/");

  return (
    <nav className={["lang-switch", className].filter(Boolean).join(" ")} aria-label={label}>
      {locales.map((locale) => (
        <Link
          key={locale}
          href={`/${locale}${rest ? `/${rest}` : ""}`}
          hrefLang={htmlLang[locale]}
          lang={htmlLang[locale]}
          aria-current={locale === current ? "true" : undefined}
          aria-label={localeNames[locale]}
          onClick={() => {
            document.cookie = `${localeCookie}=${locale}; path=/; max-age=31536000; samesite=lax`;
          }}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}
