/**
 * Created by forli on 2017/2/6.
 */
(function(ag){
    var m = ag.module("HelloModule",[]);
    m.directive("helloWorld",[function(){
        return {
            restrict:"ECMA",
            templateUrl:"hello.html",
            replace:true,
            scope:{
                link:"@asLink",
                linkText:"@asLinkText",
                inputMsg:"=",
                clicked:"&",
                sources:"=",
                sChanged:"&",
                selected:"=",
                change:"&"
            },
            compile:function(){
                // return function(){
                // };
                return {
                    pre:function(){},
                    post:function(scope,jqLite,attrs){

                    }
                }
            }
            // ,link:function(){
            //
            // }
        };
    }]);
})(angular);

