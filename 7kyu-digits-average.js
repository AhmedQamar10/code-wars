// Given an integer, take the (mean) average of each pair of consecutive digits. Repeat this process until you have a single integer, then return that integer. e.g.
// Note: if the average of two digits is not an integer, round the result up (e.g. the average of 8 and 9 will be 9)

function digitsAverage(input) {
  if(input < 10) return input;
  let result = input.toString().split('').map(n => parseInt(n));
  result = result.map((n, i) => Math.round((result[i] + result[i + 1]) / 2));
  result.splice(result.length - 1, 1);
  result = result.join('');
  return result.length <= 1 ? parseInt(result) : digitsAverage(result);
}