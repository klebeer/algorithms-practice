export const countAndListCombinations = (amount: number, denominations: number[]): [number, string[]] => {
  const memo: { [key: string]: string[] } = {};

  const findCombinations = (target: number, current: number[], lastCoin: number): string[] => {
    if (target === 0) return [''];
    if (target < 0) return [];

    const key = target + '-' + current.join(',');
    if (key in memo) return memo[key];

    const combinations: string[] = [];

    for (const coin of denominations) {
      if (coin >= lastCoin) { // Ensure non-decreasing order
        const newTarget = target - coin;
        const newCombos = findCombinations(newTarget, [...current, coin], coin);
        newCombos.forEach(combo => {
          if (combo === '') {
            combinations.push(`${coin}¢`);
          } else {
            combinations.push(`${coin}¢, ${combo}`);
          }
        });
      }
    }

    memo[key] = combinations;
    return combinations;
  };

  const combos = findCombinations(amount, [], 0);
  return [combos.length, combos];
};

