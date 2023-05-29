// GLOBALS - No Window

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module
// process    - info about evironment where the program is being executed

// npm usage (node package manager)
// allows us to reuse our own code or projects
// use code written by other developer
// post solution to other developer

// npm - global command
// npm --version 

// global dependency 
// sudo npm install -g <package name>

// local dependency only used in certain project (this one)
// npm i <package name> 

// package.json - manifest the file (store important information about package)
// manual approach (create package.json in the root, create properties and etc)
// npm init -y (everything default)

const _ = require('lodash');
const items = [1,[2,[3,[4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);