// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

function sumTwoSmallestNumbers(numbers) {
  let sorted = numbers.filter(num => num >= 0).sort((a, b) => {
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
  });
  return sorted[0] + sorted[1];
}