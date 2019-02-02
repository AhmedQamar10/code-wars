// Create a RomanNumerals class that can convert a roman numeral to and from an integer value.
// It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.
// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero.
// In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

class ConvertRomanNumerals {
  constructor() {
    this.numerals = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
  }

  toRoman(num) {
    let roman = '';
    let nums = this.numerals;
    for(let i in nums) {
      while(num >= nums[i]) {
        roman += i;
        num -= nums[i];
      }
    }
    return roman;
  }

  fromRoman(romans) {
    let total = 0;
    let letters = romans.split('');
    for(let i = 0; i < letters.length; i++) {
      let combo = letters[i] + letters[i + 1];
      if(this.numerals[combo]) {
        total += this.numerals[combo];
        i++;
      }
      else {
        total += this.numerals[letters[i]];
      }
    }
    return total;
  }
}

let RomanNumerals = new ConvertRomanNumerals;