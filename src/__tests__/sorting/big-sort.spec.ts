import { bigSorting } from '@sorting/big-sort'


describe('bigSorting', () => {
  test('should correctly sort an array of number strings', () => {
    const unsorted = ['31415926535897932384626433832795', '1', '3', '10', '3', '5']
    const sorted = bigSorting(unsorted)
    const expected = ['1', '3', '3', '5', '10', '31415926535897932384626433832795']

    expect(sorted).toEqual(expected)
  })

  test('should handle an empty array', () => {
    const unsorted: string[] = []
    const sorted = bigSorting(unsorted)
    expect(sorted).toEqual([])
  })

  test('should correctly sort alphanumeric strings', () => {
    const unsorted = ['abc123', 'abc12', 'abc', 'abc1']
    const sorted = bigSorting(unsorted)
    const expected = ['abc', 'abc1', 'abc12', 'abc123']

    expect(sorted).toEqual(expected)
  })
})

