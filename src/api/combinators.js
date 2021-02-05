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

//TODO Make it clear the difference between combinations and permutations
//WIP Rethink about it
export const insertAllPossibleCombinations = (arr, items) => {
  console.log(`${arr} => ${items}`);

  const indexCombinations = subsets([...arr.keys(), arr.length])
    .filter((ic) => ic.length > 0)
    .flatMap((c) => permutations(c));
  // console.log(JSON.stringify(indexCombinations, null, 2)); //CORRECT

  const itemsCombinations = subsets(items)
    .filter((ic) => ic.length > 0)
    .flatMap((c) => permutations(c))
    .reduce((map, itemCombination) => {
      const combinationLength = itemCombination.length;
      console.log(JSON.stringify(itemCombination, null, 2));

      if (combinationLength > 0) {
        map[combinationLength] = map[combinationLength]
          ? [...map[combinationLength], itemCombination]
          : [itemCombination];
      }
      return map;
    }, {});
  console.log(JSON.stringify(itemsCombinations, null, 2));

  return indexCombinations.flatMap((indexCombination) => {
    const possibilities = itemsCombinations[indexCombination.length];
    if (!possibilities) {
      return [];
    }

    return possibilities.map((possibilityEntry, i) => {
      const result = [...arr];
      possibilityEntry.forEach((p) => {
        result.splice(indexCombination[i], 0, p);
      });
      return result;
    });
  });
};
