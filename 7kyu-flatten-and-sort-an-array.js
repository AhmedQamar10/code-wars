// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

function flattenAndSort(array) {
  return array = [].concat.apply([], array).sort((a, b) => a - b);
}