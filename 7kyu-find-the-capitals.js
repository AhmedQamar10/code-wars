// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

var capitals = function (word) {
  var letters = word.split('');
  var result = [];

  for(letter of letters) {
    if(letter === letter.toUpperCase()) {
      result.push(letters.indexOf(letter));
    }
  }
  return result;
};