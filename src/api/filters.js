/**
 * Filters out the items from an array.
 */
export const filterOut = (arr, items) => {
  if (!arr || arr.length === 0) return [];
  return [...new Set(arr.filter((item) => !items.includes(item)))];
};
