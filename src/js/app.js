$(document).ready(function() {
    var Quan = {
        headEffect: function() {
          // elements
          var nav = "#nav";
          var active = "li.am-active";
          var li = "ul:eq(0)>li";
          // mouseover and mouseout event
          $(li, nav).mouseover(function() {
            $(this).addClass("am-active");
          });

          $(li, nav).mouseout(function(){
            $(this).removeClass("am-active");
          });

          // list click event
        }
    };
    Quan.headEffect();
});
