
function maxElem (nums = []) {
  const sorted = nums.sort(function(a,b) {
    if (a === b) {
      return 0;
    } else if (a < b) {
      return -1;
    } else {
      return 1;
    }
  });
  const maxes = sorted.slice(-3);
  return maxes[0] * maxes[1] * maxes[2];
}
