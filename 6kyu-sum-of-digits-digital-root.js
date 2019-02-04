// In this kata, you must create a digital root function.
// A digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced.
// This is only applicable to the natural numbers.

function digital_root(n) {
  n = n.toString().split('').map(Number).reduce((a, b) => a + b);
  return n < 10 ? n : digital_root(n);
}