// Math geeks and computer nerds love to anthropomorphize numbers and assign emotions and personalities to them.
// Thus there is defined the concept of a "happy" number. A happy number is defined as an integer in which the following sequence ends with the number 1.

// Start with the number itself.
// Calculate the sum of the square of each individual digit.
// If the sum is equal to 1, then the number is happy. If the sum is not equal to 1, then repeat steps 1 and 2.
// A number is considered unhappy once the same number occurs multiple times in a sequence because this means there is a loop and it will never reach 1.
// For example, the number 7 is a "happy" number:

// 72 = 49 --> 42 + 92 = 97 --> 92 + 72 = 130 --> 12 + 32 + 02 = 10 --> 12 + 02 = 1

// Once the sequence reaches the number 1, it will stay there forever since 12 = 1
// On the other hand, the number 6 is not a happy number as the sequence that is generated is the following: 6, 36, 45, 41, 17, 50, 25, 29, 85, 89, 145, 42, 20, 4, 16, 37, 52, 29
// Once the same number occurs twice in the sequence, the sequence is guaranteed to go on infinitely, never hitting the number 1, since it repeat this cycle.
// Your task is to write a program which will print a list of all happy numbers between 1 and x (including 1 and x) where x <= 10000

// eslint-disable-next-line
function happyNumbers(x){
  let numbers = Array.from(Array(x), (val, i) => i + 1);
  let currentNumber = 0;
  let happy = [];
  for(let i = 0; i < numbers.length; i++) {
    currentNumber = numbers[i];
    isHappy(numbers[i]);
  }

  function isHappy(n, past = {}) {
    past[n] = true;
    if(n === 1) happy.push(currentNumber);
    else {
      var split = n.toString().split('');
      var squared = split.map(num => Math.pow(num, 2));
      let newNum = squared.reduce((a, c) => a + c);
      if(past[newNum]) return;
      isHappy(newNum, past);
    }
  }
  return happy;
}