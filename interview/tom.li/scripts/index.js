/**
 * Created by forli on 2017/3/21.
 */


(function(angular){
    angular.module("starter")
        .controller("starterController",["$scope",function($scope){
            $scope.saveData = function(){
                alert("数据已保存！");
            };
            $scope.inputLimit = 539382;
            $scope.totalInput = "";
        }]);
})(window.angular);