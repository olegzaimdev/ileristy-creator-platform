/*
 * Landing fixture content. Everything marked `sample: true` is illustrative
 * and must be replaced with verified data (or hidden) before launch — see
 * DESIGN.md "Never insert fake testimonials, results, …".
 */

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "За мен", href: "#about" },
  { label: "Курсът", href: "#course" },
  { label: "Програма", href: "#program" },
  { label: "Пакети", href: "#pricing" },
  { label: "Резултати", href: "#results" },
  { label: "ЧЗВ", href: "#faq" },
  { label: "Контакти", href: "#contacts" },
];

export const hero = {
  label: "SMM & UGC · онлайн обучение",
  lead: "Създавай съдържание, което привлича клиенти, развива дохода ти и отваря нови възможности — където и да си по света.",
  proof: { value: "30 000+", text: "аудитория в социалните мрежи", sample: true },
};

export const tickerWords = ["Стратегия", "Reels", "UGC", "Stories", "Брандове", "Клиенти", "Личен бранд", "Монтаж"];

export type Stat = { value: string; label: string; sample?: boolean };

export const stats: Stat[] = [
  { value: "4+", label: "години опит", sample: true },
  { value: "30K+", label: "аудитория", sample: true },
  { value: "100+", label: "бранда и проекта", sample: true },
];

export type IconName = "lessons" | "support" | "community" | "templates" | "practice" | "feedback";

export type Benefit = { icon: IconName; title: string; text: string; tier?: string };

export const benefits: Benefit[] = [
  { icon: "lessons", title: "Практически уроци", text: "Кратки, ясни уроци без излишна теория — гледаш и веднага прилагаш." },
  { icon: "templates", title: "Шаблони и материали", text: "Чеклисти, скриптове, контент планове и шаблони за оферти към брандове." },
  { icon: "practice", title: "Практика", text: "Реални задачи: снимаш, монтираш и изграждаш портфолио още по време на курса." },
  { icon: "feedback", title: "Обратна връзка", text: "Лична проверка на домашните и конкретни насоки какво да подобриш.", tier: "PRO · PREMIUM" },
  { icon: "community", title: "Затворена общност", text: "Група с момичета, които вървят по същия път — въпроси, идеи и подкрепа.", tier: "PRO · PREMIUM" },
  { icon: "support", title: "Подкрепа", text: "Не оставаш сама с въпросите си — отговори и посока, когато ти трябват." },
];

export const audience = [
  "Искаш да овладееш нова професия и да печелиш онлайн.",
  "Вече водиш социални мрежи, но искаш повече клиенти.",
  "Искаш да създаваш UGC и да работиш с брандове.",
  "Искаш да развиваш личния си бранд.",
  "Мечтаеш за свобода, пътувания и работа от всяка точка на света.",
];

export type Topic = { key: string; title: string; items: string[] };

export const topics: Topic[] = [
  { key: "01", title: "SMM", items: ["Стратегия", "Позициониране", "Оформяне на профила"] },
  { key: "02", title: "Content", items: ["Снимане", "Reels", "Stories", "Монтаж"] },
  { key: "03", title: "UGC", items: ["Работа с брандове", "Създаване на UGC", "Търговски предложения"] },
  { key: "04", title: "Clients", items: ["Търсене на клиенти", "Комуникация", "Портфолио"] },
  { key: "05", title: "Sales", items: ["Продажба на услуги", "Ценообразуване", "Преговори"] },
  { key: "06", title: "Personal brand", items: ["Позициониране", "Визия", "Контент система"] },
];

export type Module = {
  number: string;
  title: string;
  lessons: string[];
  duration: string;
  homework: string;
  materials: string[];
};

