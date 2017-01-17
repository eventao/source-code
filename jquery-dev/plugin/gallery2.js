/**
 * Created by forli on 2017/1/16.
 */
(function (window, $) {
    $.fn.extend({
        gallery: function () {
            var box = $(this);
            var target = box.find(".target");
            var tH = target.height();
            var tW = target.width();
            var mainOffset = box.offset();
            var boxW = box.width();
            var boxH = box.height();
            var enlarge = box.find(".enlarged");
            var largeImg = enlarge.find("img");
            target.mouseleave(function () {
                target.css("visibility", "hidden");
                enlarge.css("visibility", "hidden");
            });
            box.mouseenter(function () {
                    target.css("visibility", "visible");
                    enlarge.css("visibility", "visible");
                })
                .mousemove(function (e) {
                    var x = e.pageX;
                    var y = e.pageY;
                    var top = y - 104;
                    var left = x - 104;
                    if (top < mainOffset.top + 1) {
                        top = mainOffset.top + 1
                    }
                    if (left < mainOffset.left + 1) {
                        left = mainOffset.left + 1
                    }
                    if (top + tH > mainOffset.top + boxH) {
                        top = mainOffset.top + boxH - tH;
                    }
                    if (left + tW > mainOffset.left + boxW) {
                        left = mainOffset.left + boxW - tW;
                    }
                    target.offset({
                        top: top,
                        left: left
                    });
                    var percentL = target.position().left / boxW;
                    var percentT = target.position().top / boxH;
                    largeImg.css({
                        top: (-percentT * 100 * 2) + "%",
                        left: (-percentL * 100 * 2) + "%"
                    });
                })
                .mouseleave(function () {
                    target.css("visibility", "hidden");
                    enlarge.css("visibility", "hidden");
                });
        }
    });
})(window, jQuery);

