import { htmlLang, type Locale } from "./config";

export type PluralForms = Partial<Record<Intl.LDMLPluralRule, string>> & { other: string };

/** `plural("ua", 5, { one: "урок", few: "уроки", many: "уроків", other: "уроку" })` → "уроків" */
export function plural(locale: Locale, count: number, forms: PluralForms) {
  const rule = new Intl.PluralRules(htmlLang[locale]).select(count);
  return forms[rule] ?? forms.other;
}

/** Replaces `{name}` placeholders: `template("Фото: {name}", { name: "Ели" })`. */
export function template(text: string, values: Record<string, string | number>) {
  return text.replace(/\{(\w+)\}/g, (match, key: string) => (key in values ? String(values[key]) : match));
}
