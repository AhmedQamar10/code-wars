// You'll be given a string, and have to return the total of all the unicode characters as an int. Should be able to handle any characters sent at it.

const uniTotal = (str) => str === '' ? 0 : str.split('').map(l => l.charCodeAt(0)).reduce((a, b) => a + b);