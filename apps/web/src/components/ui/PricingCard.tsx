import type { ReactNode } from "react";
import { Badge } from "./Badge";
import { Icon } from "./Icon";
import { Script } from "./Script";

export type PricingCardProps = {
  /** Tier label, e.g. "PRO". Always paired with a descriptor (DESIGN.md). */
  name: string;
  descriptor: string;
  promise: string;
  features: string[];
  /** Price as returned by the backend, or a pending message. */
  price: ReactNode;
  priceNote?: string;
  /** The CTA — a Button, a link or a dialog trigger supplied by the feature. */
  action: ReactNode;
  badge?: string;
  featured?: boolean;
  accent?: string;
};

export function PricingCard({ name, descriptor, promise, features, price, priceNote, action, badge, featured, accent }: PricingCardProps) {
  const headingId = `pkg-${name.toLowerCase().replace(/\W+/g, "-")}`;

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
          {name}
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
          {price}
          {priceNote && <small>{priceNote}</small>}
        </p>
        {action}
      </div>
    </article>
  );
}
