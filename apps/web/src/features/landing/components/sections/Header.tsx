"use client";

import { useEffect, useRef, useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Button, Script } from "@/components/ui";
import type { Locale } from "@/i18n/config";
import type { LandingDictionary, NavItem } from "../../types";

type HeaderProps = { t: LandingDictionary["header"]; nav: NavItem[]; locale: Locale; languageLabel: string };

export function Header({ t, nav, locale, languageLabel }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const root = document.documentElement;
    const toggle = toggleRef.current;
    root.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLElement>("a")?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
      if (event.key !== "Tab" || !menuRef.current) return;
      // keep focus inside the overlay (toggle button + menu links)
      const focusable = [toggleRef.current, ...menuRef.current.querySelectorAll<HTMLElement>("a, button")].filter(Boolean) as HTMLElement[];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      toggle?.focus();
    };
  }, [menuOpen]);

  return (
    <header className="site-header" data-scrolled={scrolled || undefined} data-menu-open={menuOpen || undefined}>
      <div className="site-header__inner page-container">
        <a className="wordmark" href="#top" aria-label={t.homeLabel}>
          ILERISTY
        </a>
        <nav className="site-nav" aria-label={t.mainNav}>
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <LanguageSwitcher current={locale} label={languageLabel} className="site-header__lang" />
        <Button href="#pricing" className="site-header__cta">
          {t.cta}
        </Button>
        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? t.closeMenu : t.openMenu}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-menu" ref={menuRef} className="mobile-menu" hidden={!menuOpen}>
        <nav aria-label={t.mobileNav}>
          <ol>
            {nav.map((item, i) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setMenuOpen(false)}>
                  <small>{String(i + 1).padStart(2, "0")}</small>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="mobile-menu__foot">
          <LanguageSwitcher current={locale} label={languageLabel} />
          <Script size="md">{t.menuScript}</Script>
          <Button href="#pricing" block arrow onClick={() => setMenuOpen(false)}>
            {t.cta}
          </Button>
        </div>
      </div>
    </header>
  );
}
