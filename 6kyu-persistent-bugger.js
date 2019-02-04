// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
// which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num, count = 0) {
  if(num < 10) return count;
  num = num.toString().split('').reduce((a, b) => a * b);
  count++;
  return persistence(num, count);
}