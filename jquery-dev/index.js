/**
 * Created by forli on 2017/3/7.
 */
(function(){
    // $.deffer




    var container2 = $("#container2");
    var items20 = container2.children().eq(-3);
    var items3 =  container2.children()[0];
    var sourceColor = items20.css("background");
    items20.mousedown(function(){
        $(this).css("background","green")
    }).mouseup(function(){
        $(this).css("background",sourceColor)
    }).one("mouseenter",function(){
        $(this).css("background","green")
    }).one("mouseleave",function(){
        $(this).css("background",sourceColor)
    });

    items3.onmousedown = function(){
        alert("我是原生dom对象");
    };





    var container = $("#container");
    container.css("background","white");
    var items = container.find(".item:even");
    items.css({
        "background":"red"
    });
    items.on("mousedown",function(){
        $(this).css("background","white");
    }).on("mouseup",function(){
        $(this).css("background","red");
    });

    items.eq(6).click(function(){
        alert($(this).index());
    });


    var items2 = container.find(".item:odd");
    items2.css({
        "background":"blue"
    });
    items2.click(function(){
        $(this).animate({
            width:0
        },800,function(){
            $(this).animate({
                width:"100%"
            },800);
        });
    });
    container.find(".item").each(function(i,ele){
        $(this).text(i).css("color","#fff");
    });



})();