import { countAndListCombinations } from '@random/number-of-ways';

describe('countAndListCombinations', () => {
  it('calculates ways and lists combinations for amount 4 with denominations [1, 2, 3]', () => {
    const amount = 4;
    const denominations = [1, 2, 3];
    const expectedCombinations = ['1¢, 1¢, 1¢, 1¢', '1¢, 1¢, 2¢', '1¢, 3¢', '2¢, 2¢'];
    const [count, combinations] = countAndListCombinations(amount, denominations);

    expect(count).toBe(4);
    expect(combinations).toEqual(expect.arrayContaining(expectedCombinations));
    expect(combinations.length).toBe(expectedCombinations.length);
  });

});
