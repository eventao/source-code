/**
 * Created by forli on 2017/1/10.
 */

var express = require('express');
var app = express();
var router = express.Router();
router.get("/jsonpData",function(req,res){
    var back = req.query.callback;
    var data = {
        title:"cross success!",
        name:"title 123"
    };
    var result = back + "("+JSON.stringify(data)+")";
    res.write(result);
    res.end();
});
app.use("/",router);
var port = 8050;
app.listen(port);
console.log("server is running " + port);

