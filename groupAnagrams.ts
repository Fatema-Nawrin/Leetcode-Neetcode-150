function groupAnagrams(strs: string[]): string[][] {
  let wordsMap = new Map();
  for (const str of strs) {
    const sortedStr = str.split('').sort().join('');
    const values = wordsMap.get(sortedStr) || [];
    wordsMap.set(sortedStr, values.concat(str));
  }
  console.log(wordsMap);

  return Array.from(wordsMap.values());
}

console.log(groupAnagrams(['tag', 'care', 'race', 'ok']));
