// This time no story, no theory. The examples below show you how to write function accum:\
// Examples:
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  var solution = '';
  var letter = [];
  for(var i = 0; i < s.length; i ++) {
    letter = s[i].toLowerCase();
    for(var j = 0; j <= i; j++) {
      if(j === 0) {
        solution += letter.toUpperCase();
      } else {
        solution += letter;
      }
    }
    if(i < s.length - 1) {
      solution += '-';
    }
  }
  return solution;
}