// CommonJS, every file is module as a default
// Modules - Encapsulated code 
const names = require('./names');
const interaction = require('./utils');
const listOfData = require('./alternative-items');
require('./operations');

console.log(listOfData);
interaction(names.random);
interaction(names.felty);