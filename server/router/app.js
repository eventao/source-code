/**
 * Created by forli on 2016/12/24.
 */
var http = require('http');
var url = require('url');

function start(){
    function onRequest(request,response){
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received!");
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write("Hello World");
        response.end();
    }
    var port = 8888;
    http.createServer(onRequest).listen(port);
    console.log("running on " + port);
}
exports.start = start;
