function searchInsert1(nums: number[], target: number): number {
  for (let i = 0; i < nums.length; i++){
      if (i === 0 && nums[i] > target) return i;
      if(target > nums[i-1] && target < nums[i] ) return i ;
      if(target === nums[i]) return i;
      
  }
      return nums.length;
  };

//binary search
function searchInsert(nums: number[], target: number):number {
  let s = 0;
  let e = nums.length-1;
  while (s <= e)
  {
    let mid = Math.floor((e + s) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] > target) e = mid - 1;
    else s = mid+1;
  }
  return s
}  