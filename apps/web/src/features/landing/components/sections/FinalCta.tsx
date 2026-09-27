import { Button, ImageCard, Script } from "@/components/ui";
import type { LandingDictionary } from "../../types";

export function FinalCta({ t }: { t: LandingDictionary["finalCta"] }) {
  const [line1, line2] = t.title;
  return (
    <section className="final-cta" aria-labelledby="final-title">
      <div className="final-cta__frame page-container">
        <ImageCard className="final-cta__image" alt={t.imageAlt} tone="espresso" shape="square" ratio="auto" parallax />
        <div className="final-cta__content">
          <Script className="final-cta__script">{t.script}</Script>
          <h2 id="final-title" className="final-cta__title reveal-text">
            <span className="nowrap">{line1}</span>
            <br />
            <em>{line2}</em>
          </h2>
          <p className="final-cta__lead">{t.lead}</p>
          <Button href="#pricing" size="lg" arrow>
            {t.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
