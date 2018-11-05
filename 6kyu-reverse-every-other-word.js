// Reverse every other word in a given string, then return it. Don't forget to include the spaces!

function reverse(str){
  let words = str.split(' ');
  for(let i = 1; i < words.length; i += 2){
    words[i] = words[i].split('').reverse().join('');
  }
  return words.join(' ');
}