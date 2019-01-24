// Your task, is to create NxN multiplication table, of size provided in parameter.
// for example, when given size is 3:
// 1 2 3
// 2 4 6
// 3 6 9

multiplicationTable = function(size, result = [], num = 1) {
  if(result.length === size) return result;
  let temp = [];
  for(let i = 1; i <= size; i++) {
    temp.push(num * i);
  }
  num++;
  result.push(temp);
  return multiplicationTable(size, result, num);
};