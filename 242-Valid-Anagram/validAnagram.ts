//My second attempt
function isAnagram(s: string, t: string): boolean {
  if(s.length !== t.length) return false;

  let newS = s.split("").sort();
  let newT = t.split("").sort();
  
  for (let i = 0; i < s.length; i++) {
    if(newS[i] !== newT[i]) return false;
  }
  return true
  };

  console.log(isAnagram("anagram","nagaarm"));
  

//My first attempt
  // function isAnagram(s: string, t: string): boolean {
  //   if(s.length !== t.length) return false
  //   let newT = t.split("")
  //   for (let i = 0; i < s.length; i++) {
  //     if (!newT.includes(s[i])) return false
  //     newT.splice(newT.indexOf(s[i]),1);
  //   }
  //   if(newT.length) return false
  //   return true
  //   };