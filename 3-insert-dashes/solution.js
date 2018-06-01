/* eslint-disable-next-line */
function insertDash(num) {
    var arr = num.toString().split('');
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 1 && arr[i + 1] % 2 === 1) {
            arr.splice(i + 1, 0, '-');
        }
    }
    var joined = arr.join('');
    return joined;
}