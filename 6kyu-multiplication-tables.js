// Create a function that accepts dimensions, of Rows x Columns, as parameters in order to create a multiplication table sized according to the given dimensions.
// **The return value of the function must be an array, and the numbers must be Fixnums, NOT strings.

function multiplicationTable(cols, rows) {
  let result = [];

  for(let i = 0; i < cols; i++) {
    result.push([i + 1]);
    for(let j = 2; j <= rows; j++) {
      result[i].push(j * (i + 1));
    }
  }
  return result;
}