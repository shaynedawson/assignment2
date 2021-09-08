const http = require('http');

const server = http.createServer(function (req, res) {
    console.log(`${req.method} request received at ${req.url}`);
    if (req.url === '/student') {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200; // 200 = OK
        res.write("<h1>Student page</h1>");
        res.end();
    } else if (req.url === '/teacher') {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200; // 200 = OK
        res.write("<h1>Teacher page</h1>");
        res.end();
    } else if (req.url === '/homepage') {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200; // 200 = OK
        res.write("<h1>Homepage</h1>");
        res.end();
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 400; // 400 = Bad request
        res.write("<h1>Sorry, this page is not available</h1>");
        res.end();
    }
});

server.listen(3000, function () {
    console.log("Listening on port http://localhost:3000");
});