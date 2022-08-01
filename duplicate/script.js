
function containsDuplicate (nums = []) {
  for (let i = 0; i < nums.length - 1; i++) {
    const current = nums[i];
    const restOfTheNums = nums.slice(i + 1);
    if (restOfTheNums.includes(current)) {
      return true;
    }
  }
  return false;
}
