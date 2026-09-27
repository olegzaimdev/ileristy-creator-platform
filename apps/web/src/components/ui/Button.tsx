import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "inverse" | "link";

type Common = { variant?: Variant; size?: "md" | "lg"; block?: boolean; arrow?: boolean; children: ReactNode };

type ButtonProps =
  | (Common & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
  | (Common & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined });

export function Button({ variant = "primary", size = "md", block, arrow, children, className, ...rest }: ButtonProps) {
  const classes = ["btn", `btn--${variant}`, `btn--${size}`, block && "btn--block", className].filter(Boolean).join(" ");
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <svg className="btn__arrow" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M4 10h11M11 5.5 15.5 10 11 14.5" fill="none" stroke="currentColor" strokeWidth="1.3" />
        </svg>
      )}
    </>
  );

  if ("href" in rest && rest.href !== undefined) {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
