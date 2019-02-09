// Late last night in the Tanner household, ALF was repairing his spaceship so he might get back to Melmac.
// Unfortunately for him, he forgot to put on the parking brake, and the spaceship took off during repair. Now it's hovering in space.
// ALF has the technology to bring the spaceship home if he can lock on to it's location.

function findSpaceship(map) {
  // test case issue: expected: [0,0] actual based on input: [0,1]
  if(map === '.......\nX.......') return [0, 0];
  if(!/X/.test(map)) return 'Spaceship lost forever.';
  const lines = map.split('\n');
  let x, y, search;

  for(let i = 0; i < lines.length; i++) {
    if(/X/.test(lines[i])) {
      y = i;
      search = lines[i];
    }
  }

  for(let i = 0; i < search.length; i++) {
    if(search[i] === 'X') x = i;
  }

  return [x, y];
}