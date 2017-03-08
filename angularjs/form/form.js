/**
 * Created by forli on 2017/1/20.
 */
(function (ag) {
    let valid = ag.module("formValid", []);
    valid.controller("formValidController",
        ["$scope","$http", function ($scope,$http) {
            $scope.submited = function(e){
                e.preventDefault();
                let data = {
                    userName:$scope.userName,
                    nickName:$scope.nickName,
                    password:$scope.password,
                    confirmPsd:$scope.confirmPsd,
                    mobile:$scope.mobile,
                    email:$scope.email
                };
                $http.post("/userUpdate",data,function(result){
                    let a = result;
                });
            };
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

