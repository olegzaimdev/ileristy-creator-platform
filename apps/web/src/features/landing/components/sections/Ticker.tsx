import { Icon } from "@/components/ui";

export function Ticker({ words }: { words: string[] }) {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {[...words, ...words].map((word, i) => (
          <span key={i}>
            {word}
            <Icon name="sparkle" size={10} />
          </span>
        ))}
      </div>
    </div>
  );
}
