
function position (nums=[], target) {
  nums.sort(compare)
  for ( i = 0; i < nums.length; i++) {
    if (target = nums[i]) {
      return i;
    }
  }
  return [-1,-1]
}

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
