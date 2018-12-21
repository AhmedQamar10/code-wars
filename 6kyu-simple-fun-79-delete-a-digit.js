// Given an integer n, find the maximal number you can obtain by deleting exactly one digit of the given number.
// Example
// For n = 152, the output should be 52;
// For n = 1001, the output should be 101.

function deleteDigit(n) {
  let nums = n.toString().split('');
  let highs = [];
  for(let i = 0; i < nums.length; i++) {
    let modified = nums.slice();
    modified.splice(i, 1);
    highs.push(modified.join(''));
  }

  return parseInt(highs.sort((a, b) => b - a)[0]);
}