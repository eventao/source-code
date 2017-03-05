/**
 * Created by 涛 on 2017/3/4.
 */
let express = require('express');
let app = express();
let router = express.Router();
let jadeRouter = require('./jade/router');
let path = require('path');
app.set('views',path.join(__dirname,'jade/views'));
app.set('view engine','pug');

jadeRouter.router(router);
app.use("/",router);
app.use("/",express.static(__dirname));
let port = 8008;
app.listen(port, function () {
    console.log("server is running " + port);
});
