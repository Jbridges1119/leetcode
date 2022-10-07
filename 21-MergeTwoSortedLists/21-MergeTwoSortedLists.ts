var mergeTwoLists = function(list1, list2) {
  const newArr =  [list1, list2]
  console.log(newArr.flat())
return newArr.flat().sort((a,b) => a-b)
};

console.log(mergeTwoLists([1,2,3],[1,3,4]));
