function lengthOfLongestSubstring(s: string): number {
  let charSet = new Set();
  let l = 0;
  let result = 0;
  // let startIdx = 0;
  for (let r = 0; r < s.length; r++) {
    while (charSet.has(s[r])) {
      charSet.delete(s[l]);
      l++;
    }
    charSet.add(s[r]);
    if (r - l + 1 > result) {
      result = r - l + 1;
      // startIdx = l; // Update the starting index for the longest substring
    }
  }
  // return s.substring(startIdx, startIdx + result);
  return result;
}
console.log(lengthOfLongestSubstring('zxyzxyz'));
