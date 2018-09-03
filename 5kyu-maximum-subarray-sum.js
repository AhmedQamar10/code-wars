// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array.
// If the list is made up of only negative numbers, return 0 instead.
// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

var maxSequence = function(arr){
  if(arr === [] || arr.every(n => n < 0)) return 0;
  let maxSum = [];
  let currentSum = 0;
  let currentSeq = [];

  for(let i = 0; i < arr.length; i++) {
    let newArr = arr.slice(i);
    currentSeq = [];
    checkSeq(newArr);
  }

  function checkSeq(arr) {
    for(let i = 0; i < arr.length; i++) {
      currentSeq.push(arr[i]);
      if(currentSeq.reduce((a, c) => a + c) > currentSum) {
        currentSum = currentSeq.reduce((a, c) => a + c, 0);
        maxSum = currentSeq.slice().reduce((a, c) => a + c);
      }
    }
  }
  return maxSum;
};