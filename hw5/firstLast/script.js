
function position (nums=[], target) {
  nums.sort(compare)
  let result = []
  for ( i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      result.push(i)
    } else {
      result = [-1, -1]
    }
  }
  return result;
};

function compare (a,b) {
  if (a < b) {
    return -1;
}
  if (a > b)  {
    return 1;
  }
  if ( a === b) {
    return 0;
  }
}
