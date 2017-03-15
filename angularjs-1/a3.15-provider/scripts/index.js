/**
 * Created by forli on 2017/3/15.
 */
(function(ag){
    let m = ag.module("starter");
    m.controller("starterController",[
        "$scope","dataProvider",function($scope,dataPro){
            $scope.data = dataPro.getData().then(function(r){
                $scope.data = r.data;
            });
        }
    ]);

})(window.angular);