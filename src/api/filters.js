/**
 * Filters out the letters from a word.
 */
export const filterOut = (word, letters) => {
  if (!word) return word;
  return word
    .split('')
    .filter((l) => !letters.includes(l))
    .join('');
};
