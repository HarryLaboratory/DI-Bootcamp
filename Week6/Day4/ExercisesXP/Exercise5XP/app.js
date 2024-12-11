const _ = require('lodash');

const math = require('./math');

const sum = math.add(5, 7);
const product = math.multiply(4, 6);

const isSumValid = _.isNumber(sum);
const isProductValid = _.isNumber(product);

console.log(`Sum: ${sum}, Is sum valid number? ${isSumValid}`);
console.log(`Product: ${product}, Is product valid number? ${isProductValid}`);
