/**
 * Created by forli on 2017/3/11.
 */
let request = require("request");
let cheerio = require("cheerio");

module.exports = {
    router:function(router){
        router.get("/get-financial",function(req,res){
            //设置请求头，模拟浏览器
            let headers = {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Mobile Safari/537.36'
                ,'Sec-WebSocket-Key':'BbWiJyIfaZmQUEXo0agtwQ=='
                ,'Sec-WebSocket-Version':13
            };
            let requestUrl = "ws://120.26.101.164:36584/?token=fbiyZbKHfJqAi5xigq7WnJN9s5XFq3CsxtGl05SQZZ9_zaugx3uJ3IGjqKiNqZynfqLVmcaobKDFlmnOf3x7r4q7kqfHeo3Li46DnZjPrGl7n6rdsahrrrC3bZV_o4KffKerYcSKaNF7oaCqg6rKaH-JzJaxuYStybV2og";
            let queryString = "token=fbiyZbKHfJqAi5xigq7WnJN9s5XFq3CsxtGl05SQZZ9_zaugx3uJ3IGjqKiNqZynfqLVmcaobKDFlmnOf3x7r4q7kqfHeo3Li46DnZjPrGl7n6rdsahrrrC3bZV_o4KffKerYcSKaNF7oaCqg6rKaH-JzJaxuYStybV2og";
            let result = {
                title:"数据来了"
            };

            request.get("http://m.kxt.com/quotes")
                .on('response',function(response){
                    let code = response.statusCode;
                });

            res.json(result);
        });
    }
};
