/**
 * Created by forli on 2017/2/21.
 */
(function (angular) {
    var home = angular.module("Home", []);
    // home.provider("dataGet",function(){
    //     this.$get = function(){
    //         return {
    //             getData:function(){
    //
    //             }
    //         }
    //     }
    // });
    // home.provider("dataGet",function(){
    //     this.$get = function(){
    //         this.getData = function(){
    //
    //         }
    //     }
    // });
    // home.service("dataGet",function(){
    //     this.flsdfkdsf = function(){
    //
    //     };
    //     this.sdfdsf = function(){
    //
    //     };
    // });
    home.factory("dataGet",["$http",function($http){
        return {
            getData:function (){
                return $http.post("/items-data")
                    .then(function(res){
                        var result = [];
                        res.data.forEach(function(i){
                            result.push({
                                title:i.title
                            });
                        });
                        return result;
                    });
            }
        }
    }]);
    home.directive("dropDownList", [function () {
        return {
            restrict: "EC",
            template: "<div class='container'>" +
                "<input ng-focus='inputFocused()'" +
                    " ng-blur='inputBlur()'"+
            " type='text'>"+
                "<ul class='list' ng-show='isShowList'>"+
                    "<li ng-repeat='item in items'>"+
                        "{{item.title}}"+
                    "</li>"+
                "</ul>" +
            "</div>",
            scope:{
                items:"=",
                inputFocused:"&",
                isShowList:"=",
                inputBlur:"&"
            },
            replace: true
        }
    }]);
    home.controller("HomeController", ["$scope",
        "dataGet",
        function ($scope,dataGet) {
            $scope.inputFocused = function(){
                $scope.isShowList = true;
            };
            $scope.inputBlur = function(){
                $scope.isShowList = false;
            };
            dataGet.getData().then(function(r){
                $scope.items = r;
            });
            $scope.isShowList = false;
        }]);
})(window.angular);
