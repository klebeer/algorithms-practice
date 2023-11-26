/**
 * Merges two sorted sub-arrays into a single sorted array.
 *
 * This generic function takes two sorted sub-arrays and merges them into one array in a sorted manner.
 * It compares elements from each subarray, whether they are numbers or strings, and arranges them in
 * ascending order in the resulting array. It is a versatile function that can be used as part of the
 * merge sort algorithm for both numeric and string arrays.
 *
 * @template T The type of elements in the arrays, constrained to number or string.
 * @param {T[]} left - The first sorted subarray.
 * @param {T[]} right - The second sorted subarray.
 * @returns {T[]} A merged and sorted array.
 *
 * @example
 * merge([1, 3], [2, 4]); // returns [1, 2, 3, 4]
 * merge(["apple", "banana"], ["cherry", "date"]); // returns ["apple", "banana", "cherry", "date"]
 */
const merge = <T extends number | string>(left: T[], right: T[]): T[] => {
  let resultArray: T[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray = resultArray.concat(left[leftIndex++]);
    } else {
      resultArray = resultArray.concat(right[rightIndex++]);
    }
  }

  return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

/**
 * Sorts an array of numbers or strings using the Merge Sort algorithm.
 *
 * This function implements the Merge Sort algorithm, a divide and conquer algorithm
 * that divides the input array into two halves, calls itself for the two halves,
 * and then merges the two sorted halves. It is capable of sorting arrays of both
 * numbers and strings, using a generic merge function that handles both types.
 *
 * @template T The type of elements in the array, constrained to number or string.
 * @param {T[]} unsorted - An array of numbers or strings to be sorted.
 * @returns {T[]} The sorted array.
 *
 * @example
 * mergeSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]); // returns [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
 * mergeSort(["banana", "apple", "cherry"]); // returns ["apple", "banana", "cherry"]
 *
 * Time Complexity: O(n log n), where n is the number of elements in the array.
 */
export const mergeSort = <T extends number | string>(unsorted: T[]): T[] => {
  if (unsorted.length <= 1) {
    return unsorted;
  }

  const middle = Math.floor(unsorted.length / 2);
  const left = unsorted.slice(0, middle);
  const right = unsorted.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};
