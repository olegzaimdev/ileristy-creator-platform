import { AccordionItem } from "./Accordion";

export type Module = {
  number: string;
  title: string;
  lessons: string[];
  duration: string;
  homework: string;
  materials: string[];
};

export type ModuleAccordionLabels = {
  label: string;
  lessonsTitle: string;
  time: string;
  video: string;
  homework: string;
  materials: string;
};

type ModuleAccordionProps = {
  modules: Module[];
  labels: ModuleAccordionLabels;
  /** Localised lesson count, e.g. `(n) => \`${n} уроки\``. */
  lessonCount: (count: number) => string;
  name?: string;
};

/** Course programme: an exclusive accordion, one module open at a time. */
export function ModuleAccordion({ modules, labels, lessonCount, name = "modules" }: ModuleAccordionProps) {
  return (
    <div className="module-list">
      {modules.map((module, i) => (
        <AccordionItem
          key={module.number}
          name={name}
          defaultOpen={i === 0}
          className="module"
          bodyClassName="module__body"
          title={
            <>
              <span className="module__number">{labels.label} {module.number}</span>
              <span className="module__title">{module.title}</span>
              <span className="module__meta">
                {lessonCount(module.lessons.length)} · {module.duration}
              </span>
            </>
          }
        >
          <div>
            <h4>{labels.lessonsTitle}</h4>
            <ol>
              {module.lessons.map((lesson) => (
                <li key={lesson}>{lesson}</li>
              ))}
            </ol>
          </div>
          <div>
            <h4>{labels.time}</h4>
            <p>{module.duration} {labels.video}</p>
          </div>
          <div>
            <h4>{labels.homework}</h4>
            <p>{module.homework}</p>
          </div>
          <div>
            <h4>{labels.materials}</h4>
            <ul>
              {module.materials.map((material) => (
                <li key={material}>{material}</li>
              ))}
            </ul>
          </div>
        </AccordionItem>
      ))}
    </div>
  );
}
