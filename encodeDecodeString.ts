function encode(strs: string[]): string {
  return strs.map((str) => `${str.length}#${str}`).join('');
}

function decode(str: string): string[] {
  let result: string[] = [];
  let i = 0;
  while (i < str.length) {
    let j = str.indexOf('#', i);
    let length = Number(str.substring(i, j));
    i = j + 1 + length;
    result.push(str.substring(j + 1, i));
  }
  return result;
}

console.log(decode(encode(['we', 'say', ':', 'yes', '!@#$%^&*()'])));
