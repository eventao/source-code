/**
 * Created by forli on 2017/3/21.
 */
(function(angular){
    var module = angular.module("starter");
    module.directive("moneyInput",[function(){
        return{
            templateUrl:'./scripts/money-directive.html',
            scope:{
                saveData:"&",
                totalInput:"=",
                maxVal:"=",
                dotLimit:"="
            },
            controller:["$scope","$timeout",function($scope,$timeout){

                /**
                 * 允许输入的特殊键(例：backspace、tab 等)
                 * @param e
                 * @returns {boolean}
                 */
                function isAllowKey(e){
                    var r = true;
                    if(e.key != 'Backspace'  //backspace键
                        && e.key != 'Tab'  //tab键
                        && e.key != 'Control' //ctrl键
                        && e.key != 'Alt' //Alt键
                        && e.key != 'Shift' //shift键
                        && e.key != 'ContextMenu' //菜单键
                        && e.key != 'ArrowLeft' //左方向键
                        && e.key != 'ArrowRight' //右方向键
                        && e.key != 'ArrowUp' //上方向键
                        && e.key != 'ArrowDown' //下方向键
                        && e.key != 'Home' //home键
                        && e.key != 'End' //end键
                        && e.key != 'F5' //f5键
                        && e.key != '.' //点号键
                        && e.key != 'Delete' //delete键
                        && e.key != 'e' //e键
                    ){
                        r = false;
                    }
                    return r;
                }

                /**
                 * 小数点判断
                 * @param strVal
                 * @param e
                 * @returns {boolean}
                 */
                function dotJudge(strVal,e){
                    if(strVal.indexOf('.') > -1 ){
                        var rVal = strVal.split('.')[1];
                        //只能有一个小数点
                        if(e.key === "."){
                            e.preventDefault();
                            return false;
                        }
                        //小数点后位数限制
                        if(!$scope.dotLimit || $scope.dotLimit<1){$scope.dotLimit=1}
                        if(rVal.length > ($scope.dotLimit-1) && !isAllowKey(e)){
                            e.preventDefault();
                            return false;
                        }
                    }
                }

                /**
                 * 添加千分位
                 * @param p
                 * @returns {string}
                 */
                function thousandSplit(p){
                    var result = "";
                    p = String(p);
                    if(!p || !p.trim()){
                        return result;
                    }
                    result = p;
                    if(result.indexOf('.') > -1){
                        return result;
                    }
                    var integer = p.split(".")[0];
                    if(integer.length >= 3){
                        if((integer.length - 3) % 4 == 0){
                            result +=",";
                        }
                    }
                    return result;
                }

                $scope.isMaxLimit = false;
                /**
                 * 最大值限制
                 * @param p
                 * @param e
                 */
                function maxLimit(p,e){
                    if(!p || !e)return;
                    var value = p.replace(/,/g, "");
                    value += e.key;
                    $scope.isMaxLimit = $scope.maxVal < Number(value);
                    if($scope.isMaxLimit){
                        e.preventDefault();
                    }
                }

                var strVal = String($scope.totalInput);
                $scope.inputKeydown = function(e){
                    //非数字键判断(兼容ie和低版本浏览器)
                    var realkey=String.fromCharCode(e.key)
                    var isNumber = /^[0-9]$/.test(e.key);
                    if(!isNumber){
                        if(!isAllowKey(e)){
                            e.preventDefault();
                            return false;
                        }
                    }
                    strVal = String($scope.totalInput);
                    if(!strVal){
                        //第一个字符为小数点
                        if(e.key === "."){
                            $scope.totalInput = "0";
                        }
                    }
                    if(strVal){
                        //小数点判断
                        dotJudge(strVal,e);
                        //最大值限制
                        maxLimit(strVal,e);
                        //添加千分位
                        if(!$scope.isMaxLimit){
                            if(!isAllowKey(e)){
                                $scope.totalInput = thousandSplit($scope.totalInput);
                            }
                        }
                    }
                };

                $scope.interval = null;
                $scope.inputKeyup = function(e){
                };
                $scope.inputBlur = function(){
                    $timeout.cancel($scope.interval);
                }
            }]
        }
    }]);
})(window.angular);

