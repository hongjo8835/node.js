const { odd, even } = require('./var');
const checkNumber = require('./func');

function checkStringddOrEven(str) {
    if(str.length % 2) {
        return odd;
    }
    return even;
}

console.log(checkNumber(10));
console.log(checkStringddOrEven('hello'));