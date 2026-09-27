import type { Package } from "../../content";
import { Badge } from "./Badge";
import { EnrollDialog } from "./EnrollDialog";
import { Icon } from "./Icon";
import { Script } from "./Script";

export function PricingCard({ pkg }: { pkg: Package }) {
  const { code, descriptor, promise, features, cta, badge, featured, accent } = pkg;
  const headingId = `pkg-${code.toLowerCase()}`;

  return (
    <article className={featured ? "pricing-card pricing-card--featured reveal" : "pricing-card reveal"} aria-labelledby={headingId}>
      <div className="pricing-card__head">
        {badge && <Badge tone="blush">{badge}</Badge>}
        {accent && (
          <Script className="pricing-card__accent" size="md">
            {accent}
          </Script>
        )}
        <h3 id={headingId} className="pricing-card__name">
          {code}
        </h3>
        <p className="pricing-card__descriptor">{descriptor}</p>
      </div>
      <p className="pricing-card__promise">{promise}</p>
      <ul className="pricing-card__features">
        {features.map((feature) => (
          <li key={feature}>
            <Icon name="check" size={18} />
            {feature}
          </li>
        ))}
      </ul>
      <div className="pricing-card__footer">
        <p className="pricing-card__price">
          Цената предстои
          <small>Еднократно плащане · EUR</small>
        </p>
        <EnrollDialog pkg={pkg} variant={featured ? "primary" : "secondary"} label={cta} />
      </div>
    </article>
  );
}
