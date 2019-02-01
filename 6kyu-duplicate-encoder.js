// The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Examples:
// "din" => "((("
// "recede" => "()()()"
// "Success" => ")())())"
// "(( @" => "))(("

function duplicateEncode(word){
  let dict = {};
  let result = '';
  word = word.toLowerCase();
  word.split('').forEach(l => {
    if(!dict[l]) dict[l] = 1;
    else dict[l]++;
  });

  for(let i = 0; i < word.length; i++) {
    if(dict[word[i]] > 1) result += ')';
    else result += '(';
  }
  return result;
}