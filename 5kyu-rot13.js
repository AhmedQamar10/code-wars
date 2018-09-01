// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet.
// ROT13 is an example of the Caesar cipher.
// Create a function that takes a string and returns the string ciphered with Rot13.
// If there are numbers or special characters included in the string, they should be returned as they are.
// Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message){
  let abc = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
  message = message.split('');

  for(let i = 0; i < message.length; i++) {
    if(/[a-z]/.test(message[i])) {
      let position1 = abc.indexOf(message[i]);
      message[i] = abc[position1 + 13];
    }
    if(/[A-Z]/.test(message[i])) {
      let position2 = abc.toUpperCase().indexOf(message[i]);
      message[i] = abc.toUpperCase()[position2 + 13];
    }
  }
  return message.join('');
}