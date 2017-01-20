/**
 * Created by yuant on 2016/12/6.
 */
var express = require('express');
// var solve = require('./server/solve-request-parameters');
var app = express();
app.use('/', express.static(__dirname));
// var router = express.Router();
// router.post("/menu/list",function(req,res){
//     req.on('data',function(data){
//         var dataR = decodeURIComponent(data);
//         var r = solve.solve(dataR);
//         res.json(r);
//     });
// });
// app.use('/',router);

var router = express.Router();
router.post("/students", function (req, res) {
    res.json([
        {
            name: "万茂",
            enName: "Wan",
            age: "21",
            favorite: ["FIFA", "全境封锁"],
            No: "1400909527",
            gender: "男",
            height: "165",
            weight: "86"
        }
        , {
            name: "梅旭",
            enName: "messi",
            age: "21",
            favorite: ["FIFA", "全境封锁", "不晓得"],
            No: "1400909528",
            gender: "男",
            height: "165",
            weight: "86"
        }
        , {
            name: "陈益民",
            enName: "Leon",
            age: "21",
            favorite: ["FIFA", "全境封锁", "不晓得"],
            No: "1400909529",
            gender: "男",
            height: "165",
            weight: "86"
        }
        , {
            name: "李涛",
            enName: "TomLi",
            age: "21",
            favorite: ["FIFA", "全境封锁", "不晓得"],
            No: "1400909529",
            gender: "男",
            height: "165",
            weight: "86"
        }
        , {
            name: "黄鹤立",
            enName: "lili",
            age: "21",
            favorite: ["FIFA", "全境封锁", "不晓得"],
            No: "1400909529",
            gender: "男",
            height: "165",
            weight: "86"
        }
        , {
            name: "巫兆俊",
            enName: "xiaowuwu",
            age: "21",
            favorite: ["FIFA", "全境封锁", "不晓得"],
            No: "1400909529",
            gender: "男",
            height: "165",
            weight: "86"
        }
        , {
            name: "张扬扬",
            enName: "sunny",
            age: "21",
            favorite: ["FIFA", "全境封锁", "不晓得"],
            No: "1400909529",
            gender: "男",
            height: "165",
            weight: "86"
        }
        , {
            name: "赵晨",
            enName: "magic",
            age: "21",
            favorite: ["FIFA", "全境封锁", "不晓得"],
            No: "1400909529",
            gender: "男",
            height: "165",
            weight: "86"
        }
        , {
            name: "齐皓",
            enName: "haozi",
            age: "21",
            favorite: ["FIFA", "全境封锁", "不晓得"],
            No: "1400909529",
            gender: "男",
            height: "165",
            weight: "86"
        }
        , {
            name: "何瑞阳",
            enName: "sunny",
            age: "21",
            favorite: ["FIFA", "全境封锁", "不晓得"],
            No: "1400909529",
            gender: "男",
            height: "165",
            weight: "86"
        }
        , {
            name: "曾俊杰",
            enName: "Jay",
            age: "21",
            favorite: ["FIFA", "全境封锁", "不晓得"],
            No: "1400909529",
            gender: "男",
            height: "165",
            weight: "86"
        }
        , {
            name: "向航青",
            enName: "qin",
            age: "21",
            favorite: ["FIFA", "全境封锁", "不晓得"],
            No: "1400909529",
            gender: "男",
            height: "165",
            weight: "86"
        }
    ]);
});
router.get("/jsonpTest", function (req, res) {
    var data = {
        content: [1, 2, 2, 3, 4, 5, 6],
        flag: true
    };
    res.write("jsonpCallback(" + JSON.stringify(data) + ")");
    res.end();
});

router.post("/userUpdate",function(req,res){
    req.on("data",function(data){
        res.write(data);
        res.end();
    });
});

app.use("/", router);

var port = 8888;
app.listen(port);
console.log("server is listening " + port);

