function romanToInt(s: string):number {
  const table = {
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000,
  };
  let value = 0
  for(let i = 0; i <= s.length -1; i++){
    if(table[s[i]] < table[s[i+1]]){
      value += table[s[i+1]] - table[s[i]]
      i++
    } else {
      value += table[s[i]]
    }
  }


  return value
};

console.log(romanToInt("MCMXCIV"));
