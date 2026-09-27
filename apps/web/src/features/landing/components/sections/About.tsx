import type { ReactNode } from "react";
import { ImageCard, Script, SectionTitle } from "@/components/ui";
import type { LandingDictionary } from "../../types";
import { Stats } from "./Stats";

type AboutProps = { t: LandingDictionary["about"]; stats: LandingDictionary["stats"]; sample: ReactNode };

export function About({ t, stats, sample }: AboutProps) {
  return (
    <section id="about" className="about section page-container" aria-labelledby="about-title">
      <div className="about__collage">
        <ImageCard className="about__portrait" alt={t.portrait.alt} caption={t.portrait.caption} tone="rose" shape="arch" ratio="3 / 4" parallax />
        <ImageCard className="about__lifestyle" alt={t.lifestyle.alt} caption={t.lifestyle.caption} tone="taupe" shape="rounded" ratio="4 / 5" mono />
        <ImageCard className="about__work" alt={t.work.alt} caption={t.work.caption} tone="ivory" shape="soft" ratio="5 / 4" />
      </div>

      <div className="about__copy">
        <SectionTitle id="about-title" index="01" eyebrow={t.eyebrow} title={t.title} script={t.script} />
        <p className="lead reveal">{t.lead}</p>
        <div className="about__body reveal">
          {t.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <Stats stats={stats} sample={sample} />
        <Script className="about__sign" size="md">
          {t.sign}
        </Script>
      </div>
    </section>
  );
}
