import { topics } from "../../content";
import { ImageCard } from "../ui/ImageCard";
import { SectionTitle } from "../ui/SectionTitle";

export function Learning() {
  return (
    <section className="learning section container" aria-labelledby="learning-title">
      <SectionTitle
        id="learning-title"
        index="04"
        eyebrow="Умения"
        title="Какво има вътре?"
        lead="Шест направления, които заедно правят от теб специалист, с когото брандовете искат да работят."
      />
      <div className="learning__grid">
        {topics.map((topic) => (
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
        <ImageCard className="learning__image" alt="Снимачна площадка: ринг лампа, телефон на статив и продукт" caption="Behind the scenes" tone="taupe" shape="soft" ratio="auto" parallax />
      </div>
    </section>
  );
}
