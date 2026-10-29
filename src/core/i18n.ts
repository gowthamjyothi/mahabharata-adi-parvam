/**
 * Language primitives.
 *
 * Every human-readable string in the archive is stored as a `Bilingual`
 * value object so that no screen ever falls back to a half-translated
 * record. Content authors use `bi(en, te)`; readers use `pick(value, lang)`,
 * which also falls back to English if a Telugu line is missing.
 */

export type Lang = 'en' | 'te';

export interface Bilingual {
  readonly en: string;
  readonly te: string;
}

export const bi = (en: string, te: string): Bilingual => ({ en, te });

export const pick = (value: Bilingual, lang: Lang): string => {
  const chosen = value[lang];
  return chosen && chosen.trim().length > 0 ? chosen : value.en;
};

export const LANG_STORAGE_KEY = 'adi-parva.lang';

export const isLang = (value: unknown): value is Lang => value === 'en' || value === 'te';

/**
 * Drops honorifics so that "Lord Krishna" is indexed under "Krishna" and
 * "King Parikshit" under "Parikshit" — typing "k" should offer Krishna
 * before a wall of "King …" entries.
 */
const TITLE_PREFIX =
  /^(the\s+)?(king|queen|lord|sage|guru|emperor|empress|goddess|prince|princess|rishi|sri)\s+/i;

export const stripTitles = (value: string): string => value.replace(TITLE_PREFIX, '').trim();

/** Normalises Latin + Telugu text for prefix search. */
export const normalise = (input: string): string => {
  let text = input.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  text = text.replace(/ṃ/g, 'm').replace(/ḥ/g, 'h').replace(/ś/g, 's').replace(/ṣ/g, 's');
  text = text.replace(/ṛ/g, 'r').replace(/ṅ/g, 'n').replace(/ñ/g, 'n').replace(/ṭ/g, 't');
  text = text.replace(/ḍ/g, 'd').replace(/ṇ/g, 'n').replace(/ā/g, 'a').replace(/ī/g, 'i');
  text = text.replace(/ū/g, 'u').replace(/ē/g, 'e').replace(/ō/g, 'o');
  return text.toLowerCase().replace(/['’.\-–—]/g, '').trim();
};
