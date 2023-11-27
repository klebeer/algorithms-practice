import { searchWord } from '@random/search-word';


describe('searchWord', () => {
  it('finds a diagonal word', () => {
    const matrix = [
      ['a', 'b', 'c'],
      ['d', 'e', 'f'],
      ['g', 'h', 'i'],
    ];
    const word = 'ceg';
    expect(searchWord(matrix, word)).toEqual([[0, 2], [1, 1], [2, 0]]);
  });

  it('finds a horizontal word', () => {
    const matrix = [
      ['w', 'o', 'r', 'd'],
      ['a', 'b', 'c', 'd'],
      ['e', 'f', 'g', 'h'],
    ];
    const word = 'word';
    expect(searchWord(matrix, word)).toEqual([[0, 0], [0, 1], [0, 2], [0, 3]]);
  });

  it('does not find a non-existing word', () => {
    const matrix = [
      ['a', 'b', 'c'],
      ['d', 'e', 'f'],
      ['g', 'h', 'i'],
    ];
    const word = 'xyz';
    expect(searchWord(matrix, word)).toEqual([]);
  });

  it('works with a larger matrix', () => {
    const matrix = [
      ['a', 'b', 'c', 'd'],
      ['e', 'f', 'g', 'h'],
      ['i', 'j', 'k', 'l'],
      ['m', 'n', 'o', 'p'],
    ];
    const word = 'jkl';
    expect(searchWord(matrix, word)).toEqual([[2, 1], [2, 2], [2, 3]]);
  });

  it('handles an empty matrix', () => {
    const matrix: string[][] = [];
    const word = 'abc';
    expect(searchWord(matrix, word)).toEqual([]);
  });

  it('finds a single letter word', () => {
    const matrix = [
      ['x', 'y', 'z'],
      ['a', 'b', 'c'],
      ['d', 'e', 'f'],
    ];
    const word = 'e';
    expect(searchWord(matrix, word)).toEqual([[2, 1]]);
  });

});
