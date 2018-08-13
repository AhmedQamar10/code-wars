// Write a function insertDash(num)/InsertDash(int num) that will insert dashes ('-') between each two odd numbers in num.
// For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

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