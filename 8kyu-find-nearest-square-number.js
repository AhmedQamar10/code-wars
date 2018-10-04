// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

function nearestSq(n){
  return Number.isInteger(Math.sqrt(n)) ? n : Math.pow(Math.round(Math.sqrt(n)), 2);
}