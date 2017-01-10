/**
 * Created by forli on 2016/12/20.
 */
var express = require("express");
var path = require("path");
var fs = require("fs-extra");
var busboy = require('connect-busboy');
var app = express();
app.use(busboy());
app.use(express.static(__dirname));

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://dev.xhr2.com:8002");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
var router = express.Router();
router.post('/upload',function (req, res, next) {
    var fstream;
    req.pipe(req.busboy);
    req.busboy.on('file', function (fieldname, file, filename) {
        fstream = fs.createWriteStream(__dirname + '/uploadFile/' + filename);
        file.pipe(fstream);
        fstream.on('close', function () {
            console.log("Upload Finished of " + filename);
            // res.redirect('back');
            res.json({status:0,message:"文件上传成功！"});
        });
    });
});

app.use('/',router);

var port = 8004;
app.listen(port,function(){
    console.log("Server running at "+port);
});

