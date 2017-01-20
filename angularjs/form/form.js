/**
 * Created by forli on 2017/1/20.
 */
(function (ag) {
    var valid = ag.module("formValid", []);
    valid.controller("formValidController",
        ["$scope", function ($scope) {
            $scope.submitForm = function(isValid){
                if(!isValid){
                    alert('验证失败');
                    return false;
                }
            };
            $scope.userName = "";
            $scope.nickName = "";
            $scope.password = "";
            $scope.confirmPsd = "";
            $scope.mobile = "";
            $scope.email = "";

            

        }]);
})(angular);

