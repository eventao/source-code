/**
 * Created by forli on 2017/1/2.
 */

(function(window){
    window.angular = {
        modules:{}
    };

    /**
     * 确定程序边界
     * @type {NodeList}
     */
    var html = document.getElementsByTagName('html');
    var otterElement,dataModel;
    (function findApp(eles,callBack){
        for(var i = 0; i < eles.length; i++){
            var ngApp = eles[i].getAttribute("ng-app");
            if(ngApp){
                callBack(eles[i],ngApp);
                break;
            }else{
                var children = eles[i].children;
                if(children.length){
                    findApp(children,callBack);
                }
            }
        }
    })(html,function(modelEle,model){
            otterElement = modelEle;
            dataModel = model;
        });


    if(otterElement){
    }

    if(dataModel){
        angular.modules[dataModel] = {

        };
    }

    if(!otterElement || !dataModel){
        return;
    }




})(window);
