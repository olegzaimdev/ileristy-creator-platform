import { benefits } from "../../content";
import { CourseCard, SectionTitle } from "@/components/ui";

export function Benefits() {
  return (
    <section className="benefits section page-container" aria-labelledby="benefits-title">
      <SectionTitle id="benefits-title" eyebrow="Какво получаваш" title={<>Всичко, за да започнеш <em>уверено</em></>} />
      <div className="benefits__grid">
        {benefits.map((benefit, i) => (
          <CourseCard key={benefit.title} {...benefit} index={i} />
        ))}
      </div>
    </section>
  );
}
