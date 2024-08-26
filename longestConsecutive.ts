function longestConsecutive(nums: number[]): number {
  const numSet = new Set(nums);
  let longest = 0;

  for (const n of numSet) {
    if (!numSet.has(n - 1)) {
      let length = 1;
      while (numSet.has(n + length)) {
        length++;
      }
      longest = Math.max(length, longest);
    }
  }
  return longest;
}

console.log(longestConsecutive([0, 3, 2, 5, 4, 6, 1, 1]));
