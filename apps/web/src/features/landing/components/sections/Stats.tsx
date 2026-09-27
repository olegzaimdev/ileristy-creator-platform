import type { ReactNode } from "react";
import { StatCard } from "@/components/ui";
import type { Stat } from "../../types";

export function Stats({ stats, sample, className = "stats reveal" }: { stats: Stat[]; sample: ReactNode; className?: string }) {
  return (
    <dl className={className}>
      {stats.map((stat) => (
        <StatCard key={stat.label} value={stat.value} label={stat.label} tag={stat.sample ? sample : undefined} />
      ))}
    </dl>
  );
}
