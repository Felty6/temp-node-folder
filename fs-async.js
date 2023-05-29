const { readFile, writeFile } = require('fs');

// offload the task and able to start the next task
console.log('start');
// uses callback function, offload task
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;

        writeFile(
            './content/result-async.txt',
            `Here is the result of async: ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('done with the task');
            }
        )
    })
});

console.log('starting next task');