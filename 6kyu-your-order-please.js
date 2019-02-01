// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

function order(words){
  if(!words) return '';
  let dict = {};
  let theWords = words.split(' ');
  theWords.forEach((word, i) => {
    let num = theWords[i].match(/[0-9]/gi);
    dict[num[0]] = theWords[i];
  });
  return Object.values(dict).join(' ');
}