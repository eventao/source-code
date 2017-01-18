(function (ag, window) {
    var main = ag.module("mainModel", []);
    
    main.controller("mainController",
        ["$scope", "$interval","$rootScope"
            , function ($scope, $interval,$rootScope) {

            $scope.containerStyle = {
                "background-color":"blue",
                width:"100px",
                height:"80px"
            };
            $scope.classContainer = "container";

            
            $scope.$on("emit-test",function(event,m){
                alert(m);
            });

            $scope.title = "sdfsdf";
            $scope.obj = {
                name:"I'm mgModel + 花括号"
            };
            $scope.$watch("output",function(){
                $scope.$broadcast("broad-test","broad-message");
            });
            $rootScope.basisMsg = "I'm root";

            $scope.output = "";
            $scope.now = "";
            $interval(function () {
                var nn = new Date();
                $scope.now = nn.getMinutes()
                    + "," + nn.getSeconds();
            }, 1000);
            $scope.students = ["陈益民", "张杨羊", "曾俊杰"];
            $scope.teacher = [
                {
                    name: "戴老师",
                    gender: "男",
                    occupation: "CEO",
                    special: "帅"
                }
                , {
                    name: "周老师",
                    gender: "男",
                    occupation: "team-leader",
                    special: "cute"
                }
                , {
                    name: "向老师",
                    gender: "女",
                    occupation: "manager",
                    special: "beautiful"
                }
            ];

        }]);

    main.controller("childController",
        ["$scope","$rootScope",function ($scope,$rootScope) {
            // var p = $scope.$parent;
            // alert($scope.teacher.length);
            // alert($rootScope.basisMsg);

            $scope.$on("broad-test",function(event,param){
                alert(param);
            });

            $scope.$emit("emit-test","emit-message!");

        }]);

})(angular, window);
