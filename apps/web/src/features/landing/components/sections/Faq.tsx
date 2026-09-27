import { faq } from "../../content";
import { Button } from "../ui/Button";
import { SectionTitle } from "../ui/SectionTitle";

export function Faq() {
  return (
    <section id="faq" className="faq section container" aria-labelledby="faq-title">
      <div className="faq__aside">
        <SectionTitle id="faq-title" index="08" eyebrow="ЧЗВ" title="Въпроси преди старта" script="питай смело" />
        <p className="faq__note">Не намери отговор? Пиши ми — отговарям лично.</p>
        <Button href="https://t.me/" variant="secondary" arrow>
          Пиши в Telegram
        </Button>
      </div>
      <div className="faq__list">
        {faq.map(({ q, a }) => (
          <details key={q} name="faq" className="accordion">
            <summary className="accordion__summary">
              <span>{q}</span>
              <span className="accordion__icon" aria-hidden="true" />
            </summary>
            <div className="accordion__body">
              <p>{a}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
