/**
 * Created by forli on 2016/12/28.
 */
var express = require('express');
var app = express();
app.use('/',express.static(__dirname));

var router = express.Router();
router.post("/xmlHttpRequest",function(req,res){
    var ajaxData = {
        goods:[
            {
                name:"iphone50",
                price:998,
                homeLink:"http:www.taobao.com",
                orderDate:new Date(),
                total:100
            },
            {
                name:"机器人儿",
                price:20000,
                homeLink:"http:www.taobao.com",
                orderDate:new Date(),
                total:3
            },
            {
                name:"扫地僧",
                price:200000,
                homeLink:"http:www.taobao.com",
                orderDate:new Date(),
                total:3
            },
            {
                name:"大疆直升机",
                price:200000,
                homeLink:"http:www.taobao.com",
                orderDate:new Date(),
                total:3
            },
            {
                name:"外星人笔记本",
                price:12000,
                homeLink:"http:www.taobao.com",
                orderDate:new Date(),
                total:3
            }
        ],
        totalPrice:null,
        date:new Date()
    };
    res.json(ajaxData);
});

app.use('/',router);

var port = 8686;
app.listen(port);
console.log("server is running on " + port);
