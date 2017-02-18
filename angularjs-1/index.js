/**
 * Created by forli on 2017/2/15.
 */
(function (angular) {
    var starter = angular.module("starter", []);
    starter.config(function ($provide) {
        $provide.provider('MathService', function () {
            this.$get = function () {
                var factory = {};
                factory.multiply = function (a, b) {
                    return a * b;
                };
                return factory;
            }
        });
    });
    starter.value("defaultInput", 5);
    
    starter.config(function ($provide) {
        $provide.factory('movie', function () {
            return {
                title: 'The Matrix'
            }
        });
    });
    starter.factory("MathService", function () {
        var factory = {};
        factory.multiply = function (a, b) {
            return a * b
        };
        return factory;
    });
    starter.service('CalcService', function (MathService) {
        this.square = function (a) {
            return MathService.multiply(a, a);
        }
    });

    starter.constant("configParam", "constant value");
    starter.controller("starterController", [
        "$scope", "defaultInput", "MathService", "CalcService"
        , function ($scope, defaultInput, MathService, CalcService) {
            $scope.number = defaultInput;
            console.log($scope.number);

            $scope.result = CalcService.square($scope.number);
            console.log($scope.result);

            $scope.square = function () {
                $scope.result = CalcService.square($scope.number);
            };

        }
    ]);

})(window.angular);
