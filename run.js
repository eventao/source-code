/**
 * Created by yuant on 2016/12/6.
 */
var express = require('express');
var solve = require('./server/solve-request-parameters');
var app = express();
app.use('/',express.static(__dirname));
var router = express.Router();
router.post("/menu/list",function(req,res){
    req.on('data',function(data){
        var dataR = decodeURIComponent(data);
        var r = solve.solve(dataR);
        res.json(r);
    });
});
app.use('/',router);

var port = 8888;
app.listen(port);
console.log("server is listening " + port);

