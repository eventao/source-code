/**
 * Created by forli on 2017/1/3.
 */
//独立端口socket.io

var bodyParser = require('body-parser');

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
io.sockets.on("connection", function (socket) {
    console.log("Socket.io 连接成功！");
    socket.emit("loginSuccessfull", {
        loginTime: new Date()
    });

    function processNow() {
        socket.emit("now", {
            now: new Date()
        });
        setTimeout(processNow, 1000);
    }

    processNow();
});

//websocket
var server = require("ws").Server;
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

//普通http服务
var express = require('express');
var app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json());
var port = 8002;
app.use('/', express.static(__dirname));
var router = express.Router();
router.get("/data-api", function (req, res) {
    res.json({
        content: [
            {name: "even"},
            {name: "laner"}
        ]
    });
});
router.post("/items-data", function (req, res) {
    res.json([
        {
            title: "峨眉山"
        }, {
            title: "青城山"
        }, {
            title: "乐山"
        }
    ]);
});
router.get("/reactjs/sources/data.json",
    function (req, res) {

        var now = new Date();
        var nStr = [
            now.getHours(),
            now.getMinutes(),
            now.getSeconds(),
            now.getMilliseconds()
        ];
        nStr = nStr.join("-");
        global.jsonResult = global.jsonResult || [
                {
                    id: 1,
                    author: "Pete Hunt(" + nStr + ")",
                    text: "This is one comment"
                },
                {
                    id: 2,
                    author: "Jordan Walke(" + nStr + ")",
                    text: "This is *another* comment"
                }
            ];
        if (req.query.clear == 1) {
            global.jsonResult = [
                    {
                        id: 1,
                        author: "Pete Hunt(" + nStr + ")",
                        text: "This is one comment"
                    },
                    {
                        id: 2,
                        author: "Jordan Walke(" + nStr + ")",
                        text: "This is *another* comment"
                    }
                ];
        }
        res.json(global.jsonResult);
    });

router.post("/reactjs/sources/data.json",
    function (req, res) {
        if (req.body) {
            global.jsonResult.push({
                id: global.jsonResult.length + 1,
                author: req.body.author,
                text: req.body.text
            });
            res.json(global.jsonResult);
        }
    });
app.use('/', router);


//express 与 socket.io共用端口
var http = require('http').Server(app);
var socketIo = require('socket.io')(http);
socketIo.on("connection", function (socket) {
    console.log("一个新连接");
});

app.listen(port, function () {
    console.log("Server is running " + port);
});

var app8030 = express();
var router8030 = express.Router();
router8030.get("/getData"
    , function (req, res) {
        var result = {
            content: [],
            flag: 1,
            msg: "gogog"
        };
        res.write("globalCallback(" + JSON.stringify(result) + ");");
        res.end();
    });
app8030.use("/", router8030);
app8030.listen(8030);
