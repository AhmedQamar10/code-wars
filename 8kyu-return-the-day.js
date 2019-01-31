// Complete the function which returns the weekday according to the input number:
// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"

function whatday(num) { 
  let days = ['Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur'];
  for(let i = 1; i <= 7; i++) {
    if(num === i) return `${days[i - 1]}day`;
  };
  return 'Wrong, please enter a number between 1 and 7';
}