/**
 * Created by yuant on 2016/12/6.
 */

var express = require('express');
var app = express();
app.use('/',express.static(__dirname));

var port = 8002;
app.listen(port);
console.log("server is listening " + port);

