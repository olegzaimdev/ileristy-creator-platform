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

/** `money("bg", 49000, "EUR")` → "490,00 €". `amountMinor` is in the currency's minor unit (cents). */
export function money(locale: Locale, amountMinor: number, currency: string) {
  const format = new Intl.NumberFormat(htmlLang[locale], { style: "currency", currency });
  const { maximumFractionDigits = 2 } = format.resolvedOptions();
  return format.format(amountMinor / 10 ** maximumFractionDigits);
}
