/**
 * Sorts an array of strings that represent large numbers.
 *
 * This function uses a custom comparator to sort the strings not by their
 * lexicographic order, but by their numeric values. It's particularly useful
 * for sorting strings representing large numbers, where standard string
 * sorting would not suffice.
 *
 * @param {string[]} unsorted - An array of string representations of large numbers.
 * @returns {string[]} The array sorted in ascending order based on the numeric
 *                      value of the strings.
 *
 * @example
 * bigSorting(["3", "111", "22"]); // returns ["3", "22", "111"]
 *
 * Time Complexity: O(n log n * m), where n is the number of elements in the array,
 * and m is the length of the longer string in the comparison.
 */
export const bigSorting = (unsorted: string[]): string[] => {
  const compareNumbersAsStrings = (a: string, b: string) => {
    if (a.length < b.length) return -1;
    if (a.length > b.length) return 1;
    return a.localeCompare(b);
  };

  return unsorted.sort(compareNumbersAsStrings);


};
export const bubbleBigSorting = (unsorted: string[]): string[] => {
  const compareNumbersAsStrings = (a: string, b: string) => {
    if (a.length < b.length) return -1;
    if (a.length > b.length) return 1;
    return a.localeCompare(b);
  };

  const sorted = [...unsorted];
  const n = sorted.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (compareNumbersAsStrings(sorted[j], sorted[j + 1]) > 0) {
        [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
      }
    }
  }

  return sorted;
};


