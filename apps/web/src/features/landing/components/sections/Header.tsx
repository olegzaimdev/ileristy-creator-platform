"use client";

import { useEffect, useRef, useState } from "react";
import { nav } from "../../content";
import { Button } from "../ui/Button";
import { Script } from "../ui/Script";

export function Header() {
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
      <div className="site-header__inner container">
        <a className="wordmark" href="#top" aria-label="ILERISTY — към началото">
          ILERISTY
        </a>
        <nav className="site-nav" aria-label="Основна навигация">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <Button href="#pricing" className="site-header__cta">
          Запиши се
        </Button>
        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Затвори менюто" : "Отвори менюто"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-menu" ref={menuRef} className="mobile-menu" hidden={!menuOpen}>
        <nav aria-label="Мобилна навигация">
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
          <Script size="md">твоят нов етап</Script>
          <Button href="#pricing" block arrow onClick={() => setMenuOpen(false)}>
            Запиши се
          </Button>
        </div>
      </div>
    </header>
  );
}
