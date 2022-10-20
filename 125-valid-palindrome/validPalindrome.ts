function isPalindrome(s: string): boolean {
  //set char to lower case and then use replace to remove all but chars
  const lowerS = s.toLowerCase();
  const charString = lowerS.replace(/[^a-z0-9]/gi, '');
  //loop through string comparing start to end and stopping halfway
  for (let i = 0; i < Math.floor(charString.length/2); i++) {
    //if different return false and stop
    if (charString[i] !== charString[charString.length - 1 -i]){
      return false
    }
  }
  return true;
};


console.log(isPalindrome(" "));
