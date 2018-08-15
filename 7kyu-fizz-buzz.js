// Return an array containing the numbers from 1 to N, where N is the parametered value. N will never be less than 1.
// Replace certain values however if any of the following conditions are met:
// If the value is a multiple of 3: use the value 'Fizz' instead
// If the value is a multiple of 5: use the value 'Buzz' instead
// If the value is a multiple of 3 & 5: use the value 'FizzBuzz' instead

function fizzbuzz(n) {
  let numbers = [];
  for(let i = 1; i < n + 1; i++) {
    if(i % 3 === 0 && i % 5 === 0) numbers.push('FizzBuzz');
    else if(i % 5 === 0) numbers.push('Buzz');
    else if(i % 3 === 0) numbers.push('Fizz');
    else numbers.push(i);
  }
  return numbers;
}