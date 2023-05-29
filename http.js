// req = request 
// res = response

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to the home page');
    }
    else if (req.url === '/about') {
        res.end('About Page');
    } else {
        res.end(`
        <h1>Error!</h1>
        <p>We are unable to find the page you are looking for
        <a href="/">back to homepage</a>`);
    }

});

server.listen(3000);