(function (ag, window) {
    var main = ag.module("mainModel", []);

    main.filter("prefix",
        ["$timeout", "$filter", function ($timeout, $filter) {
            return function (inputMsg) {
                var result = "";
                var now = new Date();
                var nStr = $filter("date")(now, "yyyy-MM-dd HH:mm:ss:sss");
                result = inputMsg + "^^" + nStr;
                return result;
            };
        }]);

    main.factory("DataFactory"
        , [function () {
            //此处省略ajax请求
            return {
                flag: 1,
                msg: "请求成功",
                code: 200,
                content: [
                    {
                        uuid: "addf34-dfg2-bdfg3-dfef2-fdf",
                        occupation: "董事长",
                        name: "王健林",
                        pId: ""
                    }

                    , {
                        uuid: "sldjfw-ewf-fewfwe-fewfbf",
                        occupation: "财务部经理",
                        name: "王思聪",
                        pId: "addf34-dfg2-bdfg3-dfef2-fdf"
                    }
                    , {
                        uuid: "dskf-32ee-e23sdf-few",
                        occupation: "人事部经理",
                        name: "司马懿",
                        pId: "addf34-dfg2-bdfg3-dfef2-fdf"
                    }
                    , {
                        uuid: "sdf-fdsfds-f2eff-sdd",
                        occupation: "技术部经理",
                        name: "吕布",
                        pId: "addf34-dfg2-bdfg3-dfef2-fdf"
                    }
                    , {
                        uuid: "sdsd-fewf23-f23e23e",
                        occupation: "销售部经理",
                        name: "孙尚香",
                        pId: "addf34-dfg2-bdfg3-dfef2-fdf"
                    }

                    , {
                        uuid: "sdfsdf-dsfdsff-23e2e",
                        name: "赵云",
                        occupation: "employer",
                        pId: "sldjfw-ewf-fewfwe-fewfbf"
                    }
                    , {
                        uuid: "sldf-3e3dsf-r33e23e",
                        name: "蒋干",
                        occupation: "employer",
                        pId: "dskf-32ee-e23sdf-few"
                    }
                    , {
                        uuid: "sdfsd-fe32e-e23ee3",
                        name: "张飞",
                        occupation: "employer",
                        pId: "sdf-fdsfds-f2eff-sdd"
                    }
                    , {
                        uuid: "sdlf-32e2e-dfdfsf3",
                        name: "杨玉环",
                        occupation: "employer",
                        pId: "sdsd-fewf23-f23e23e"
                    }
                ],
                getRoots: function () {
                    var result = [];
                    this.content.forEach(function (d) {
                        if (d.pId === "") {
                            result.push(d);
                        }
                    });
                    return result;
                },
                getNodeByPid: function (pid) {
                    var result = [];
                    this.content.forEach(function (d) {
                        if (d.pId === pid) {
                            result.push(d);
                        }
                    });
                    return result;
                }
            };
        }]);

    main.controller("mainController",
        ["$scope", "$interval", "$rootScope", "DataFactory", "$filter"
            , function ($scope, $interval, $rootScope, service, $filter) {


            $scope.children = [
                {
                    name: "齐皓",
                    gender: "!"
                }
                , {
                    name: "陈益民",
                    gender: "?"
                }
                , {
                    name: "万茂",
                    gender: "<>"
                }
            ];


            $scope.jsonObj = {
                name: "关羽",
                special: "金瓶梅",
                gender: "男",
                wife: "万茂",
                address: "蜀国"
            };


            $scope.stars = [
                {name: "林志玲", age: 200},
                {name: "范冰冰", age: 20},
                {name: "赵雅芝", age: 100}
            ];


            $scope.nowString = new Date();
            $interval(function () {
                $scope.nowString = new Date();
            }, 1);
            $scope.uppercaseFilter = "sdfsdsd"; //$filter("uppercase")("sdfsdsd");
            $scope.lowercaseFilter = $filter("lowercase")("ABCDE");
            $scope.currencyFilter = 2321;//$filter("currency")(1293812983);

            // orderBy
            // json
            // filter
            // limitTo
            // number


            $scope.itemClass = "item-class";


            $scope.roots = service.getRoots();
            $scope.roots.forEach(function (root) {
                root.children = service.getNodeByPid(root.uuid);
                root.children.forEach(function (child) {
                    child.grandSons = service.getNodeByPid(child.uuid);
                });
            });

            $scope.containerStyle = {
                "background-color": "blue",
                width: "100px",
                height: "80px"
            };
            $scope.classContainer = "container";


            $scope.$on("emit-test", function (event, m) {
                // alert(m);
            });

            $scope.title = "sdfsdf";
            $scope.obj = {
                name: "I'm mgModel + 花括号"
            };
            $scope.$watch("output", function () {
                $scope.$broadcast("broad-test", "broad-message");
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
        ["$scope", "$rootScope", function ($scope, $rootScope) {
            // var p = $scope.$parent;
            // alert($scope.teacher.length);
            // alert($rootScope.basisMsg);

            $scope.$on("broad-test", function (event, param) {
                // alert(param);
            });

            $scope.$emit("emit-test", "emit-message!");

        }]);


    var secondaryModel = ag.module("secondaryModel", []);
    secondaryModel.controller("secondaryController",
        ["$scope", function ($scope) {
            $scope.title = "sdkjhfsdfsd";
        }]);
    var ele = document.getElementById("secondary");
    ag.bootstrap(ele, ["secondaryModel"]);

})(angular, window);
