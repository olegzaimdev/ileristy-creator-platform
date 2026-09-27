import { legal, nav, socials } from "../../content";
import { Script } from "../ui/Script";

export function Footer() {
  return (
    <footer id="contacts" className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <p className="site-footer__tagline">SMM & UGC обучение за момичета, които искат да създават, да се развиват и да печелят онлайн.</p>
          <Script size="md">with love, Leri</Script>
        </div>
        <nav aria-label="Навигация в долния колонтитул">
          <h2 className="site-footer__label">Навигация</h2>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="site-footer__label">Социални мрежи</h2>
          <ul>
            {socials.map((item) => (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="site-footer__label">Правна информация</h2>
          <ul>
            {legal.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container site-footer__bottom">
        <p className="site-footer__wordmark" aria-hidden="true">
          ILERISTY
        </p>
        <p className="site-footer__legal">© {new Date().getFullYear()} ILERISTY · Всички права запазени</p>
      </div>
    </footer>
  );
}
