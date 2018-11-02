// Write an algorithm that takes an array and moves all of the zeros to the end,
// preserving the order of the other elements.

var moveZeros = (arr) => {
  let nums = [];
  let zeros = [];
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] !== 0) {
      nums.push(arr[i]);
    } else if(arr[i] === 0) {
      zeros.push(arr[i]);
    }
  }
  let all = nums.concat(zeros);
  return all;
};