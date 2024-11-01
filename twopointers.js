function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    let currentSum = 0;
    let left = 0;
    let right = numbers.length - 1;
    while (left < right) {
      currentSum = numbers[left] + numbers[right];
      console.log(currentSum);
      if (currentSum < target) {
        left++;
      } else if (currentSum > target) {
        right--;
      } else {
        return [left + 1, right + 1];
      }
    }
    return [];
  }
}

console.log(twoSum([1, 2, 3, 4], 3));
