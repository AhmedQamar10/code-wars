// Due to another of his misbehaved, the primary school's teacher of the young Gauß, Herr J.G. Büttner, to keep the bored and unruly young schoolboy Karl Friedrich Gauss busy for a good long time, while he teaching arithmetic to his mates, assigned him the problem of adding up all the whole numbers from 1 through a given number n.
// Your task is to help the young Carl Friedrich to solve this problem as quickly as you can; so, he can astonish his teacher and rescue his recreation interval.

function f(n){
  let number = 0;
  if(!Number.isInteger(n) || n <= 0) {
    return false;
  } else {
    for(var i = 0; i < n + 1; i++) {
      number += i;
    }
    return number;
  }
};