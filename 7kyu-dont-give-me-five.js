// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

const dontGiveMeFive = (start, end) => Array.from(new Array(end - start + 1), (v, i) => i + start).filter(n => !(n.toString().split('').includes('5'))).length;