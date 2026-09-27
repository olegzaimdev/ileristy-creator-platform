import { AccordionItem, Button, SectionTitle } from "@/components/ui";
import type { LandingDictionary } from "../../types";

export function Faq({ t }: { t: LandingDictionary["faq"] }) {
  return (
    <section id="faq" className="faq section page-container" aria-labelledby="faq-title">
      <div className="faq__aside">
        <SectionTitle id="faq-title" index="08" eyebrow={t.eyebrow} title={t.title} script={t.script} />
        <p className="faq__note">{t.note}</p>
        <Button href="https://t.me/" variant="secondary" arrow>
          {t.cta}
        </Button>
      </div>
      <div className="faq__list">
        {t.items.map(({ q, a }) => (
          <AccordionItem key={q} name="faq" title={<span>{q}</span>}>
            <p>{a}</p>
          </AccordionItem>
        ))}
      </div>
    </section>
  );
}
