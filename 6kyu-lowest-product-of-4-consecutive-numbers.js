// Create a function that returns the lowest product of 4 consecutive digits in a number given as a string.
// This should only work if the number has 4 digits or more. If not, return "Number is too small".

function lowestProduct(input) {
  if(input.length < 4 || input[0] === '-') return 'Number is too small';
  const nums = input.split('').map(letter => parseInt(letter));
  let products = [];
  for(let i = 0; i < nums.length; i++) {
    products.push(nums[i] * nums[i + 1] * nums[i + 2] * nums[i + 3]);
  }
  return products.sort((a, b) => a - b)[0];
}