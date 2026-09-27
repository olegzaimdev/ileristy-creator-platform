import type { Benefit } from "../../content";
import { Badge } from "./Badge";
import { Icon } from "./Icon";

export function CourseCard({ icon, title, text, tier, index }: Benefit & { index: number }) {
  return (
    <article className="course-card reveal">
      <div className="course-card__top">
        <Icon name={icon} size={40} className="course-card__icon" />
        <span className="course-card__index">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3 className="course-card__title">{title}</h3>
      <p className="course-card__text">{text}</p>
      {tier && <Badge tone="outline">{tier}</Badge>}
    </article>
  );
}
