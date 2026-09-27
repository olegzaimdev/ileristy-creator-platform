import { modules } from "../../content";
import { Badge } from "../ui/Badge";
import { ModuleAccordion } from "../ui/ModuleAccordion";
import { SectionTitle } from "../ui/SectionTitle";

export function Modules() {
  return (
    <section id="program" className="modules section container" aria-labelledby="program-title">
      <div className="modules__aside">
        <SectionTitle id="program-title" index="05" eyebrow="Програма" title={<>7 модула.<br />Една система.</>} />
        <p className="modules__note">От първия пост до първия клиент — всеки модул завършва с практическа задача. Окончателната програма предстои.</p>
        <Badge tone="outline">Примерна структура</Badge>
      </div>
      <ModuleAccordion modules={modules} />
    </section>
  );
}
