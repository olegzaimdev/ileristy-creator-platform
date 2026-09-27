import type { ReactNode } from "react";

type AccordionItemProps = {
  title: ReactNode;
  children: ReactNode;
  /** Items sharing a `name` behave as an exclusive group (one open at a time). */
  name?: string;
  defaultOpen?: boolean;
  className?: string;
  summaryClassName?: string;
  bodyClassName?: string;
};

/* Native <details>: keyboard and screen-reader support with no JS; the open/close
   animation is CSS (::details-content + interpolate-size). */
export function AccordionItem({ title, children, name, defaultOpen, className, summaryClassName, bodyClassName }: AccordionItemProps) {
  return (
    <details name={name} open={defaultOpen} className={["accordion", className].filter(Boolean).join(" ")}>
      <summary className={["accordion__summary", summaryClassName].filter(Boolean).join(" ")}>
        {title}
        <span className="accordion__icon" aria-hidden="true" />
      </summary>
      <div className={["accordion__body", bodyClassName].filter(Boolean).join(" ")}>{children}</div>
    </details>
  );
}
