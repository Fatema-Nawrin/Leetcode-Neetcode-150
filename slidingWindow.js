function maxProfit(prices) {
  let buy = 0;
  let max_profit = 0;
  // Start from the second day
  for (let sell = 1; sell < prices.length; sell++) {
    // Check if the current day's price greater than the buying day's price
    if (prices[sell] > prices[buy]) {
      // update profit
      let profit = prices[sell] - prices[buy];
      max_profit = Math.max(max_profit, profit);
    } else {
      // If the selling price  is lower than at buying, update the buying day
      buy = sell;
    }
  }
  return max_profit;
}
// console.log(maxProfit([10, 1, 5, 6, 7, 1]));

function lengthOfLongestSubstring(s) {
  let char_set = new Set();
  let left = 0;
  let length = 0;
  for (let right = 0; right < s.length; right++) {
    // If the character at 'right' is already in the set,
    // Remove characters until duplicates and move left
    while (char_set.has(s[right])) {
      char_set.delete(s[left]);
      left++;
    }
    char_set.add(s[right]);
    length = Math.max(length, right - left + 1);
  }
  return length;
}
// console.log(lengthOfLongestSubstring('abfcaczxaywkl'));

function characterReplacement(s, k) {
  let left = 0;
  let count = new Map();
  let result = 0;

  for (let right = 0; right < s.length; right++) {
    let len = right - left + 1;
    // Update the count of the current character
    count.set(s[right], 1 + (count.get(s[right]) || 0));

    // checks if the number of characters in the window that would need to be replaced exceeds k.
    // If it does, it means the window is no longer valid, so we need to shrink it.
    if (len - Math.max(...count.values()) > k) {
      // Reduce the count of the character at the left pointer (s[left])
      count.set(s[left], count.get(s[left]) - 1);
      left++;
    }
    // Update the new window length after adjustment
    len = right - left + 1;

    result = Math.max(result, len);
  }
  return result;
}
// console.log(characterReplacement('XYYZX', 2));
function checkInclusion(s1, s2) {
  if (s1.length > s2.length) return false;

  let neededChar = {}; //To Store the frequency/count of required string s1
  for (let i = 0; i < s1.length; i++) {
    let el = s1[i];
    neededChar[el] = (neededChar[el] || 0) + 1;
    console.log(neededChar);
  }

  let left = 0, //left pointer
    right = 0, //right pointer
    requiredLength = s1.length; //substring length required in s2
  console.log('ok');

  //  iterate until the right pointer of window is less than s2 length
  while (right < s2.length) {
    // If we found s2 character in s1 / neededChar then we decrease requiredLength
    if (neededChar[s2[right]] > 0) {
      requiredLength--;
    }
    // Since we have encountered new char i.e s2[right] we decrease it's
    // count in neededChar even if it is not present in neededChar because we only care about neededChars
    neededChar[s2[right]]--;
    console.log(neededChar);
    right++;
    // Now if our requiredLength becomes 0 it means we have found a match of the s2 substring
    // So we return true
    if (requiredLength === 0) return true;

    // If the window size equals s1's length, slide the window
    if (right - left === s1.length) {
      // if the left element we are removing was a required character then we increase requiredLength
      // because that element will no longer be the part of sliding window
      if (neededChar[s2[left]] >= 0) requiredLength++;
      // We will also increase the count of left element removed from window
      neededChar[s2[left]]++;
      // And finally we will decrease the window size by 1 from left i.e left++
      left++;
    }
  }
  return false;
}

console.log(checkInclusion('ab', 'eidbaooo'));
