import type { ReactNode } from "react";
import { Button, Icon, ImageCard, Script } from "@/components/ui";
import type { LandingDictionary } from "../../types";

export function Hero({ t, sample }: { t: LandingDictionary["hero"]; sample: ReactNode }) {
  const [first, middle, last] = t.title;
  return (
    <section className="hero page-container" aria-labelledby="hero-title">
      <div className="hero__media">
        <div className="hero__backdrop" aria-hidden="true" />
        <ImageCard className="hero__portrait" alt={t.portrait.alt} caption={t.portrait.caption} tone="blush" shape="arch" ratio="4 / 5.3" priority parallax />
        <ImageCard className="hero__detail" alt={t.detailAlt} tone="taupe" shape="circle" ratio="1" mono />
        <Script className="hero__signature" size="lg">
          {t.signature}
        </Script>
        <p className="hero__vertical" aria-hidden="true">
          {t.vertical}
        </p>
      </div>

      <div className="hero__copy">
        <p className="eyebrow">
          <Icon name="sparkle" size={12} className="eyebrow__star" />
          {t.label}
        </p>
        <h1 id="hero-title" className="hero__title">
          <span className="hero__line hero__line--italic">{first}</span>
          <span className="hero__line hero__line--big">{middle}</span>
          <span className="hero__line hero__line--indent">{last}</span>
        </h1>
        <p className="hero__lead">{t.lead}</p>
        <div className="hero__actions">
          <Button href="#pricing" size="lg" arrow>
            {t.primaryCta}
          </Button>
          <Button href="#program" size="lg" variant="secondary">
            {t.secondaryCta}
          </Button>
        </div>
        <div className="hero__proof">
          <div className="avatar-stack" aria-hidden="true">
            <span className="avatar tone-blush" />
            <span className="avatar tone-taupe" />
            <span className="avatar tone-rose" />
            <span className="avatar avatar--more">+</span>
          </div>
          <p>
            <strong>{t.proof.value}</strong> {t.proof.text}
            {t.proof.sample && sample}
          </p>
        </div>
      </div>
    </section>
  );
}
