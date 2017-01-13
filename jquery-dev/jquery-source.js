/**
 * Created by forli on 2017/1/13.
 */

(function (window) {
    var loadHandle;
    window.$ = function () {};
    window.jQuery = window.$;
    window.jQuery.fn = function(){};
    window.jQuery = function(param){
        if(typeof param == "string"){
            window.$.fn.elements = document.querySelectorAll(param);
        }else if(typeof param == "function"){
            loadHandle = param;
        }else if(typeof param == "object"){
            if(param === document){
                document.onload = loadHandle;
            }else if(typeof param === window.$.fn){
                return param;
            }
        }
        return window.$.fn;
    };
})(window);





