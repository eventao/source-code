/**
 * Created by forli on 2017/1/16.
 */
(function (window) {
    window.jQuery.fn.gallery = function () {
        var container = $(this);
        var main = container.find(".main");
        var enlarged = container.find(".enlarged");
        var enlargedImg = enlarged.find("img");
        var images = container.find(".bar > img");
        var target = container.find(".target");
        var cWid = container.width();
        var cHeight = container.height();
        images.mouseenter(function () {
            var current = container.find(".current");
            current.removeClass("current");
            $(this).addClass("current");
            var f = $(this).attr("data-f");
            var url = "images/" + f + "1.jpg";
            main.attr("src", url);
            var url2 = "images/" + f + "2.jpg";
            enlargedImg.attr("src", url2);
        });
        function setTargetOffset(e){
            var x = e.pageX;
            var y = e.pageY;
            var l = x-100;
            var t = y-100;
            var oSet = main.offset();
            var mW = oSet.left + main.width();
            mW -= target.width();
            var mH = oSet.top + main.height();
            mH -= target.height();
            target.offset({
                left:l > mW ?mW:l < oSet.left?oSet.left:l,
                top:t > mH?mH:t < oSet.top?oSet.top:t
            });
            var pR = target.position();
            var dLeft = pR.left / cWid;
            dLeft = dLeft * 100;
            dLeft *= 2;
            var dTop = pR.top / cHeight;
            dTop = dTop * 100;
            dTop *= 2;
            enlargedImg.css({
                left:-dLeft + '%',
                top:-dTop+"%"
            });
        }
        var isEnterTarget = false;
        target.mouseenter(function () {
                isEnterTarget = true;
            })
            .mouseleave(function(){
                isEnterTarget = false;
                target.css("visibility", "hidden");
                enlarged.css("visibility", "hidden");
            }).mousemove(setTargetOffset);
        main.mousemove(function(){

        }).mouseenter(function (e) {
            target.css("visibility", "visible");
            setTargetOffset(e);
            enlarged.css("visibility", "visible");
        }).mouseleave(function () {
            setTimeout(function () {
                if (!isEnterTarget) {
                    target.css("visibility", "hidden");
                }
            }, 50);
        }).mouseout(function(){
            setTimeout(function () {
                if (!isEnterTarget) {
                    target.css("visibility", "hidden");
                }
            }, 50);
        });
    }
})(window);
