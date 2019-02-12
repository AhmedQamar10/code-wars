// Your job is to write a function which increments a string, to create a new string.
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number the number 1 should be appended to the new string.
// Examples:
// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100

function incrementString(str) {
  let strMatch = str.match(/[A-Z]{0,}/gi).filter(m => m !== '');
  let numMatch = str.match(/[0-9]{0,}/gi).filter(m => m !== '');
  let num = numMatch[0];
  num++;
  if(numMatch.length < 1) return strMatch[0] + '1';
  if(numMatch[0].length > num.toString().length) {
    let result = num.toString().split('')
    let diff = numMatch[0].length - num.toString().length;
    let add = '0'.repeat(diff);
    result.splice(0, 0, add);
    return strMatch.concat(result).join('');
  } else {
      return strMatch.concat(num).join('');
  }
}