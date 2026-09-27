import { faq } from "../../content";
import { AccordionItem, Button, SectionTitle } from "@/components/ui";

export function Faq() {
  return (
    <section id="faq" className="faq section page-container" aria-labelledby="faq-title">
      <div className="faq__aside">
        <SectionTitle id="faq-title" index="08" eyebrow="ЧЗВ" title="Въпроси преди старта" script="питай смело" />
        <p className="faq__note">Не намери отговор? Пиши ми — отговарям лично.</p>
        <Button href="https://t.me/" variant="secondary" arrow>
          Пиши в Telegram
        </Button>
      </div>
      <div className="faq__list">
        {faq.map(({ q, a }) => (
          <AccordionItem key={q} name="faq" title={<span>{q}</span>}>
            <p>{a}</p>
          </AccordionItem>
        ))}
      </div>
    </section>
  );
}
