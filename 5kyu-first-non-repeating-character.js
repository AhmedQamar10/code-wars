// Write a function named firstNonRepeatingLetter† that takes a string input, and returns the first character that is not repeated anywhere in the string.
// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.
// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.
// If a string contains all repeating characters, it should return the empty string ("").

// eslint-disable-next-line
function firstNonRepeatingLetter(s) {
  const letters = s.split('');
  const sameCase = s.toUpperCase().split('');
  for(let i = 0; i < sameCase.length; i++) {
    if(letters[i].charCodeAt(0) < 65 || letters[i].charCodeAt(0) > 122) {
      console.log(letters[i].charCodeAt(0));
      if(letters.indexOf(letters[i]) === letters.lastIndexOf(letters[i])) return letters[i];
    }
    if(sameCase.indexOf(sameCase[i]) === sameCase.lastIndexOf(sameCase[i])) return letters[i];
  }
  return '';
}