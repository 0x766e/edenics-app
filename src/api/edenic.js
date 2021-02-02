import { appendPossibilitiesForLetters } from './combinators';

const MAPPING_HEBREW = {
  א: ['A', 'E', 'I', 'O', 'U'], //TODO Should replace by OO or OA?
  ב: ['B', 'BH', '(V)'],
  ג: ['G'],
  ד: ['D'],
  ה: ['H'],
  ו: ['V', 'OO', 'OA'],
  ז: ['Z'],
  ח: ['[K]H', 'K[H]'],
  ט: ['DT'],
  י: ['Y'],
  כ: ['K', 'KH'],
  ך: ['K', 'KH'],
  ל: ['L'],
  מ: ['M'],
  ם: ['M'],
  נ: ['N'],
  ן: ['N'],
  ס: ['$'],
  ע: ['[A]', '[E]', '[I]', '[O]', '[U]', 'GH'], //TODO Should replace by OO or OA?
  פ: ['P', 'PH', 'F'],
  ף: ['P', 'PH', 'F'],
  צ: ['TS', 'ST'], //TODO ST isn't official. Should keep it? It's only for european languages
  ץ: ['TS', 'ST'], //TODO ST isn't official. Should keep it? It's only for european languages
  ק: ['Q'],
  ר: ['R', 'WR'],
  ש: ['SH', 'S'],
  ת: ['T', 'TH', '(S)'],
};

/**
 * Validate a hebrew letter.
 */
export const isHebrewLetter = (hebrewLetter) =>
  !!hebrewLetter && hebrewLetter in MAPPING_HEBREW;

/**
 * Transcribes a hebrew letter to an array of edenic possibilities.
 */
export const transcribeHebrewLetter = (hebrewLetter) =>
  isHebrewLetter(hebrewLetter) ? MAPPING_HEBREW[hebrewLetter] : [];

/**
 * Transcribe a hebrew word to an array of Edenic possibilities.
 */
export const transcribeHebrewWord = (hebrewWord) => {
  const validWord = [...hebrewWord].filter((l) => isHebrewLetter(l)).join('');
  return appendPossibilitiesForLetters(validWord, transcribeHebrewLetter);
};
