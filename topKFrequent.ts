function topKFrequent(nums: number[], k: number): number[] {
  const numberMap: { [key: number]: number } = nums.reduce((map, num) => {
    map[num] = (map[num] || 0) + 1;
    return map;
  }, {} as { [key: number]: number });

  const frequencyArray = Object.entries(numberMap).map(([key, freq]) => [Number(key), freq]);
  frequencyArray.sort((a, b) => b[1] - a[1]);
  const result = frequencyArray.slice(0, k).map(([key, freq]) => key);
  return result;
}

console.log(topKFrequent([7, 3, 4, 3, 5, 5, 5, 7], 2));
