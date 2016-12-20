/**
 * Created by forli on 2016/12/20.
 */
const http = require("http");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','application/xml');
    res.setHeader('Access-Control-Allow-Origin','http://dev.xhr2.com:8002');
    res.end('Hello World\n');
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

