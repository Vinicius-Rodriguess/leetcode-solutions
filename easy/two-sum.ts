function twoSum(nums: number[], target: number): number[] {
  let resultIndices: number[] = [];

  if (nums.length === 2) return [0, 1];

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    const complementIndex = nums.indexOf(complement, i + 1);

    if (complementIndex !== -1) {
      resultIndices.push(i, complementIndex);
      break;
    }
  }

  return resultIndices;
}