/**
 * Created by 涛 on 2017/3/5.
 */
let ejs = require('ejs');
let express = require('express');
let routerConfig = require('./ejs/router');
let path = require('path');
let app = express();
app.set('view engine','ejs');
app.set('e',path.join(__dirname,'ejs/views'));
let router = express.Router();
routerConfig.router(router);
app.use('/',router);
let port = 8006;
app.listen(port, function() {
    console.log("服务器运行在"+port);
});


