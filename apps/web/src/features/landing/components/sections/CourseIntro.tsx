import { Button, ImageCard, Script, SectionTitle } from "@/components/ui";
import type { Module } from "@/components/ui";
import type { LandingDictionary } from "../../types";

type CourseT = LandingDictionary["course"];

/* Laptop + phone are drawn in CSS so the course platform can be shown before real screenshots exist. */
function LaptopMockup({ t, modules }: { t: CourseT; modules: Module[] }) {
  return (
    <div className="laptop" role="img" aria-label={t.laptopLabel}>
      <div className="laptop__screen">
        <div className="platform">
          <aside className="platform__side">
            <span className="platform__logo">ILERISTY</span>
            {modules.slice(0, 5).map((module, i) => (
              <span key={module.number} className={i === 2 ? "platform__item is-active" : "platform__item"}>
                <small>{module.number}</small>
                {module.title}
              </span>
            ))}
          </aside>
          <div className="platform__main">
            <div className="platform__video">
              <span className="platform__play" />
            </div>
            <span className="platform__lesson">{t.lesson}</span>
            <span className="platform__progress">
              <i />
            </span>
          </div>
        </div>
      </div>
      <div className="laptop__base" />
    </div>
  );
}

export function CourseIntro({ t, modules }: { t: CourseT; modules: Module[] }) {
  return (
    <section id="course" className="course-intro section" aria-labelledby="course-title">
      <div className="course-intro__panel page-container">
        <div className="course-intro__copy">
          <SectionTitle id="course-title" index="02" eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
          <p className="course-intro__text reveal">{t.text}</p>
          <Button href="#program" variant="secondary" arrow>
            {t.cta}
          </Button>
        </div>

        <div className="course-intro__visual">
          <LaptopMockup t={t} modules={modules} />
          <div className="phone" role="img" aria-label={t.phoneLabel}>
            <ImageCard alt="" tone="rose" shape="square" ratio="9 / 19" />
            <span className="phone__label">{t.phoneTag}</span>
          </div>
          <figure className="polaroid">
            <ImageCard alt={t.polaroidAlt} tone="ivory" shape="square" ratio="1" mono />
            <figcaption>
              <Script size="md">{t.polaroidCaption}</Script>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
