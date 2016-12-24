/**
 * Created by forli on 2016/12/24.
 */

var http = require("http");
function running(route){
    var port = 8888;
    http.createServer(function(request,response){
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received!");
        route(pathname);
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write("Hello World");
        response.end();
    }).listen(port);
    console.log("running on " + port);
}
running(function route(pathname) {
    console.log("About to route a request for " + pathname);
});

