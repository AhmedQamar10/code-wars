// Given a Divisor and a Bound , Find the largest integer N , Such That ,
// Conditions :
// N is divisible by divisor
// N is less than or equal to bound
// N is greater than 0.

function maxMultiple(divisor, bound){
  if(divisor > bound) return 0;
  for(let i = bound; i > 0; i--) {
    if(i % divisor === 0) return i;
  }
}