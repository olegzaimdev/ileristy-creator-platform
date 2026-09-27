import type { ReactNode } from "react";
import { Script } from "./Script";

type SectionTitleProps = {
  id?: string;
  index?: string;
  eyebrow?: string;
  title: ReactNode;
  script?: string;
  lead?: ReactNode;
  align?: "start" | "center";
  as?: "h1" | "h2";
  className?: string;
};

export function SectionTitle({ id, index, eyebrow, title, script, lead, align = "start", as: Heading = "h2", className }: SectionTitleProps) {
  return (
    <header className={["section-title", `section-title--${align}`, className].filter(Boolean).join(" ")}>
      {(index || eyebrow) && (
        <p className="eyebrow">
          {index && <span className="eyebrow__index">{index}</span>}
          {eyebrow}
        </p>
      )}
      <Heading id={id} className="section-title__heading reveal-text">
        {title}
      </Heading>
      {script && (
        <Script className="section-title__script" size="md">
          {script}
        </Script>
      )}
      {lead && <p className="section-title__lead">{lead}</p>}
    </header>
  );
}
