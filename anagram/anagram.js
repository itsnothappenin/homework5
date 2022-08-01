function isAnagram (s, t) {
  y = s.split("").sort().join('');
  z = t.split("").sort().join('');
  if ( y.length !== z.length) {
    return false;
  } else {
    for (let i = 0; i < y.length; i++) {
      if ( y[i] !== z[i] ) {
        return false;
      }
    }
    return true;
  }
}
