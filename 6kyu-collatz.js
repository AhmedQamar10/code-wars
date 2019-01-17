// Create a function collatz that returns a collatz sequence string starting with the positive integer argument passed into the function, in the following form:
// "X0->X1->...->XN"
// Where Xi is each iteration of the sequence and N is the length of the sequence.

function collatz(n, result = ''){
  if(n <= 1) return result + 1;
  result += `${n}->`;
  if(n % 2 === 1) n = n * 3 + 1;
  else if(n % 2 === 0) n = n / 2;
  return collatz(n, result);
}