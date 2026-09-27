import { modules } from "../../content";
import { Button } from "../ui/Button";
import { ImageCard } from "../ui/ImageCard";
import { Script } from "../ui/Script";
import { SectionTitle } from "../ui/SectionTitle";

/* Laptop + phone are drawn in CSS so the course platform can be shown before real screenshots exist. */
function LaptopMockup() {
  return (
    <div className="laptop" role="img" aria-label="Платформата на курса на лаптоп: списък с модули и текущ урок">
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
            <span className="platform__lesson">Урок 3.1 · Сценарий и кука</span>
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

export function CourseIntro() {
  return (
    <section id="course" className="course-intro section" aria-labelledby="course-title">
      <div className="course-intro__panel container">
        <div className="course-intro__copy">
          <SectionTitle
            id="course-title"
            index="02"
            eyebrow="Онлайн обучение"
            title="Курсът"
            lead="Практически онлайн курс по SMM & UGC."
          />
          <p className="course-intro__text reveal">
            Стъпка по стъпка система, която ще ти помогне да овладееш търсена професия, да изградиш свой стил, да намериш първите си клиенти и да печелиш стабилно от съдържание.
          </p>
          <Button href="#program" variant="secondary" arrow>
            Виж програмата
          </Button>
        </div>

        <div className="course-intro__visual">
          <LaptopMockup />
          <div className="phone" role="img" aria-label="Телефон с Reels, заснет по време на курса">
            <ImageCard alt="" tone="rose" shape="square" ratio="9 / 19" />
            <span className="phone__label">Reels · 0:15</span>
          </div>
          <figure className="polaroid">
            <ImageCard alt="Камера, кафе и тетрадка на бюрото" tone="ivory" shape="square" ratio="1" mono />
            <figcaption>
              <Script size="md">my workspace</Script>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
