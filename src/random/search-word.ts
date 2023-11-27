export const searchWord = (matrix: string[][], word: string) => {
  const numRows = matrix.length;
  const numCols = matrix[0] ? matrix[0].length : 0;
  const directions = [
    [-1, 0], [1, 0], // Up, Down
    [0, -1], [0, 1], // Left, Right
    [-1, -1], [-1, 1], // Diagonals
    [1, -1], [1, 1],
  ];

  const isWithinBounds = (x: number, y: number) => x >= 0 && y >= 0 && x < numRows && y < numCols;

  const isWordAt = (x: number, y: number, dx: number, dy: number) => {
    const positions = Array.from({ length: word.length }, (_, i) => {
      const nx = x + i * dx;
      const ny = y + i * dy;
      return isWithinBounds(nx, ny) && matrix[nx][ny] === word[i] ? [nx, ny] : null;
    });

    return positions.every(position => position !== null) ? positions : null;
  };

  return matrix.flatMap((row, x) =>
    row.flatMap((_, y) =>
      directions.map(([dx, dy]) =>
        isWordAt(x, y, dx, dy))).filter(positions => positions !== null))
    .find(result => result !== null) || [];
};
