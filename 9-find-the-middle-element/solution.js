/* eslint-disable-next-line */
var gimme = function (inputArray) {
    var newArray = inputArray.slice();
    newArray.sort((a, b) => a - b);
    return inputArray.findIndex(inputArray => inputArray === newArray[1]);
};