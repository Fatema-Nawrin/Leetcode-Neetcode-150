function isPalindrome(s: string): boolean {
  let input = s.replace(/[^a-zA-Z0-9]/g, '').toLocaleLowerCase();
  let reverse_in = input.split('').reverse().join('');
  console.log(input);
  console.log(reverse_in);
  if (input == reverse_in) {
    return true;
  }

  return false;
}

isPalindrome('A man, a plan, a canal: Panama');
