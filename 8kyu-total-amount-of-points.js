// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the array.
// For example: ["3:1", "2:2", "0:1", ...]
// Write a function that takes such list and counts the points of our team in the championship. Rules for counting points for each match:
// if x>y - 3 points
// if x<y - 0 point
// if x=y - 1 point

function points(games) {
  let points = 0;

  for(let i = 0; i < games.length; i++) {
    let x = parseInt(games[i].split(':')[0]);
    let y = parseInt(games[i].split(':')[1]);
    if(x > y) points += 3;
    if(x === y) points += 1;
  }
  return points;
}