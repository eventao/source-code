/**
 * Created by 涛 on 2017/3/4.
 */
function router(router) {
    let pug = require('pug');
    // compile
    // var fn = pug.compile('string of pug', options);
    // var html = fn(locals);

    // render
    // var html = pug.render('string of pug', merge(options, locals));

    // let html = pug.renderFile(__dirname + "/views/index.pug");
    // res.send(html, null, {
    //     pageTitle: "第一个jade页面",
    //     wrapperId: "wrapper"
    // });

    router.get("/", function (req, res) {
        let option = {
            title: '我的第一个jade页面！',
            time:"2015-11-18",
            youAreUsingPug:true,
            users:[
                {
                    name:'白云'
                    ,age:18
                    ,role:'admin'
                }
                ,{
                    name:'春'
                    ,age:17
                    ,role:'user'
                }
                ,{
                    name:'小花'
                    ,age:19
                    ,role:'user'
                }
            ]
        };
        res.render('index', option);
    });
}

module.exports = {
    router: router
};
