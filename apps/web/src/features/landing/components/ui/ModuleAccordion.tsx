import type { Module } from "../../content";

/* Native <details name> gives an exclusive, keyboard-accessible accordion with no JS. */
export function ModuleAccordion({ modules, name = "modules" }: { modules: Module[]; name?: string }) {
  return (
    <div className="module-list">
      {modules.map((module, i) => (
        <details key={module.number} name={name} className="accordion module" open={i === 0}>
          <summary className="accordion__summary">
            <span className="module__number">Модул {module.number}</span>
            <span className="module__title">{module.title}</span>
            <span className="module__meta">
              {module.lessons.length} урока · {module.duration}
            </span>
            <span className="accordion__icon" aria-hidden="true" />
          </summary>
          <div className="accordion__body module__body">
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
          </div>
        </details>
      ))}
    </div>
  );
}
