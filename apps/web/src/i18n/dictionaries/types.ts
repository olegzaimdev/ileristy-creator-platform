import type { PluralForms } from "../format";

/** App-wide strings: metadata and labels used inside shared components. */
export type CommonDictionary = {
  meta: { title: string; description: string };
  skipLink: string;
  language: { label: string };
  ui: {
    sample: { label: string; title: string };
    close: string;
    review: { thread: string; photoAlt: string };
    module: {
      label: string;
      lessons: PluralForms;
      lessonsTitle: string;
      time: string;
      video: string;
      homework: string;
      materials: string;
    };
  };
};
