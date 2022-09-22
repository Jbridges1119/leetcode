function longestCommonPrefix(strs) {
let prefix = ""
for( let i = 0; i < strs[0].length; i++){
  let letters = strs[0][i]
  for (let x = 0; x < strs.length; x++){
    if(strs[x][i] !== letters) {
      return prefix
    } 
    if (x === strs.length -1){
      prefix += strs[x][i]
    }
    } 
}
return prefix
};

console.log(longestCommonPrefix(["flower","flow","flight"]
));
