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
                maxVal:"="
            },
            controller:["$scope",function($scope){

                /**
                 * 允许输入的特殊键(例：backspace、tab 等)
                 * @param e
                 * @returns {boolean}
                 */
                function isAllowKey(e){
                    var r = true;
                    if(e.keyCode != 8  //backspace键
                        && e.keyCode != 9  //tab键
                        && e.keyCode != 17 //ctrl键
                        && e.keyCode != 18 //Alt键
                        && e.keyCode != 16 //shift键
                        && e.keyCode != 93 //菜单键
                        && e.keyCode != 37 //左方向键
                        && e.keyCode != 39 //右方向键
                        && e.keyCode != 38 //上方向键
                        && e.keyCode != 40 //下方向键
                        && e.keyCode != 36 //home键
                        && e.keyCode != 35 //end键
                        && e.keyCode != 116 //f5键
                        && e.keyCode != 190 //点号键
                        && e.keyCode != 46 //delete键
                        && (e.keyCode != 69 && e.key !== ".") //e键
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
                        if(e.keyCode === 190){
                            e.preventDefault();
                            return false;
                        }
                        //小数点后只能有两位
                        if(rVal.length > 1 && !isAllowKey(e)){
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
                    if(e.keyCode < 48 || e.keyCode > 57){
                        if(!isAllowKey(e)){
                            e.preventDefault();
                            return false;
                        }
                    }
                    strVal = $scope.totalInput;
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
                $scope.inputKeyup = function(e){
                    //中文判断
                    if(e.key === "Process"){
                        $scope.totalInput = strVal;
                        console.log($scope.totalInput);
                        console.log(strVal);
                    }
                };
                $scope.totalInput;
            }]
        }
    }]);
})(window.angular);

