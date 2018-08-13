// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
// The input will be a lowercase string with no spaces.

function capitalize(s){
    let split = s.split('');
    let arr1 = [];
    let arr2 = [];
    for(var i = 0; i < split.length; i++) {
        if((i % 2) === 0) {
            arr1[i] = split[i].toUpperCase();
        } else {
            arr1[i] = split[i];
        }
        if(((i + 1) % 2) === 0) {
            arr2[i] = split[i].toUpperCase();
        } else {
            arr2[i] = split[i];
        }
    }
    arr1 = arr1.join('');
    arr2 = arr2.join('');
    var joined = [];
    joined.push(arr1, arr2);
    return joined;
};