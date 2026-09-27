import { getLocale } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import type { LandingDictionary } from "../types";

const dictionaries: Record<Locale, () => Promise<LandingDictionary>> = {
  bg: () => import("./bg").then((module) => module.default),
  ua: () => import("./ua").then((module) => module.default),
};

export async function getLandingDictionary(): Promise<LandingDictionary> {
  return dictionaries[await getLocale()]();
}
