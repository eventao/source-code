/**
 * Created by forli on 2017/1/10.
 */
(function(window){
    var elements = [];
    window.$ = window.jQuery = function(selector){
        window.$.fn.elements = elements = document.querySelectorAll(selector);
        return window.$.fn;
    };
    window.$.fn = {};
    window.$.fn.extend = function(){

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
    };

})(window);
