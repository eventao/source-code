/**
 * Created by forli on 2017/3/15.
 */
(function(ag){
    let m = ag.module("starter");
    m.provider("dataProvider",function(){
        return {
            $get:["$http",function($http){
                return {
                    getData:function(){
                        return $http.get("/students").then(function(r){
                            return r;
                        });
                    }
                }
            }]
        }
    });
})(window.angular);
