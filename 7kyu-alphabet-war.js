// Introduction
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.
// Task Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

function alphabetWar(fight) {
  let left = [];
  let right = [];
  for(let i = 0; i < fight.length; i++) {
    if(fight[i].match(/[wpbs]/g)) left.push(fight[i]);
    if(fight[i].match(/[mqdz]/g)) right.push(fight[i]);
  }

  left.forEach((letter, i) => {
    if(letter === 'w') left[i] = 4;
    if(letter ==='p') left[i] = 3;
    if(letter === 'b') left[i] = 2;
    if(letter === 's') left[i] = 1;
  });
  
  right.forEach((letter, i) => {
    if(letter === 'm') right[i] = 4;
    if(letter === 'q') right[i] = 3;
    if(letter === 'd') right[i] = 2;
    if(letter === 'z') right[i] = 1;
  });

  left = left.reduce((a, b) => a + b, 0);
  right = right.reduce((a, b) => a + b, 0);

  if(left > right) return 'Left side wins!';
  else if(left < right) return 'Right side wins!';
  else return 'Let\'s fight again!';
}