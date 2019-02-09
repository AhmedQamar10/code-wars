// Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.
// Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.
// Note that numbers written as strings are strings and must be sorted with the other strings.

function dbSort(a){
  let n = a.filter(ea => typeof ea === 'number').sort((a, b) => a - b);
  let s = a.filter(ea => typeof ea === 'string').sort((a, b) => {
    if(a < b) return -1;
    if(a > b) return 1;
    return 0;
  });
  return n.concat(s);
}