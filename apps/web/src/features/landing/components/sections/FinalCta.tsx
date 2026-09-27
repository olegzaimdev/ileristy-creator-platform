import { Button } from "../ui/Button";
import { ImageCard } from "../ui/ImageCard";
import { Script } from "../ui/Script";

export function FinalCta() {
  return (
    <section className="final-cta" aria-labelledby="final-title">
      <div className="final-cta__frame container">
        <ImageCard className="final-cta__image" alt="Валерия на залез с камера в ръка" tone="espresso" shape="square" ratio="auto" parallax />
        <div className="final-cta__content">
          <Script className="final-cta__script">създавай. развивай се. печели.</Script>
          <h2 id="final-title" className="final-cta__title reveal-text">
            <span className="nowrap">Твоят нов етап</span>
            <br />
            <em>започва тук.</em>
          </h2>
          <p className="final-cta__lead">Създавай. Развивай се. Печели от това, което обичаш.</p>
          <Button href="#pricing" size="lg" arrow>
            Запиши се за курса
          </Button>
        </div>
      </div>
    </section>
  );
}
