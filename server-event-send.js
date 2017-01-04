/**
 * Created by forli on 2017/1/4.
 */

var http = require("http");
var fs = require("fs");
var express = require("express");
var app = express();
app.use("/",express.static(__dirname));
var router = express.Router();
router.get("/chat",function(req, res){
    res.writeHead(200, {"Content-Type":"text/event-stream", "Cache-Control":"no-cache", "Connection":"keep-alive"});
    res.write("retry: 10000\n");
    res.write("event: connecttime\n");
    res.write("data: " + (new Date()) + "\n\n");
    res.write("data: " + (new Date()) + "\n\n");
    interval = setInterval(function() {
        res.write("data: " + (new Date()) + "\n\n");
    }, 1000);
    req.connection.addListener("close", function () {
        clearInterval(interval);
    }, false);
});
app.use("/",router);

var port = 8020;
app.listen(port);
console.log("Server running at " + port);
