import { hero } from "../../content";
import { SampleTag } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Icon } from "../ui/Icon";
import { ImageCard } from "../ui/ImageCard";
import { Script } from "../ui/Script";

export function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero__media">
        <div className="hero__backdrop" aria-hidden="true" />
        <ImageCard
          className="hero__portrait"
          alt="Валерия в светла студийна обстановка, държи телефон за снимане"
          caption="Фото · портрет на Валерия"
          tone="blush"
          shape="arch"
          ratio="4 / 5.3"
          priority
          parallax
        />
        <ImageCard className="hero__detail" alt="Детайл: ръце с телефон и кафе на бюрото" tone="taupe" shape="circle" ratio="1" mono />
        <Script className="hero__signature" size="lg">
          content creator
        </Script>
        <p className="hero__vertical" aria-hidden="true">
          Vol. 01 — Creator education
        </p>
      </div>

      <div className="hero__copy">
        <p className="eyebrow">
          <Icon name="sparkle" size={12} className="eyebrow__star" />
          {hero.label}
        </p>
        <h1 id="hero-title" className="hero__title">
          <span className="hero__line hero__line--italic">Стани</span>
          <span className="hero__line hero__line--big">SMM & UGC</span>
          <span className="hero__line hero__line--indent">експерт</span>
        </h1>
        <p className="hero__lead">{hero.lead}</p>
        <div className="hero__actions">
          <Button href="#pricing" size="lg" arrow>
            Избери пакет
          </Button>
          <Button href="#program" size="lg" variant="secondary">
            Виж програмата
          </Button>
        </div>
        <div className="hero__proof">
          <div className="avatar-stack" aria-hidden="true">
            <span className="avatar tone-blush" />
            <span className="avatar tone-taupe" />
            <span className="avatar tone-rose" />
            <span className="avatar avatar--more">+</span>
          </div>
          <p>
            <strong>{hero.proof.value}</strong> {hero.proof.text}
            {hero.proof.sample && <SampleTag />}
          </p>
        </div>
      </div>
    </section>
  );
}
