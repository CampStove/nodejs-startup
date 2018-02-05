'use strict';
// setting up a simple server
const http = require('http');

// these could (should) be set as env vars
const port = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';

// no matter what hits the server, we send the same thing
http.createServer((req, res) => {

    // tell the browser what’s coming
    res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8',
});

// output  simple message in html
res.write('<h1>I’m a Node app!</h1>');
res.write('<p>And I’m <em>sooooo</em> secure.</p>');
res.end();
}).listen(port, host);

// message prints when the app starts
console.log(`App running at http://${host}:${port}`);