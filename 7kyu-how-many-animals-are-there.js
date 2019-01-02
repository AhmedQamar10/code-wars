// From a sentence, deduce the total number of animals.
// For example :
// "I see 3 zebras, 5 lions and 6 giraffes." The answer must be 14
// "Mom, 3 rhinoceros and 6 snakes come to us!" The answer must be 9

const countAnimals = sentence => sentence.split(' ').filter(l => /[0-9]/.test(l)).map(num => parseInt(num)).reduce((a, b) => a + b, 0);