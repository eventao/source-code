/**
 * Created by forli on 2017/3/21.
 */


(function(angular){
    angular.module("starter")
        .controller("starterController",["$scope",function($scope){
            $scope.saveData = function(){
                alert("数据已保存！");
            };
            //输入最大值限制
            $scope.inputLimit = 539382;
            //获取输入的值
            $scope.totalInput = "";
            //小数点后数值限制
            $scope.dotLimit = 3;
        }]);
})(window.angular);