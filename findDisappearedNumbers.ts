function findDisappearedNumbers(nums: number[]): number[] {
  let result: number[] = [];
  const set = new Set(nums);
  const max = nums.length;
  for (let i = 1; i <= max; i++) {
    set.has(i) ? result : result.push(i);
  }
  return result;
}
