// Simple transposition is a basic and simple cryptography technique. We make 2 rows and put first a letter in the Row 1, the second in the Row 2, third in Row 1 and so on until the end. Then we put the text from Row 2 next to the Row 1 text and thats it.
// Complete the function that recieves a string and encrypt it with this simple transposition.

function simpleTransposition(text) {
  let row1, row2;
  row1 = row2 = [];
  for(let i = 0; i < text.length; i += 2){
    row1.push(text[i]);
    row2.push(text[i + 1]);
  }
  return row1.concat(row2).join('');
}