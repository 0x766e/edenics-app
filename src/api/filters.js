/**
 * Filters out the items from an array.
 */
// TODO Convert into a filter that can be combined with others
export const filterOut = (arr, items) => {
  if (!arr || arr.length === 0) return [];
  return [...new Set(arr.filter((item) => !items.includes(item)))];
};

//TODO Remove the filtering from every element and keep a central one
export const filterUnique = () => {};

// TODO Filter to remove empty arrays
export const filterEmpty = () => {};
