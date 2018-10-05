// Build Tower
// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

function towerBuilder(nFloors) {
  let tower = [];
  let counter = nFloors - 1;
  for(let i = 1; i < nFloors * 2; i += 2) {
    tower.push(' '.repeat(counter) + '*'.repeat(i) + ' '.repeat(counter))
    counter--;
  }
  return tower;
}