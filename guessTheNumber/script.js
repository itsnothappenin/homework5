let picked = Math.floor(Math.random()*10);
// function randomNum (max) {
//   picked = Math.floor(Math.random()*max);
//   return picked;
// }

function guess (num) {
  if (num > picked) {
    return -1;
  } else if ( num < picked) {
    return 1;
  } else {
    return 0;
  }
  return picked;
}
