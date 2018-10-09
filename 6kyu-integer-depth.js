// The depth of an integer n is defined to be how many multiples of n it is necessary to compute before all 10 digits have appeared at least once in some multiple.

function computeDepth(n) {
  let dict = {0: false, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false};
  let multiplier = 0;

  while(dict) {
    multiplier ++;
    let nums = (n * multiplier).toString().split('');
    for(let i = 0; i < nums.length; i++){
      dict[nums[i]] = true;
    }
    if(Object.values(dict).every(v => v === true)) return multiplier;
  }
}