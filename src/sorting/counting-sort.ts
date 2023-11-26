/**
 * Performs counting sort on an array of numbers.
 *
 * Counting sort is an efficient sorting algorithm that works well for integers and other objects that can be
 * mapped to integers. It counts the number of occurrences of each value, then uses this count to determine the
 * position of each item in the sorted array. This implementation handles negative values as well.
 *
 * Time Complexity: O(n + k), where n is the number of elements in the input array, and k is the range of the input.
 * Space Complexity: O(n + k), for the output array and the counting array.
 *
 * @param {number[]} unsorted - The array of numbers to be sorted.
 * @returns {number[]} A new array containing the sorted numbers.
 */export const countingSort = (unsorted: number[]): number[] => {
  if (unsorted.length === 0) {
    return unsorted;
  }

  const min = Math.min(...unsorted);
  const max = Math.max(...unsorted);

  // Offset to handle negative values
  const range = max - min + 1;
  const count = new Array(range).fill(0);
  const output: number[] = new Array(unsorted.length) as number[];

  for (let i = 0; i < unsorted.length; i++) {
    count[unsorted[i] - min]++;
  }

  for (let i = 1; i < range; i++) {
    count[i] += count[i - 1];
  }

  for (let i = unsorted.length - 1; i >= 0; i--) {
    output[count[unsorted[i] - min] - 1] = unsorted[i];
    count[unsorted[i] - min]--;
  }

  return output;
};
