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

  return [...new Set(result)];
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

  return [...new Set(possibilities.map((p) => [...arr, p]))];
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

    return [
      ...new Set(result.flatMap((p) => appendPossibilities(p, possibilities))),
    ];
  }, []);
};

/**
 * Generates all the subsets of an array.
 */
export const subsets = (arr) => {
  if (!arr || arr.length === 0) {
    return [];
  }

  return [
    ...new Set(
      arr.reduce(
        (subsets, value) =>
          subsets.concat(subsets.map((set) => [value, ...set])),
        [[]],
      ),
    ),
  ];
};

/**
 * Inserts an item in every possible subsets of indexes.
 */
export const permutateInsertions = (arr, item) => {
  if (!arr || arr.length === 0) {
    return [];
  }

  return [
    ...new Set(
      subsets([...arr.keys(), arr.length]).map((p) => {
        const result = [...arr];
        p.forEach((insertionIndex) => {
          result.splice(insertionIndex, 0, item);
        });
        return result;
      }),
    ),
  ];
};

// TODO Documentation
export const subPermutations = (arr) => [
  ...new Set(
    subsets(arr)
      .filter((a) => a.length > 0)
      .flatMap((b) => permutations(b)),
  ),
];

// TODO Documentation
export const groupBySize = (arr) =>
  arr.reduce((map, item) => {
    map[item.length] = map[item.length] ? [...map[item.length], item] : [item];
    return map;
  }, {});

// TODO Documentation and move file
export const filterByMaximumSize = (arr, size) =>
  arr.filter((item) => item.length <= size);

export const filterByMinimumSize = (arr, size) =>
  arr.filter((item) => item.length >= size);

// TODO Document
export const zip = (a, b) => {
  return a.map((e, i) => {
    return [e, b[i]];
  });
};

export const insertItems = (arr, indexes, items) => {
  const initialIndexes = [...arr.keys()];
  const content = zip(items, indexes);

  //WIP

  return `${arr}-${content}`;
};

// TODO Make it clear the difference between combinations and permutations
// TODO Documentation
export const insertAllPossibleCombinations = (arr, items) => {
  const itemSubsets = groupBySize(filterByMinimumSize(subsets(items), 1));
  const possibleIndexes = filterByMaximumSize(
    subPermutations([...arr.keys(), arr.length]),
    items.length,
  );
  const result = possibleIndexes.flatMap((idx) =>
    itemSubsets[idx.length].map((ts) => insertItems(arr, idx, ts)),
  );
  return result;
};
