function isPalindrome1(x: number): boolean {
  return (Number(String(x).split("").reverse().join("")) === x) ? true : false

};