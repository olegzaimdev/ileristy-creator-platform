"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { Icon, ReviewCard, SectionTitle, StatCard } from "@/components/ui";
import type { LandingDictionary } from "../../types";

type TestimonialsProps = {
  t: LandingDictionary["results"];
  reviewLabels: { thread: string; photoAlt: string };
  sample: ReactNode;
};

export function Testimonials({ t, reviewLabels, sample }: TestimonialsProps) {
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
      <div className="page-container">
        <div className="results__head">
          <SectionTitle id="results-title" index="07" eyebrow={t.eyebrow} title={t.title} script={t.script} />
          <div className="slider-controls">
            <button type="button" className="icon-button" onClick={() => scrollBy(-1)} disabled={edges.start} aria-label={t.prev}>
              <Icon name="arrow-left" size={20} />
            </button>
            <button type="button" className="icon-button" onClick={() => scrollBy(1)} disabled={edges.end} aria-label={t.next}>
              <Icon name="arrow-right" size={20} />
            </button>
          </div>
        </div>
        <dl className="metrics">
          {t.metrics.map((metric) => (
            <StatCard key={metric.label} value={metric.value} label={metric.label} tag={metric.sample ? sample : undefined} />
          ))}
        </dl>
      </div>
      <div ref={trackRef} className="results__track" onScroll={updateEdges} role="region" aria-label={t.trackLabel} tabIndex={0}>
        {t.reviews.map((review) => (
          <ReviewCard key={review.handle} review={review} labels={reviewLabels} tag={sample} />
        ))}
      </div>
    </section>
  );
}
