/**
 * Created by 涛 on 2017/3/5.
 */
// var obj = {a:"123"};
// var obj2 = obj;
// obj2.b = "234";
// console.log(obj.b);
// obj2 = {
//     c:"456"
// };
// console.log(obj.c)

module.exports = {
    router:function(router){
        router.get('/',function(req,res){
            let option = {
                title:"我的第一个ejs模板页面",
                name:"小猪",
                supplies:[
                    'mi1.jpg',
                    'mi2.jpg',
                    'mi3.jpg',
                    'mi4.jpg'
                ]
            };
            res.render('index',option);
        });
    }
};

exports.simpleFun = function(){

}
