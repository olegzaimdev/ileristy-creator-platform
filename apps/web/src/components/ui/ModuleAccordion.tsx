import { AccordionItem } from "./Accordion";

export type Module = {
  number: string;
  title: string;
  lessons: string[];
  duration: string;
  homework: string;
  materials: string[];
};

/** Course programme: an exclusive accordion, one module open at a time. */
export function ModuleAccordion({ modules, name = "modules" }: { modules: Module[]; name?: string }) {
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
              <span className="module__number">Модул {module.number}</span>
              <span className="module__title">{module.title}</span>
              <span className="module__meta">
                {module.lessons.length} урока · {module.duration}
              </span>
            </>
          }
        >
          <div>
            <h4>Уроци</h4>
            <ol>
              {module.lessons.map((lesson) => (
                <li key={lesson}>{lesson}</li>
              ))}
            </ol>
          </div>
          <div>
            <h4>Време</h4>
            <p>{module.duration} видео</p>
          </div>
          <div>
            <h4>Домашна задача</h4>
            <p>{module.homework}</p>
          </div>
          <div>
            <h4>Материали</h4>
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
