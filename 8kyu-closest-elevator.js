// Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function elevator accepting 3 arguments (in order):
// left - The current floor of the left elevator
// right - The current floor of the right elevator
// call - The called floor, i.e. the floor you want to reach
// It should return the name of the elevator closest to the called floor ("left"/"right").
// In the case where both elevators are equidistant from the called floor, choose the elevator to the right.

function elevator(left, right, call){
  let leftDiff = Math.abs(call - left);
  let rightDiff = Math.abs(call - right);
  let isEqual = leftDiff === rightDiff;

  if(isEqual || leftDiff > rightDiff) return 'right';
  return 'left';
}