// Your task is simply to count the total number of lowercase letters in a string.

function lowercaseCount(str){
  let count = 0;
  str.split('').forEach(l => {
    if(/[a-z]/g.test(l)) count++;
  });
  return count;
}