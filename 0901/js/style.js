$(document).ready(function () {
  $(".nav-list li ul").hide();
  $(".nav-list  li").hover(
    function () {
      $(this).find("ul").slideDown("fast");
    },
    function () {
      $(this).find(".program,.drama,.channel,.more").fadeOut("fast");
    }
  );
});

$(document).ready(function () {
  var i = 0;
  var clone = $(".carousel .banner-img li").first().clone();
  $(".carousel .banner-img").append(clone);
  var size = $(".carousel .banner-img").size();

  var t = setInterval(function () {
    i++;
    move();
  }, 2000);

  function move() {
    if (i == size) {
      $(".banner .banner-img").css({ left: 0 }); //left:拉回至0位置
      i = 1;
    }
    if (i == -1) {
      $(".banner .banner-img").css({ left: -(size - 1) * 880 });
      i = size - 2;
    }
    $(".banner .banner-img")
      .stop()
      .animate({ left: -i * 880 }, 500);
    /*動畫 往左拉-500px 會隨者i改變 而越拉越多*/
  }
  /*此區域被滑鼠移入時*/
  $(".banner").hover(
    function () {
      clearInterval(t); //清除計時器
    },
    function () {
      //滑鼠移出
      t = setInterval(function () {
        i++;
        move();
      }, 2000);
    }
  );

  $(".banner .left").click(function () {
    i++;
    move();
  });

  $(".banner .right").click(function () {
    i--;
    move();
  });
});
