import { Script } from "../ui/Script";
import { SectionTitle } from "../ui/SectionTitle";
import { ImageCard } from "../ui/ImageCard";
import { Stats } from "./Stats";

export function About() {
  return (
    <section id="about" className="about section container" aria-labelledby="about-title">
      <div className="about__collage">
        <ImageCard className="about__portrait" alt="Портрет на Валерия" caption="Портрет" tone="rose" shape="arch" ratio="3 / 4" parallax />
        <ImageCard className="about__lifestyle" alt="Валерия пътува с камера в ръка" caption="Lifestyle" tone="taupe" shape="rounded" ratio="4 / 5" mono />
        <ImageCard className="about__work" alt="Валерия снима продукт на статив" caption="Зад кадър" tone="ivory" shape="soft" ratio="5 / 4" />
      </div>

      <div className="about__copy">
        <SectionTitle id="about-title" index="01" eyebrow="Запознанство" title="За мен" script="създавам. обучавам. вдъхновявам." />
        <p className="lead reveal">Здравей, аз съм Валерия — контент криейтър, SMM специалист и видеограф.</p>
        <div className="about__body reveal">
          <p>
            Вече години създавам съдържание за брандове и за себе си: от идеята и сценария до кадъра, монтажа и резултата. Работила съм като SMM специалист, UGC creator и видеограф с малки бизнеси и големи брандове.
          </p>
          <p>
            Знам колко е объркващо в началото — затова събрах в една система всичко, което работи: как да изградиш личен бранд, да създаваш съдържание, което продава, и да превърнеш уменията си в професия.
          </p>
        </div>
        <Stats />
        <Script className="about__sign" size="md">
          with love, Leri
        </Script>
      </div>
    </section>
  );
}
