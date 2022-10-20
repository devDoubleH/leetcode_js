const sortedSquares = (nums: number[]): number[] =>
  nums.map((i) => i * i).sort((a, b) => a - b);
