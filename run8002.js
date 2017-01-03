/**
 * Created by forli on 2017/1/3.
 */
var express = require('express');
var app = express();
app.use('/',express.static(__dirname));
var port = 8002;
app.listen(port);
console.log("Server is running " + port);