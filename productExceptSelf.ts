function productExceptSelf(nums: number[]): number[] {
  const result: Array<number> = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    result[i] = nums[i - 1] * result[i - 1];
  }

  let rightProduct = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = result[i] * rightProduct;
    rightProduct *= nums[i];
  }

  return result;
}

console.log(productExceptSelf([1, 2, 3, 4]));
