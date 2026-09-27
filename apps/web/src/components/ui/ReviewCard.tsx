import { SampleTag } from "./Badge";
import { ImageCard, type ImageTone } from "./ImageCard";

export type Review =
  | { kind: "quote"; name: string; handle: string; role: string; quote: string; metric?: string }
  | { kind: "chat"; name: string; handle: string; messages: { from: "me" | "them"; text: string }[]; metric: string }
  | { kind: "photo"; name: string; handle: string; caption: string; metric: string; tone: ImageTone };

function Author({ name, handle }: { name: string; handle: string }) {
  return (
    <div className="review__author">
      <span className="avatar" aria-hidden="true">
        {name[0]}
      </span>
      <span>
        <strong>{name}</strong>
        <small>{handle}</small>
      </span>
    </div>
  );
}

export function ReviewCard({ review }: { review: Review }) {
  if (review.kind === "photo") {
    return (
      <article className="review review--photo">
        <ImageCard alt={`Снимка на ${review.name}`} tone={review.tone} ratio="3 / 4" shape="soft" />
        <div className="review__overlay">
          <SampleTag />
          <p className="review__metric">{review.metric}</p>
          <p className="review__caption">{review.caption}</p>
          <Author name={review.name} handle={review.handle} />
        </div>
      </article>
    );
  }

  if (review.kind === "chat") {
    return (
      <article className="review review--chat">
        <header className="review__chat-head">
          <Author name={review.name} handle={review.handle} />
          <SampleTag />
        </header>
        <ol className="review__thread" aria-label="Разговор">
          {review.messages.map((message, i) => (
            <li key={i} className={`bubble bubble--${message.from}`}>
              {message.text}
            </li>
          ))}
        </ol>
        <p className="review__metric">{review.metric}</p>
      </article>
    );
  }

  return (
    <article className="review review--quote">
      <div className="review__top">
        <span className="review__mark" aria-hidden="true">
          “
        </span>
        <SampleTag />
      </div>
      <blockquote className="review__quote">{review.quote}</blockquote>
      {review.metric && <p className="review__metric">{review.metric}</p>}
      <footer>
        <Author name={review.name} handle={review.handle} />
        <small className="review__role">{review.role}</small>
      </footer>
    </article>
  );
}
