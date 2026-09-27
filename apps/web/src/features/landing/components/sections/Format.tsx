import { journey } from "../../content";
import { SectionTitle } from "../ui/SectionTitle";

export function Format() {
  return (
    <section className="format section" aria-labelledby="format-title">
      <div className="container">
        <SectionTitle id="format-title" eyebrow="Формат" title="Как протича обучението" script="стъпка по стъпка" align="center" />
        <ol className="roadmap">
          {journey.map((step, i) => (
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
