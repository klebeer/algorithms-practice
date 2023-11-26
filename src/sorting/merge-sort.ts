/**
 * Merges two sorted sub-arrays into a single sorted array.
 *
 * This function takes two sorted sub-arrays and merges them into one array in a sorted manner.
 * It compares elements from each subarray and arranges them in ascending order in the resulting array.
 *
 * @param {number[]} left - The first sorted subarray.
 * @param {number[]} right - The second sorted subarray.
 * @returns {number[]} A merged and sorted array.
 *
 * @example
 * merge([1, 3], [2, 4]); // returns [1, 2, 3, 4]
 */
const merge = (left: number[], right: number[]): number[] => {
  let resultArray: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    resultArray = resultArray.concat(
      left[leftIndex] < right[rightIndex] ? left[leftIndex++] : right[rightIndex++],
    );
  }

  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
};


/**
 * Sorts an array of numbers using the Merge Sort algorithm.
 *
 * This function implements the Merge Sort algorithm, a divide and conquer algorithm
 * that divides the input array into two halves, calls itself for the two halves,
 * and then merges the two sorted halves.
 *
 * @param {number[]} unsorted - An array of numbers to be sorted.
 * @returns {number[]} The sorted array.
 *
 * @example
 * mergeSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]); // returns [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
 *
 * Time Complexity: O(n log n), where n is the number of elements in the array.
 */
export const mergeSort = (unsorted: number[]): number[] => {
  if (unsorted.length <= 1) {
    return unsorted;
  }

  const middle = Math.floor(unsorted.length / 2);
  const left = unsorted.slice(0, middle);
  const right = unsorted.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};
