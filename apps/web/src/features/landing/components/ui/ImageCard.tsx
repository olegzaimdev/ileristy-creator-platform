import Image from "next/image";
import type { CSSProperties } from "react";
import type { ImageTone } from "../../content";

type ImageCardProps = {
  alt: string;
  src?: string;
  tone?: ImageTone;
  shape?: "rounded" | "arch" | "circle" | "soft" | "square";
  ratio?: string;
  caption?: string;
  mono?: boolean;
  parallax?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
  style?: CSSProperties;
};

/**
 * Photography slot. Renders an optimised next/image when `src` is set, otherwise
 * a warm tonal placeholder that keeps the composition honest until real
 * photography is supplied.
 */
export function ImageCard({
  alt,
  src,
  tone = "blush",
  shape = "rounded",
  ratio = "4 / 5",
  caption,
  mono,
  parallax,
  priority,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className,
  style,
}: ImageCardProps) {
  const classes = ["image-card", `image-card--${shape}`, `tone-${tone}`, mono && "image-card--mono", className]
    .filter(Boolean)
    .join(" ");

  return (
    <figure className={classes} style={{ aspectRatio: ratio, ...style }}>
      <div className={parallax ? "image-card__media parallax" : "image-card__media"}>
        {src ? (
          <Image src={src} alt={alt} fill sizes={sizes} priority={priority} />
        ) : (
          <div className="image-card__placeholder" {...(alt ? { role: "img", "aria-label": alt } : { "aria-hidden": true })} />
        )}
      </div>
      {caption && <figcaption className="image-card__caption">{caption}</figcaption>}
    </figure>
  );
}
