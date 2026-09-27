import { SectionTitle } from "@/components/ui";
import type { LandingDictionary } from "../../types";

export function Format({ t }: { t: LandingDictionary["format"] }) {
  return (
    <section className="format section" aria-labelledby="format-title">
      <div className="page-container">
        <SectionTitle id="format-title" eyebrow={t.eyebrow} title={t.title} script={t.script} align="center" />
        <ol className="roadmap">
          {t.steps.map((step, i) => (
            <li key={step} className="roadmap__step reveal">
              <span className="roadmap__number">{String(i + 1).padStart(2, "0")}</span>
              <span className="roadmap__dot" aria-hidden="true" />
              <span className="roadmap__label">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
