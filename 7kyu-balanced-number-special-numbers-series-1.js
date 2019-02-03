// Definition: Balanced number is the number that The sum of all digits to the left of the middle digit(s) and the sum of all digits to the right of the middle digit(s) are equal.
// Task: Given a number, Find if it is Balanced or not .

function balancedNum(number) {
  if(number < 10) return 'Balanced';
  let isEvenSplit = number.toString().length % 2 === 0 ? true : false;
  let nums = number.toString().split('').map(n => Number(n));
  let left = isEvenSplit ? nums.slice(0, nums.length / 2 - 1) : nums.slice(0, (nums.length - 1) / 2);
  let right = isEvenSplit ? nums.slice(nums.length / 2 + 1) : nums.slice((nums.length + 1) / 2);

  left = left.reduce((a, b) => a + b, 0);
  right = right.reduce((a, b) => a + b, 0);

  return left === right ? 'Balanced' : 'Not Balanced';
}