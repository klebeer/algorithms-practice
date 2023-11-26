import { countingSort } from '@sorting/counting-sort';

describe('countingSort', () => {

  test('sorts an unsorted array', () => {
    expect(countingSort([4, 2, 2, 8, 3, 3, 1])).toEqual([1, 2, 2, 3, 3, 4, 8]);
  });

  test('handles an already sorted array', () => {
    expect(countingSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('handles an array with all identical elements', () => {
    expect(countingSort([5, 5, 5, 5, 5])).toEqual([5, 5, 5, 5, 5]);
  });

  test('handles an empty array', () => {
    expect(countingSort([])).toEqual([]);
  });
  test('handles an array with negative numbers', () => {
    expect(countingSort([-3, -1, 2, 4, 4, -2])).toEqual([-3, -2, -1, 2, 4, 4]);
  });

});
