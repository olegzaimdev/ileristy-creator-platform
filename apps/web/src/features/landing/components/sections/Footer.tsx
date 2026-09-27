import { Script } from "@/components/ui";
import type { LandingDictionary, NavItem } from "../../types";

export function Footer({ t, nav }: { t: LandingDictionary["footer"]; nav: NavItem[] }) {
  return (
    <footer id="contacts" className="site-footer">
      <div className="page-container site-footer__grid">
        <div className="site-footer__brand">
          <p className="site-footer__tagline">{t.tagline}</p>
          <Script size="md">{t.sign}</Script>
        </div>
        <nav aria-label={t.navLabel}>
          <h2 className="site-footer__label">{t.navTitle}</h2>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="site-footer__label">{t.socialTitle}</h2>
          <ul>
            {t.socials.map((item) => (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="site-footer__label">{t.legalTitle}</h2>
          <ul>
            {t.legal.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="page-container site-footer__bottom">
        <p className="site-footer__wordmark" aria-hidden="true">
          ILERISTY
        </p>
        <p className="site-footer__legal">
          © {new Date().getFullYear()} ILERISTY · {t.rights}
        </p>
      </div>
    </footer>
  );
}
