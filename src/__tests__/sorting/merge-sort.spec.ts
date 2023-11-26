import { mergeSort } from '@sorting/merge-sort';

describe('mergeSort', () => {
  it('should sort an array of numbers', () => {
    const unsortedArray = [34, 7, 23, 32, 5, 62];
    const sortedArray = mergeSort(unsortedArray);
    expect(sortedArray).toEqual([5, 7, 23, 32, 34, 62]);
  });

  it('should handle an empty array', () => {
    const unsortedArray: number[] = [];
    const sortedArray = mergeSort(unsortedArray);
    expect(sortedArray).toEqual([]);
  });

  it('should handle an array with one element', () => {
    const unsortedArray = [1];
    const sortedArray = mergeSort(unsortedArray);
    expect(sortedArray).toEqual([1]);
  });

  it('should handle an array with repeated elements', () => {
    const unsortedArray = [3, 1, 2, 3, 3];
    const sortedArray = mergeSort(unsortedArray);
    expect(sortedArray).toEqual([1, 2, 3, 3, 3]);
  });

  it('should correctly sort an array of odd length', () => {
    const unsortedArray = [3, 1, 4, 1, 5];
    const sortedArray = mergeSort(unsortedArray);
    expect(sortedArray).toEqual([1, 1, 3, 4, 5]);
  });

});
