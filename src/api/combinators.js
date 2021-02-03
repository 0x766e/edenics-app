/**
 * Generates all permutations of an array.
 */
export const permutations = (inputArr) => {
  const result = [];

  if (!inputArr || inputArr.length === 0) {
    return result;
  }

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        const curr = arr.slice();
        const next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };

  permute(inputArr);

  return result;
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
