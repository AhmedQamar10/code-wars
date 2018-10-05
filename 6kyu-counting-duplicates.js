// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string.
// The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (bandB)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// eslint-disable-next-line
function duplicateCount(text){
  let letters = text.toUpperCase().split('').sort();
  let count = 0;
  let dict = {};
  for(let i = 0; i < letters.length; i++) {
    if(!dict[letters[i]]) dict[letters[i]] = 1;
    else dict[letters[i]]++;
  }
  for(let value in dict) {
    if(dict[value] > 1) count++;
  }
  return count;
}