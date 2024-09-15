function addDigits(num) {
  // Repeat until num is a single digit
  while (num > 9) {
    let sum = 0;
    // Extracts and sums up all digits of the current number & continues until num becomes 0
    while (num > 0) {
      // Extract the last digit by using the modulo operation: num % 10.
      sum = sum + (num % 10);
      // Remove the last digit by performing division
      num = Math.floor(num / 10);
    }

    num = sum;
  }

  return num;
}

console.log(addDigits(38));

function isPalindrome(num) {
  if (num < 0) {
    return false;
  }
  let original_num = num;
  let reverse = 0;
  while (num > 0) {
    // Last digit
    let last_digit = num % 10;
    // Update reverse by shifting digits to the left and adding the last digit.
    reverse = reverse * 10 + last_digit;
    // Remove the last digit
    num = Math.floor(num / 10);
  }
  return original_num === reverse;
}
console.log(isPalindrome(3221223));
function isPowerOfTwo(n) {
  if (n <= 0) {
    return false;
  }
  // Keep dividing by 2 if divisible
  while (n % 2 === 0) {
    n /= 2;
  }
  return n == 1;
}

console.log(isPowerOfTwo(16));
