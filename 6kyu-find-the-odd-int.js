// Given an array, find the int that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  let dict = {};
  for(let i of A) {
    dict[i] ? dict[i]++ : dict[i] = 1;
  }
  for(let key in dict){
    if(dict[key] % 2 === 1) return parseInt(key);
  }
}