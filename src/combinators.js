/**
 * Generates all permutations of a string
 */
export const permutations = (word) => {
  if (!word) return [];

  if (word.length <= 2)
    return word.length === 2 ? [word, word[1] + word[0]] : [word];

  return word
    .split('')
    .reduce(
      (acc, letter, i) =>
        acc.concat(
          permutations(word.slice(0, i) + word.slice(i + 1)).map(
            (val) => letter + val,
          ),
        ),
      [],
    );
};
