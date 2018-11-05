// Hepellopo!
// Jeringonza is a Spanish language game, similar to Pig Latin, played by children in Spain and all over Hispanic America. It consists of adding the letter p after each vowel (a, e, i, o or u) of a word, and repeating the vowel. For example, jeringonza becomes jeperipingoponzapa (or j-epe-r-ipi-ng-opo-nz-apa).
// For the purposes of this kata, the input and output are both strings and no input strings will be empty. Also, the added 'p' should match the case of the vowel. So opo for o and EPE for E.
// (If you're interested - there's a few extra components in jeringonza, such as how to deal with stressed vowels, but for the purposes of this kata we're keeping it simple)
// Gopoopod lupuck!

function jeringonza(str) {
  let result = str.split('');
  for(let i = 0; i < result.length; i++) {
    if(result[i].match(/[a,e,i,o,u]/)) result[i] = result[i] + 'p' + result[i];
    if(result[i].match(/[A,E,I,O,U]/)) result[i] = result[i] + 'P' + result[i];
  }
  return result.join('');
}