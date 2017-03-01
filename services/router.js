/**
 * Created by forli on 2017/3/1.
 */
var router = function(router){
    router.get("/get-persons",
    function(req,res){
        var result = {};
        res.json(result);
    });
};
exports.router = router;

