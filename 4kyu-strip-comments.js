// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:
// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas

function solution(input, markers) {
  let split = input.split('');
  let comments = [];
  let newLines = [];

  for(let i = 0; i < input.length; i++) {
    if(markers.includes(split[i])) comments.push(i);
    if(split[i] === '\n') newLines.push(i);
  }

  for(let j = 0; j < markers.length; j++) {
    let m = markers[j];
    let regex1 = new RegExp('(\\' + m + ')(?<=\\' + m + ')(.*?)(?=\\' + '\\' + 'n)', 'g');
    let regex2 = new RegExp('(\\' + m + ')(?<=\\' + m + ')(.*?)(.*)', 'g');
    input = input.replace(regex1, '');
    input = input.replace(regex2, '');
  }

  return input.split('\n').map(item => item.trim()).join('\n');
}