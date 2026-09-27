export type IconName = "lessons" | "support" | "community" | "templates" | "practice" | "feedback";

/* Hand-drawn 1.2px line set on a 32px grid — deliberately thin and irregular. */
const paths: Record<IconName | "check" | "plus" | "sparkle" | "arrow-left" | "arrow-right" | "close", string> = {
  lessons: "M5 8.5c0-1.4 1.1-2.5 2.5-2.5h17c1.4 0 2.5 1.1 2.5 2.5v11c0 1.4-1.1 2.5-2.5 2.5h-17A2.5 2.5 0 0 1 5 19.5v-11ZM13.5 10.5v6l5-3-5-3ZM11 26h10",
  support: "M16 27c-6-3.6-10-7.7-10-12.3C6 11.5 8.4 9 11.4 9c2 0 3.6 1.1 4.6 2.7C17 10.1 18.6 9 20.6 9c3 0 5.4 2.5 5.4 5.7 0 4.6-4 8.7-10 12.3ZM4 5l2 2M28 5l-2 2",
  community: "M11.5 14a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM21.5 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4.5 25c.6-4.4 3.4-7 7-7s6.4 2.6 7 7M18.5 16.2c.9-.5 1.9-.7 3-.7 3.1 0 5.4 2.2 6 5.9",
  templates: "M9 5.5h11l5 5V24a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 9 24V5.5ZM20 5.5V11h5M5.5 9v17.5A2.5 2.5 0 0 0 8 29h11M13 16h8M13 20h6",
  practice: "M4.5 11.5c0-1.4 1.1-2.5 2.5-2.5h3l2-3h8l2 3h3c1.4 0 2.5 1.1 2.5 2.5v11c0 1.4-1.1 2.5-2.5 2.5H7a2.5 2.5 0 0 1-2.5-2.5v-11ZM16 21.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM23.5 12.5h.01",
  feedback: "M6 7.5C6 6.1 7.1 5 8.5 5h15C24.9 5 26 6.1 26 7.5v11c0 1.4-1.1 2.5-2.5 2.5H14l-6 5v-5.2A2.5 2.5 0 0 1 6 18.5v-11ZM11.5 13l3 3 6-6",
  check: "M6 16.5 12.5 23 26 9",
  plus: "M16 6v20M6 16h20",
  sparkle: "M16 3c.8 7 5.9 12.2 13 13-7.1.8-12.2 6-13 13-.8-7-5.9-12.2-13-13 7.1-.8 12.2-6 13-13Z",
  "arrow-left": "M26 16H6M13 9l-7 7 7 7",
  "arrow-right": "M6 16h20M19 9l7 7-7 7",
  close: "M8 8l16 16M24 8 8 24",
};

export type IconKey = keyof typeof paths;

export function Icon({ name, size = 32, className }: { name: IconKey; size?: number; className?: string }) {
  return (
    <svg className={["icon", className].filter(Boolean).join(" ")} width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d={paths[name]} fill={name === "sparkle" ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
