/**
 * Created by forli on 2017/3/2.
 */

var dom = document.getElementById("container");
var obj = {};
var bValue = "我是初始title";
Object.defineProperty(obj, "title",
    {
    set : function(newValue){
        bValue = newValue;
        dom.innerHTML = newValue;
    }});
dom.innerHTML = obj.title;

