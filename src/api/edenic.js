import {
  appendGeneratedPossibilities,
  insertAllPossibleCombinations,
  permutations,
} from './combinators';

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

const SHIFT_MAPPING = {};

const VOWELS_NATIVE = [
  '[A]',
  '[E]',
  '[I]',
  '[O]',
  '[U]',
  'A',
  'E',
  'I',
  'O',
  'U',
  'OO',
  'OA',
];

const VOWELS_ADDED = ['a', 'e', 'i', 'o', 'u'];

const NASAL_SOUNDS = ['M', 'N'];

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
  const validWord = [...hebrewWord].filter((l) => isHebrewLetter(l));
  return appendGeneratedPossibilities(validWord, transcribeHebrewLetter);
};

/**
 * Skip edenic vowels
 * @param {boolean} v
 */
export const ignoreEdenicVowels = (v) => VOWELS_NATIVE.includes(v);

/**
 * Generates all  the possibilities of inserting vowels into words.
 * @param {array} arrWord
 * @param {array} vowels
 * @param {function} ignoreInsertion //TODO FIXME
 */
export const insertVowels = (
  arrWord,
  vowels = VOWELS_ADDED,
  ignoreInsertion = ignoreEdenicVowels,
) => {
  //TODO Extract into a separate function
  if (!arrWord || arrWord.length === 0) {
    return [];
  }

  if (!vowels || vowels.length === 0) {
    return [[...arrWord]];
  }

  return [...new Set(insertAllPossibleCombinations(arrWord, vowels))];
};

export const shiftLetters = (word, shiftMappings = SHIFT_MAPPING) => {
  const shiftCurrentLetter = (letter) => [letter, '1', '2'];
  return appendGeneratedPossibilities(word, shiftCurrentLetter);
};
export const scramble = (word) => permutations(word);
export const insertNasalization = (arrWord, nasalSounds = NASAL_SOUNDS) => {
  //TODO Extract into a separate function
  if (!arrWord || arrWord.length === 0) {
    return [];
  }

  if (!nasalSounds || nasalSounds.length === 0) {
    return [[...arrWord]];
  }

  return [...new Set(insertAllPossibleCombinations(arrWord, nasalSounds))];
};

// TODO Document test etc all the following methods
export const findNasalization = (base, result) => {};
export const findMetathesis = (base, result) => {};
export const isReverse = (base, result) => {};
export const findLetterShift = (base, result) => {
  // S = letter shifts: [all vowels are interchangeable, no shifts needed]
  // S-B = bilabial shift [interchangeable lip letters: B,F,P,PH,V,W],
  // S-F = fricative shift,[interchangeable whistling letters: Soft C,S,SH,TS,Z]
  // S-G = guttural shift [interchangeable throat letters: Hard C,G,K,Q]
  // S-D = dental shift [interchangeable tooth letters: D, T, TH, TS]
  // S-L = liquid shift [interchangeable tongue letters: L,R]
  // S-N = nasal shift  [interchangeable nose letters: M,N]
};
export const identifyTransformations = (base, result) => result.length;
