/**
 * Generates all permutations of a string
 */
export const permutations = (word) => {
  if (!word) return [];

  if (word.length <= 2)
    return word.length === 2 ? [word, word[1] + word[0]] : [word];

  return [...word].reduce(
    (acc, letter, i) =>
      acc.concat(
        permutations(word.slice(0, i) + word.slice(i + 1)).map(
          (val) => letter + val,
        ),
      ),
    [],
  );
};

/**
 * Generates an array of all new possibilities after appending the values from the array possibilities to the word.
 */
export const appendPossibilities = (word, possibilities) => {
  const hasNoPossibilities = !possibilities || possibilities.length === 0;
  if (!word && hasNoPossibilities) {
    return [];
  }

  if (!word) {
    return possibilities;
  }

  if (hasNoPossibilities) {
    return [word];
  }

  return possibilities.flatMap((p) => word + p);
};

/**
 * Generates and appends all the possibilities for each letter and returns an array with every combination.
 */
export const appendPossibilitiesForLetters = (word, generatePossibilities) => {
  if (!word || !generatePossibilities) {
    return [];
  }

  return [...word].reduce(
    (acc, current) => {
      const possibilities = generatePossibilities(current);

      return acc.flatMap((partialWord) =>
        appendPossibilities(partialWord, possibilities),
      );
    },
    [''],
  );
};
