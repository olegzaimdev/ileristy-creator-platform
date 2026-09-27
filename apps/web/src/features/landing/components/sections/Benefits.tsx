import { benefits } from "../../content";
import { CourseCard } from "../ui/CourseCard";
import { SectionTitle } from "../ui/SectionTitle";

export function Benefits() {
  return (
    <section className="benefits section container" aria-labelledby="benefits-title">
      <SectionTitle id="benefits-title" eyebrow="Какво получаваш" title={<>Всичко, за да започнеш <em>уверено</em></>} />
      <div className="benefits__grid">
        {benefits.map((benefit, i) => (
          <CourseCard key={benefit.title} {...benefit} index={i} />
        ))}
      </div>
    </section>
  );
}
