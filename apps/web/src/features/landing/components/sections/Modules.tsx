import { Badge, ModuleAccordion, SectionTitle } from "@/components/ui";
import type { Locale } from "@/i18n/config";
import type { CommonDictionary } from "@/i18n/dictionaries/types";
import { plural } from "@/i18n/format";
import type { LandingDictionary } from "../../types";

type ModulesProps = { t: LandingDictionary["modules"]; labels: CommonDictionary["ui"]["module"]; locale: Locale };

export function Modules({ t, labels, locale }: ModulesProps) {
  const [line1, line2] = t.title;
  return (
    <section id="program" className="modules section page-container" aria-labelledby="program-title">
      <div className="modules__aside">
        <SectionTitle
          id="program-title"
          index="05"
          eyebrow={t.eyebrow}
          title={
            <>
              {line1}
              <br />
              {line2}
            </>
          }
        />
        <p className="modules__note">{t.note}</p>
        <Badge tone="outline">{t.badge}</Badge>
      </div>
      <ModuleAccordion modules={t.items} labels={labels} lessonCount={(count) => `${count} ${plural(locale, count, labels.lessons)}`} />
    </section>
  );
}
