import en from "./en.json";
import es from "./es.json";

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export type Dictionary = typeof en;
const dictionaries: Record<Locale, Dictionary> = { en, es };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/** Rutas sin prefijo de idioma, siempre con "/" al final. */
export type RoutePath = "/" | "/about-me/" | "/projects/" | "/contact/";

/** Ruta de una página en el idioma pedido: "/" → "/es/", "/projects/" → "/es/projects/". */
export function localizePath(locale: Locale, path: RoutePath): string {
  return locale === defaultLocale ? path : `/${locale}${path}`;
}

export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "es" : "en";
}
