import { ImageCard, SectionTitle } from "@/components/ui";
import type { LandingDictionary } from "../../types";

export function Learning({ t }: { t: LandingDictionary["learning"] }) {
  return (
    <section className="learning section page-container" aria-labelledby="learning-title">
      <SectionTitle id="learning-title" index="04" eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
      <div className="learning__grid">
        {t.topics.map((topic) => (
          <article key={topic.key} className={`topic topic--${topic.key} reveal`}>
            <span className="topic__key">{topic.key}</span>
            <h3 className="topic__title">{topic.title}</h3>
            <ul className="topic__items">
              {topic.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
        <ImageCard className="learning__image" alt={t.image.alt} caption={t.image.caption} tone="taupe" shape="soft" ratio="auto" parallax />
      </div>
    </section>
  );
}
