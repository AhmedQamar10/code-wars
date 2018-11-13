// Assume "#" is like backspace in string. This means that string "a#bc#d" actually is "bd"
// Your task is to process a string with "#" symbols.



function clean_string(s) {
  if(s.length <= 0) return '';
  if(!s.split('').includes('#')) return s;
  if(/^[\#]+$/ig.test(s)) return '';

  let split = s.split('');

  for(let i = 0; i < split.length; i++) {
    if(split[i + 1] === '#') {
      split.splice(i, 2);
      break;
    }
  }
  return clean_string(split.join(''));
}