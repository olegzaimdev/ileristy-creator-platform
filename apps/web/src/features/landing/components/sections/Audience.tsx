import { ImageCard, SectionTitle } from "@/components/ui";
import type { LandingDictionary } from "../../types";

export function Audience({ t }: { t: LandingDictionary["audience"] }) {
  return (
    <section className="audience section page-container" aria-labelledby="audience-title">
      <div className="audience__aside">
        <SectionTitle id="audience-title" index="03" eyebrow={t.eyebrow} title={t.title} script={t.script} />
        <ImageCard className="audience__image" alt={t.imageAlt} tone="blush" shape="soft" ratio="4 / 5" mono />
      </div>
      <ol className="audience__list">
        {t.items.map((line, i) => (
          <li key={line} className="audience__item reveal">
            <span className="audience__number" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p>{line}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
