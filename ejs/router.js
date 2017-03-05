/**
 * Created by 涛 on 2017/3/5.
 */
module.exports = {
    router:function(router){
        router.get('/',function(req,res){
            let option = {
                title:"我的第一个ejs模板页面",
                name:"小猪",
                supplies:[]
            };
            res.render('index',option);
        });
    }
};