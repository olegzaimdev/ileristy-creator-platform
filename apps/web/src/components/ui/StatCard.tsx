import { SampleTag } from "./Badge";

export type StatCardProps = { value: string; label: string; sample?: boolean; inverse?: boolean };

/** Render inside a `<dl className="stats">` group. */
export function StatCard({ value, label, sample, inverse }: StatCardProps) {
  return (
    <div className={inverse ? "stat stat--inverse" : "stat"}>
      <dt className="stat__label">
        {label}
        {sample && <SampleTag />}
      </dt>
      <dd className="stat__value">{value}</dd>
    </div>
  );
}