/* Proposed structure — the published syllabus is still pending. */
export const modules: Module[] = [
  {
    number: "01",
    title: "Основи на SMM",
    lessons: ["Как работят платформите днес", "Цели, аудитория и позициониране", "Анатомия на силен профил"],
    duration: "≈ 2 ч.",
    homework: "Одит на собствения профил по чеклист",
    materials: ["Чеклист за профил", "Шаблон за позициониране"],
  },
  {
    number: "02",
    title: "Съдържание и визия",
    lessons: ["Контент рубрики и план", "Визуална посока и moodboard", "Светлина и композиция с телефон"],
    duration: "≈ 2 ч. 30 мин.",
    homework: "Moodboard и контент план за 2 седмици",
    materials: ["Контент план", "Библиотека с референси"],
  },
  {
    number: "03",
    title: "Reels и видео",
    lessons: ["Сценарий и кука в първите секунди", "Снимане на кадри и преходи", "Монтаж в CapCut"],
    duration: "≈ 3 ч.",
    homework: "3 Reels по готов сценарий",
    materials: ["Шаблони за сценарии", "Пресети за монтаж"],
  },
  {
    number: "04",
    title: "UGC",
    lessons: ["Какво купуват брандовете", "Формати: unboxing, review, how-to", "Звук, текст и субтитри"],
    duration: "≈ 2 ч. 30 мин.",
    homework: "UGC видео за продукт по избор",
    materials: ["UGC брийф", "Чеклист за снимане"],
  },
  {
    number: "05",
    title: "Работа с брандове",
    lessons: ["Портфолио, което продава", "Търговско предложение", "Договор, срокове и права"],
    duration: "≈ 2 ч.",
    homework: "Портфолио и 5 изпратени предложения",
    materials: ["Шаблон за портфолио", "Шаблон за оферта"],
  },
  {
    number: "06",
    title: "Клиенти и продажби",
    lessons: ["Къде са клиентите", "Първи разговор и бриф", "Ценообразуване на услугите"],
    duration: "≈ 2 ч.",
    homework: "Пакет услуги с цени",
    materials: ["Скриптове за разговор", "Калкулатор на цена"],
  },
  {
    number: "07",
    title: "Монетизация",
    lessons: ["Постоянни клиенти и абонаменти", "Личен бранд като източник на поръчки", "План за следващите 90 дни"],
    duration: "≈ 1 ч. 30 мин.",
    homework: "Личен план за развитие",
    materials: ["План за 90 дни"],
  },
];

export const journey = ["Уроци", "Практика", "Домашни задачи", "Обратна връзка", "Първи проекти", "Първи клиенти"];

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

/* Canonical START / PRO / PREMIUM from DESIGN.md. Prices come from the backend. */
export const packages: Package[] = [
  {
    code: "START",
    descriptor: "Самостоятелно обучение",
    promise: "Получавам знанията и ги прилагам самостоятелно.",
    features: [
      "Всички лекции и пълната програма",
      "Материали, шаблони и чеклисти",
      "Практически примери",
      "Обучителен Telegram канал",
      "Достъп за определен срок",
    ],
    cta: "Избери START",
  },
  {
    code: "PRO",
    descriptor: "Обучение с обратна връзка",
    promise: "Уча, практикувам и получавам обратна връзка от експерт.",
    badge: "Препоръчан",
    features: [
      "Всичко от START",
      "Практически домашни задачи",
      "Лична проверка от Лери",
      "Затворен групов чат",
      "Групов Zoom / Q&A · 60–90 мин.",
    ],
    cta: "Избери PRO",
  },
  {
    code: "PREMIUM",
    descriptor: "Персонална стратегия и практика на живо",
    promise: "Моята ситуация. Моят следващ ход.",
    featured: true,
    accent: "личен подход",
    features: [
      "Всичко от PRO",
      "Персонален бизнес одит",
      "Индивидуална стратегическа сесия · 60 мин.",
      "Уъркшоп по съдържание в Пловдив",
      "Допълнителни експертни сесии",
    ],
    cta: "Избери PREMIUM",
  },
];

export const comparison: { row: string; includes: [boolean, boolean, boolean] }[] = [
  { row: "Лекции, програма, шаблони и материали", includes: [true, true, true] },
  { row: "Обучителен Telegram канал", includes: [true, true, true] },
  { row: "Домашни задачи с лична проверка", includes: [false, true, true] },
  { row: "Групов чат и обратна връзка", includes: [false, true, true] },
  { row: "Групов Zoom / Q&A", includes: [false, true, true] },
  { row: "Персонален бизнес одит", includes: [false, false, true] },
  { row: "Лична стратегическа сесия · 60 мин.", includes: [false, false, true] },
  { row: "Уъркшоп по съдържание · Пловдив", includes: [false, false, true] },
  { row: "Допълнителни експертни сесии", includes: [false, false, true] },
];

