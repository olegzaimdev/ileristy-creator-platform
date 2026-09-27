import { CourseCard, SectionTitle } from "@/components/ui";
import type { LandingDictionary } from "../../types";

export function Benefits({ t }: { t: LandingDictionary["benefits"] }) {
  return (
    <section className="benefits section page-container" aria-labelledby="benefits-title">
      <SectionTitle
        id="benefits-title"
        eyebrow={t.eyebrow}
        title={
          <>
            {t.title} <em>{t.titleAccent}</em>
          </>
        }
      />
      <div className="benefits__grid">
        {t.items.map((benefit, i) => (
          <CourseCard key={benefit.title} {...benefit} index={i} />
        ))}
      </div>
    </section>
  );
}
