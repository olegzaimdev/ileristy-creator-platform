import type { ReactNode } from "react";

type BadgeProps = { tone?: "blush" | "outline" | "inverse"; children: ReactNode; className?: string };

export function Badge({ tone = "blush", children, className }: BadgeProps) {
  return <span className={["badge", `badge--${tone}`, className].filter(Boolean).join(" ")}>{children}</span>;
}

/** Marks illustrative data that must be verified before launch. */
export function SampleTag({ label, title }: { label: string; title?: string }) {
  return (
    <span className="sample-tag" title={title}>
      {label}
    </span>
  );
}
