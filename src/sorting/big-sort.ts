export const bigSorting = (unsorted: string[]) => {
  // compareNumbersAsStrings is a comparator function used in the sort method.
  // It compares two strings based on their numeric value, not just lexicographic order.
  const compareNumbersAsStrings = (a: string, b: string) => {
    // First, compare based on length. A shorter string means a smaller number.
    if (a.length < b.length) return -1
    if (a.length > b.length) return 1

    // If the lengths are the same, compare lexicographically.
    // localeCompare compares two strings in the current locale, which is useful
    // for sorting strings that represent large numbers.
    return a.localeCompare(b)
  }

  // The sort method has a time complexity of O(n log n) on average,
  // where n is the number of elements in the array.
  // The comparator adds a complexity of O(m) for each comparison,
  // where m is the length of the longer string in the comparison.
  // Therefore, the overall worst-case time complexity of this sort
  // with the custom comparator is O(n log n * m).
  return unsorted.sort(compareNumbersAsStrings)
}
