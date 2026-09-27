import { tickerWords } from "../../content";
import { Icon } from "../ui/Icon";

export function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {[...tickerWords, ...tickerWords].map((word, i) => (
          <span key={i}>
            {word}
            <Icon name="sparkle" size={10} />
          </span>
        ))}
      </div>
    </div>
  );
}