export const metrics: Stat[] = [
  { value: "+500 €", label: "първи клиент", sample: true },
  { value: "10K+", label: "ръст на аудиторията", sample: true },
  { value: "New career", label: "нова професия", sample: true },
  { value: "Remote", label: "работа отвсякъде", sample: true },
];

export type Review =
  | { kind: "quote"; name: string; handle: string; role: string; quote: string; metric?: string }
  | { kind: "chat"; name: string; handle: string; messages: { from: "me" | "them"; text: string }[]; metric: string }
  | { kind: "photo"; name: string; handle: string; caption: string; metric: string; tone: ImageTone };

export type ImageTone = "blush" | "taupe" | "espresso" | "ivory" | "rose";

export const reviews: Review[] = [
  {
    kind: "quote",
    name: "Мария",
    handle: "@maria.creates",
    role: "UGC creator",
    quote: "Три седмици след курса подписах първото си платено сътрудничество с козметичен бранд.",
    metric: "+500 € · първи клиент",
  },
  {
    kind: "chat",
    name: "Никол",
    handle: "@nicole.smm",
    metric: "2 постоянни клиента",
    messages: [
      { from: "them", text: "Лери, току-що ми одобриха офертата! 🥹" },
      { from: "me", text: "Браво! Разкажи ми всичко ✨" },
      { from: "them", text: "Ресторантът иска месечен пакет — 12 Reels и stories." },
    ],
  },
  { kind: "photo", name: "Дани", handle: "@dani.films", caption: "От хоби до видеограф на свободна практика", metric: "Нова професия", tone: "taupe" },
  {
    kind: "quote",
    name: "Виктория",
    handle: "@viki.content",
    role: "SMM специалист",
    quote: "Най-ценното беше системата: вече знам какво да снимам, как да го продам и колко да струва.",
    metric: "10K+ ръст",
  },
  { kind: "photo", name: "Ели", handle: "@eli.remote", caption: "Работи с клиенти от Барселона", metric: "Remote", tone: "blush" },
];

export type Faq = { q: string; a: string };

export const faq: Faq[] = [
  { q: "За кого е подходящ курсът?", a: "За момичета, които искат да овладеят SMM и UGC от нулата, и за тези, които вече създават съдържание, но искат система, повече клиенти и по-високи цени." },
  { q: "Нужен ли е опит в SMM?", a: "Не. Започваме от основите и стъпка по стъпка стигаме до работа с реални клиенти. Нужни са ти телефон, желание и време за практика." },
  { q: "Ще мога ли да работя с брандове?", a: "Курсът те учи как да изградиш портфолио, да подготвиш търговско предложение и да общуваш с брандове. Резултатът зависи от практиката ти — не обещаваме гарантирани поръчки." },
  { q: "Колко продължава обучението?", a: "Продължителността на потока и срокът на достъп до материалите ще бъдат посочени за всеки пакет преди отваряне на записването." },
  { q: "Има ли обратна връзка?", a: "В PRO и PREMIUM Лери лично проверява домашните и дава обратна връзка. PREMIUM добавя индивидуален одит и стратегическа сесия. START е за самостоятелно обучение." },
  { q: "Мога ли да платя на части?", a: "В момента е предвидено еднократно плащане в евро. Ако се появи възможност за разсрочено плащане, ще я посочим до пакетите." },
  { q: "Какво включва PREMIUM?", a: "Всичко от PRO, плюс персонален бизнес одит, индивидуална 60-минутна стратегическа сесия, практически уъркшоп по създаване на съдържание в Пловдив и допълнителни експертни сесии." },
];

export const socials: NavItem[] = [
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "TikTok", href: "https://tiktok.com/" },
  { label: "Telegram", href: "https://t.me/" },
];

export const legal: NavItem[] = [
  { label: "Политика за поверителност", href: "#privacy" },
  { label: "Общи условия", href: "#terms" },
];
