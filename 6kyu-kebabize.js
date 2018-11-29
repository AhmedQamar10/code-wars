// Modify the kebabize function so that it converts a camel case string into a kebab case.
// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps
// Notes: the returned string should only contain lowercase letters

function kebabize(str) {
  let split = str.split('');
  let result = [];
  
  for(let i = 0; i < split.length; i++) {
    const ascii = split[i].charCodeAt(0);
    if(ascii > 64 && ascii < 91 && i === 0) result.push(split[i]);
    else if(ascii > 64 && ascii < 91) {
      result.push('-');
      result.push(split[i]);
    }
    else if(ascii > 96 && ascii < 123) result.push(split[i]);
  }

  return result[0] === '-'
    ? result.splice(1, result.length).join('').toLowerCase()
    : result.join('').toLowerCase(); 
}