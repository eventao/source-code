/**
 * Created by forli on 2017/1/23.
 */

(function ($) {
    $.fn.extend({
        scrollPanel: function () {
            var head = $("header");
            var search = head.find("input");
            var gallery = $(".gallery");
            var freshIcon = $(".fresh-icon");
            var gHeight = gallery.height();
            var max = 50;
            var dragging = {};
            $(this).on("touchstart", function (e) {
                // dragging.x = e.originalEvent.touches[0].pageX;
                dragging.y = e.originalEvent.touches[0].pageY;
                dragging.zGallery = 1;
            }).on("touchmove", function (e) {
                var touche = e.originalEvent.touches[0];
                var subY = touche.pageY - dragging.y;
                var sTop = $(this).scrollTop();
                sTop /= 2;
                if (sTop > 5) {
                    head.css({
                        "background-color": "rgba(0,179,136," + sTop / max + ")"
                    });
                    search.css({
                        "background-color": "rgba(8,162,124," + sTop / max + ")",
                        "color": "#fff"
                    });
                }
                else {
                    search.css({
                        "background-color": "#fff",
                        "color": "#000"
                    });
                    head.css("background", "none");
                    dragging.zGallery += subY / 850;
                    gallery.css("zoom",dragging.zGallery);
                    console.log(dragging.zGallery * 3);
                    for(var i = 0; i < 10;i++){
                        freshIcon.css({
                            width:"1px",
                            height:"1px",
                            zoom:dragging.zGallery * 5
                        });
                    }
                }
                dragging.x = touche.pageX;
                dragging.y = touche.pageY;
            }).on("touchend",function(){
                gallery.animate({
                    zoom:1
                },200);

            });
        }
    });
})(jQuery);
