function removeDuplicates(nums) {
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
    }
  }

  return nums.length;
}
//loop through
//compare
//if same splice

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
