/**
 * Created by forli on 2017/1/10.
 */
(function(window){
    var gReadyHandle;
    var elements = [];
    window.$ = window.jQuery = function(param){
        if(typeof param == "function"){
            window.$.ready(param);
        }else if(typeof param == "string"){
            window.$.fn.elements = elements = document.querySelectorAll(selector);
        }else if(typeof param == "object"){
            if(Array.isArray(param)){

            }else if(param === document){
                window.onload = gReadyHandle;
            }
        }
        return window.$.fn;
    };
    window.$.fn = function(){};
    window.$.fn.extend = function(){
        
    };
    window.jQuery.__proto__  = {
        ready:function(){}
    };
    window.$.fn.__proto__ = {
        click:function(evenBack){
            var eles = window.$.fn.elements;
            for(var i = 0; i < eles.length; i++){
                eles[i].addEventListener("click",function(){
                    evenBack();
                });
            }
            return window.$.fn;
        }
        ,ready:function(readyHandle){
            gReadyHandle = readyHandle;
        }
    };
    window.addEventListener('load',function(){
        window.$.ready();
    });
})(window);
