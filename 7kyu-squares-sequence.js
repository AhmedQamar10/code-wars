// Create a function squares(x,n) that starts with a number (x) and returns an array of length (n) with squares of the previous number.
// If n is negative or zero, return an empty array/list.

function squares(x, n, r = [x]) {
  if(n <= 0) return [];
  for(let i = 1; i < n; i++) {
    x = x * x;
    r.push(x);
  }
  return r;
}