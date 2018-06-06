/* eslint-disable-next-line */
function validatePIN (pin) {
    var reg = /^\d{4}(?:\d{2})?$/;
    if(reg.test(pin)) {
        return true;
    } else {
        return false;
    }
}