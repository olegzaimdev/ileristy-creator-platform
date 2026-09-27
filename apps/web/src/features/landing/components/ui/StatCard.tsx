import type { Stat } from "../../content";
import { SampleTag } from "./Badge";

export function StatCard({ value, label, sample, inverse }: Stat & { inverse?: boolean }) {
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
