import { notFound } from "next/navigation";
import { lang } from "next/root-params";
import { hasLocale, type Locale } from "./config";
import type { CommonDictionary } from "./dictionaries/types";

const dictionaries: Record<Locale, () => Promise<CommonDictionary>> = {
  bg: () => import("./dictionaries/bg").then((module) => module.default),
  ua: () => import("./dictionaries/ua").then((module) => module.default),
};

/** Current locale from the `[lang]` root segment. Server-only. */
export async function getLocale(): Promise<Locale> {
  const locale = await lang();
  if (!hasLocale(locale)) notFound();
  return locale;
}

export async function getDictionary(): Promise<CommonDictionary> {
  return dictionaries[await getLocale()]();
}
