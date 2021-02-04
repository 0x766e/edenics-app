/**
 * Generates all permutations of an array.
 */
export const permutations = (arr) => {
  const result = [];

  if (!arr || arr.length === 0) {
    return result;
  }

  const permute = (permutationArray, m = []) => {
    if (permutationArray.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < permutationArray.length; i++) {
        const curr = permutationArray.slice();
        const next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };

  permute(arr);

  return result;
};

/**
 * Generates an array after appending the values from the array of possibilities.
 */
export const appendPossibilities = (arr, possibilities) => {
  const emptyArray = !arr || arr.length === 0;
  const emptyPossibilities = !possibilities || possibilities.length === 0;

  if (emptyArray && emptyPossibilities) {
    return [];
  }

  if (emptyArray) {
    return possibilities.map((p) => [p]);
  }

  if (emptyPossibilities) {
    return [...arr];
  }

  return possibilities.map((p) => [...arr, p]);
};

/**
 * Generates and appends all the possibilities for each element and returns an array with every combination.
 */
export const appendGeneratedPossibilities = (arr, generatePossibilities) => {
  const emptyArray = !arr || arr.length === 0;

  if (emptyArray) {
    return [];
  }

  return [...arr].reduce((result, item) => {
    const possibilities = generatePossibilities(item);

    if (!possibilities || possibilities.length === 0) {
      return [...result];
    }

    if (result.length === 0) {
      return possibilities.map((p) => [p]);
    }

    return result.flatMap((p) => appendPossibilities(p, possibilities));
  }, []);
};
