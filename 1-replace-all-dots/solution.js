var replaceDots = function(str) {
    var newStr = str.split('.').join('-');
    return newStr;
};

//or alternatively,

var replaceDots = function(str) {
    return str.replace(/\./g, '-');
};