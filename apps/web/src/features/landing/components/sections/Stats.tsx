import { stats } from "../../content";
import { StatCard } from "../ui/StatCard";

export function Stats() {
  return (
    <dl className="stats reveal">
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </dl>
  );
}
