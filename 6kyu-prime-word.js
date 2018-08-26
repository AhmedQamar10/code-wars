// X and Y are playing a game. A list will be provided which 
// contains n pairs of strings and integers.
// They have to add the integeri to the ASCII values of the stringi characters.
// Then they have to check if any of the new added numbers is prime or not.
// If for any character of the word the added number is prime then
// the word will be considered as prime word.

function primeWord(arr){
  const result = [];

  function isPrime(n) {
    for(let j = 2; j < n; j++) {
      if(n % j === 0) return false;
    }
    return true;
  }

  for(let i = 0; i < arr.length; i++){
    var chars = [];
    var nums = arr[i][1];
    var letters = arr[i][0].split('');
    chars = letters.map(l => l.charCodeAt(0) + nums);
    if(chars.find(isPrime)) result.push(1);
    else result.push(0);
  }
  return result;
}