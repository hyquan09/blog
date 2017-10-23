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

      $(li, nav).mouseout(function() {
        $(this).removeClass("am-active");
      });

      // list click event
    }
  };
  Quan.headEffect();
  //名字验证
  function nameVerify() {
    var Lettre = /^[A-Za-z0-9]{7}\w+$/; //正则表达式
    if ($("#doc-ipt-name").val().search(Lettre) === -1) {
      $("#doc-ipt-name").next().html("！！账号必须是以写字母开头的 最少7位");
      return false;
    } else {
      $("#doc-ipt-name").next().html("");
      return true;
    }
    return true;
  };
  //邮箱验证
  function emailVerify() {
    var emaillID = "#doc-ipt-email";
    var emailLtter = /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
    if ($(emaillID).val().search(emailLtter) === -1) {
      $(emaillID).next().html("!!错啦~ 睇清楚！");
      return false;
    } else {
      $(emaillID).next().html("");
      return true;
    }
    return true;
  };
  //多选验证
  //文本验证，处理敏感字体
  function textDeal() {
    var textName = "#doc-ta-1";
    var textLitter = /^内容\s[\u4e00-\u9fa5]{3}/;
    var hintError = /[fuck|mad]/;




    // if ($(textName).val().search(textLitter) === -1) {
    //   $(textName).next().html("最少输入3个字！");
    //   return false;
    // }
    // else {
    //   $(textName).next().html("");
    //   return true;
    // }
    // alert($(textName).val().search(hintError));
    if($(textName).val().search(hintError) == 0) {
      $(textName).next().html("注意用词！");
      return false;
    }
    else {
      $(textName).next().html("");
      return true;
    }
  };

  $("#doc-ipt-name").blur(nameVerify);
  $("#doc-ipt-email").blur(emailVerify);
  $("#doc-ta-1").blur(textDeal);
  // $("#doc-ipt-name").blur(nameVreify);
  //fillVerify
  function fillVerify() {
    if ($("#doc-ipt-name").val() == "" || $("#doc-ipt-email").val() == "" || $("#doc-ta-1").val() == "") {
      alert("Erro:请填写完毕");
      return false;
    }
    return true;
  };
  $("form").submit(function() {
    return fillVerify();
  });
  //end
});
