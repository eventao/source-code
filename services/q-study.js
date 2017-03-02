/**
 * Created by forli on 2017/3/1.
 */

exports.router = function(router){
    router.get("/data-api/doc",function(req,res){
        let r = {
            title:"",
            content:""
        };
        res.json(r);
    });
};
