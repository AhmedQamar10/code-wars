// Complete the function that determines if a given number is a power of two.

function isPowerOfTwo(n){
  let pow = 1;
  while(pow < n) {
    pow = pow * 2;
  }
  return pow === n;
}