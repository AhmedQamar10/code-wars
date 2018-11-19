// When you look at movie ratings, you usually see it as decimal numbers representing average of all viewers' votes. While it is very informative, it's not very visually appealing. That's what stars, or in our case- moons, are created for.
// Your task is to transform decimal number rating, which is in range 0-10, into 5-moons scale. Your final rating should be rounded to "0.5" (nearest half moon). Input is always valid.

function moonRating(rating) {
  let rounded = (Math.round((rating / 2) * 2) / 2);
  let newMoons = Math.floor(5 - rounded);
  let result = '';
  for(let i = 0; i < 5; i++) {
    if(rounded >= 1) {
      result += 'o';
      rounded--;
    }
    else if(rounded === 0.5) {
      result += 'c';
      rounded = rounded - 0.5;
    }
  }
  result += 'x'.repeat(newMoons);
  return result;
}