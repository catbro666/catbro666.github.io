var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array("牛顿", "爱因斯坦", "孔子", "老子", "苏格拉底", "柏拉图", "哥伦布",
                          "达芬奇", "米开朗基罗", "莎士比亚", "弗洛伊德", "特斯拉", "伽利略",
                          "麦克斯韦", "成吉思汗", "贝多芬", "卢梭");
        //a_idx = Math.floor(Math.random()*a.length);
        var $i = $("<span>").text(a[a_idx]);
        var x = e.pageX,
            y = e.pageY;
        $i.css({
            "z-index": 99999,
            "top": y - 28,
            "left": x - a[a_idx].length * 8,
            "position": "absolute",
            "color": "#ff7a45"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        }, 1500, function() {
            $i.remove();
        });
        a_idx = (a_idx + 1) % a.length;
    });
});

</span>