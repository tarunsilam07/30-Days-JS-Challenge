// Import the lodash module
const _ = require('lodash');


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const size = 3;
const chunkedArray = _.chunk(array, size);

console.log(chunkedArray);
