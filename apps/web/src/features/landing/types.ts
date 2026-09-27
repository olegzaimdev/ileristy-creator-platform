import type { CourseCardProps, Module, Review } from "@/components/ui";

export type NavItem = { label: string; href: string };
export type Stat = { value: string; label: string; sample?: boolean };
export type Benefit = Omit<CourseCardProps, "index">;
export type Topic = { key: string; title: string; items: string[] };
export type Faq = { q: string; a: string };
export type ImageText = { alt: string; caption?: string };

export type Package = {
  code: string;
  descriptor: string;
  promise: string;
  features: string[];
  cta: string;
  badge?: string;
  featured?: boolean;
  accent?: string;
};

/*
 * Every visible landing string, per locale. Items marked `sample: true` (and all
 * reviews/metrics) are illustrative and must be replaced with verified data
 * before launch.
 */
export type LandingDictionary = {
  nav: NavItem[];
  header: { homeLabel: string; mainNav: string; mobileNav: string; openMenu: string; closeMenu: string; cta: string; menuScript: string };
  hero: {
    label: string;
    title: [string, string, string];
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    proof: { value: string; text: string; sample?: boolean };
    portrait: ImageText;
    detailAlt: string;
    signature: string;
    vertical: string;
  };
  ticker: string[];
  about: {
    eyebrow: string;
    title: string;
    script: string;
    lead: string;
    body: string[];
    portrait: ImageText;
    lifestyle: ImageText;
    work: ImageText;
    sign: string;
  };
  stats: Stat[];
  course: {
    eyebrow: string;
    title: string;
    lead: string;
    text: string;
    cta: string;
    laptopLabel: string;
    lesson: string;
    phoneLabel: string;
    phoneTag: string;
    polaroidAlt: string;
    polaroidCaption: string;
  };
  benefits: { eyebrow: string; title: string; titleAccent: string; items: Benefit[] };
  audience: { eyebrow: string; title: string; script: string; imageAlt: string; items: string[] };
  learning: { eyebrow: string; title: string; lead: string; image: ImageText; topics: Topic[] };
  modules: { eyebrow: string; title: [string, string]; note: string; badge: string; items: Module[] };
  format: { eyebrow: string; title: string; script: string; steps: string[] };
  pricing: {
    eyebrow: string;
    title: string;
    lead: string;
    price: string;
    priceNote: string;
    compareTitle: string;
    compareRegion: string;
    compareHead: string;
    included: string;
    notIncluded: string;
    packages: Package[];
    comparison: { row: string; includes: [boolean, boolean, boolean] }[];
  };
  enroll: { title: string; text: string; script: string; telegram: string; back: string };
  results: { eyebrow: string; title: string; script: string; prev: string; next: string; trackLabel: string; metrics: Stat[]; reviews: Review[] };
  faq: { eyebrow: string; title: string; script: string; note: string; cta: string; items: Faq[] };
  finalCta: { imageAlt: string; script: string; title: [string, string]; lead: string; cta: string };
  footer: {
    tagline: string;
    sign: string;
    navLabel: string;
    navTitle: string;
    socialTitle: string;
    legalTitle: string;
    rights: string;
    socials: NavItem[];
    legal: NavItem[];
  };
};
