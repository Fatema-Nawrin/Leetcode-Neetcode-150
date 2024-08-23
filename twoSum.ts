function twoSum(nums: number[], target: number): number[] {
  //   for (let i = 0; i < nums.length; i++) {
  //     const diff = target - nums[i];
  //     if (nums.includes(diff) && nums.indexOf(diff) != i) {
  //       return [i, nums.indexOf(diff)];
  //     }
  //   }
  //   complexity-n*n

  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;
    const sumIndex = map.get(complement);
    console.log(sumIndex);

    if (sumIndex != undefined) {
      return [sumIndex, i];
    }

    map.set(num, i);
  }

  return [-1, -1];
}
console.log(twoSum([2, 7, 11, 15], 9));
