import type { ReactNode } from "react";

export type StatCardProps = { value: string; label: string; tag?: ReactNode; inverse?: boolean };

/** Render inside a `<dl className="stats">` group. `tag` is e.g. a SampleTag. */
export function StatCard({ value, label, tag, inverse }: StatCardProps) {
  return (
    <div className={inverse ? "stat stat--inverse" : "stat"}>
      <dt className="stat__label">
        {label}
        {tag}
      </dt>
      <dd className="stat__value">{value}</dd>
    </div>
  );
}
