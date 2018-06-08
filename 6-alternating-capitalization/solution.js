/* eslint-disable-next-line */
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