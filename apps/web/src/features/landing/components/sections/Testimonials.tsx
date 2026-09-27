"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { metrics, reviews } from "../../content";
import { Icon } from "../ui/Icon";
import { ReviewCard } from "../ui/ReviewCard";
import { SectionTitle } from "../ui/SectionTitle";
import { StatCard } from "../ui/StatCard";

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const updateEdges = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setEdges({ start: track.scrollLeft < 8, end: track.scrollLeft + track.clientWidth >= track.scrollWidth - 8 });
  }, []);

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, [updateEdges]);

  const scrollBy = (direction: 1 | -1) => {
    const track = trackRef.current;
    const card = track?.querySelector<HTMLElement>(".review");
    if (!track || !card) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollBy({ left: direction * (card.offsetWidth + 24), behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section id="results" className="results section" aria-labelledby="results-title">
      <div className="container">
        <div className="results__head">
          <SectionTitle id="results-title" index="07" eyebrow="Социално доказателство" title="Резултати на ученичките" script="истории, които вдъхновяват" />
          <div className="slider-controls">
            <button type="button" className="icon-button" onClick={() => scrollBy(-1)} disabled={edges.start} aria-label="Предишна история">
              <Icon name="arrow-left" size={20} />
            </button>
            <button type="button" className="icon-button" onClick={() => scrollBy(1)} disabled={edges.end} aria-label="Следваща история">
              <Icon name="arrow-right" size={20} />
            </button>
          </div>
        </div>
        <dl className="metrics">
          {metrics.map((metric) => (
            <StatCard key={metric.label} {...metric} />
          ))}
        </dl>
      </div>
      <div ref={trackRef} className="results__track" onScroll={updateEdges} role="region" aria-label="Истории на ученички — превърти хоризонтално" tabIndex={0}>
        {reviews.map((review) => (
          <ReviewCard key={review.handle} review={review} />
        ))}
      </div>
    </section>
  );
}
