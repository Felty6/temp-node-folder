const { readFileSync, writeFileSync } = require('fs');

// functions line by line, no offload tasks
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

writeFileSync(
    './content/result-sync.txt',
    `writeFileSync uses first and second text file: ${first}, ${second}`,
    { flag: 'a' } // append into file
)

console.log("Done");
console.log('Starting next task');
