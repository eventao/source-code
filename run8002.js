/**
 * Created by forli on 2017/1/3.
 */
var socketIoApp = require('http').createServer(handler);
var io = require('socket.io')(socketIoApp);
var fs = require('fs');
function handler(req, res) {
    fs.readFile(__dirname + '/html5/socket.io/index.html',
        function (err, data) {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html');
            }
            res.writeHead(200);
            res.end(data);
        });
}
socketIoApp.listen(8004);
io.sockets.on("connection",function(socket){
    console.log("Socket.io 连接成功！");
    socket.emit("loginSuccessfull",{
        loginTime:new Date()
    });

    function processNow(){
        socket.emit("now",{
            now:new Date()
        });
        setTimeout(processNow,1000);
    }
    processNow();
});



var express = require('express');
var server = require("ws").Server;

var app = express();
var socketPort = 8003;
var ws = new server({port: socketPort});
ws.on("connection", function (w) {
    var i = 0;

    function processMsg() {
        if (w.readyState == 1) {
            w.send(i);
            i++;
            setTimeout(processMsg, 1000);
        }
    }

    processMsg();

    w.on('message', function (message) {
        console.log(message);
    });
});

var port = 8002;
app.use('/', express.static(__dirname));
app.listen(port);
console.log("Server is running " + port);



