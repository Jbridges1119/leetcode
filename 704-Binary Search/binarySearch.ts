function search(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    //Don't forget the brackets around (start and end)
    let middle = Math.floor((start + end) / 2);
    if (target === nums[middle]) return middle;
    if (target < nums[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return -1;
}
