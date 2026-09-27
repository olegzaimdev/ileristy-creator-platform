import type { ElementType, ReactNode } from "react";

type ScriptProps = { as?: ElementType; size?: "md" | "lg"; className?: string; children: ReactNode };

/** Handwritten accent. Short phrases only — never body copy. */
export function Script({ as: Tag = "span", size = "lg", className, children }: ScriptProps) {
  return <Tag className={["script", `script--${size}`, className].filter(Boolean).join(" ")}>{children}</Tag>;
}
