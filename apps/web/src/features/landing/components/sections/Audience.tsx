import { audience } from "../../content";
import { ImageCard, SectionTitle } from "@/components/ui";

export function Audience() {
  return (
    <section className="audience section page-container" aria-labelledby="audience-title">
      <div className="audience__aside">
        <SectionTitle id="audience-title" index="03" eyebrow="Твоята отправна точка" title="За кого е този курс?" script="точно за теб" />
        <ImageCard className="audience__image" alt="Момиче снима съдържание с телефон на прозореца" tone="blush" shape="soft" ratio="4 / 5" mono />
      </div>
      <ol className="audience__list">
        {audience.map((line, i) => (
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
