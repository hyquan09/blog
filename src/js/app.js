$(document).ready(function() {
    var Quan = {
        cikLi: function() {
            $("li").mouseover(function() {
                $(this).addClass("am-active");
            });
        },
        remo: function() {
            $("li").mouseout(function() {
                $(this).removeClass("am-active");
            });
        }
    };
    Quan.cikLi();
    Quan.remo();
});