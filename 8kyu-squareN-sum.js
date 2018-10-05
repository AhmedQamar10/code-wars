// Complete the squareSum/square_sum/SquareSum method so that it squares each number passed into it and then sums the results together.

function squareSum(numbers){
  let squared = (numbers.map(num => Math.pow(num, 2)));
  return squared.reduce((a, c) => a + c, 0);
}