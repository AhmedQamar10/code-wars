// Write a function that rearranges an integer into its largest possible value.
// superSize(123456) //654321
// superSize(105) // 510
// superSize(12) // 21

const superSize = (num) => Number(num.toString().split('').sort((a, b) => b - a).map(n => Number(n)).join(''));