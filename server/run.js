/**
 * Created by forli on 2017/1/10.
 */

var express = require('express');
var app = express();
app.use("/",express.static(__dirname));


var port = 3000;
app.listen(port);
console.log("server is running " + port);


