/**
 * Created by forli on 2016/12/29.
 */

function ajaxFn(url,method,option,callback){
    var ajax = null;
    if(window.XMLHttpRequest){
        ajax = new XMLHttpRequest();
    }else if(window.ActiveXObject){
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if(ajax){
        ajax.onreadystatechange = function(){
            switch(ajax.readyState){
                case 4:
                    var result = {};
                    if(ajax.status == 200){
                        result.content = ajax.responseText;
                    }
                    result.status = ajax.status;
                    callback(result);
                    break;
                case 3:
                    break;
                case 2:
                    break;
                case 1:
                    break;
            }
        };
        ajax.open(method ? method:"get",url,true);
        ajax.send(option);
    }
}
var dataAccept = document.getElementById("dataAccept");
var handle = function(){
    ajaxFn("../xmlHttpRequest","post",null,function(flag){
        if(flag.status == 200){
            var data = JSON.parse(flag.content);
            var container = document.getElementById('dataContainer');
            function header(){
                var head ="<div>"
                    +"<div>商品名</div>"
                    +"<div>价格</div>"
                    +"<div>商品链接</div>"
                    +"<div>日期</div>"
                    +"<div>数量</div>"
                    +"</div>";

                container.innerHTML = head;
            }
            header();
            function content(){
                var contentHtml = "";
                for(var i = 0; i < data.goods.length; i++){
                    var goods = data.goods[i];
                    var h = "<div>"
                        +"<div>" + goods.name + "</div>"
                        +"<div>" + goods.price + "</div>"
                        +"<a href='" + goods.homeLink + "'>" + goods.name + "</a>"
                        +"<div>"+goods.orderDate+"</div>"
                        +"<div>" + goods.total + "</div>"
                        +"</div>";
                    contentHtml += h;
                }
                container.innerHTML += contentHtml;
            }
            content();
        }
    });
};
if(dataAccept.addEventListener){
    dataAccept.addEventListener("click",handle);
}else{
    dataAccept.onclick = handle;
}