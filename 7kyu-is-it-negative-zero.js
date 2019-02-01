// There exist two zeroes: +0 (or just 0) and -0.
// Write a function that returns true if the input number is -0 and false otherwise (True and False for Python).

const isNegativeZero = n => Object.is(-0, n) ? true : false;