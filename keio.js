/*スマホ下部の表レイアウト*/

/*マウスホバーで開く*/
$('.skill').hide();
$('.skill2').hide();
$('.skill3').hide();

$('.btn_up').hide();
$('.btn_up2').hide();
$('.btn_up3').hide();


if (window.matchMedia( "(min-width: 768px)" ).matches) {
  /* ウィンドウサイズが 768px以下の場合のコードをここに */
//一つ目//
    $('.skill_area').mouseenter(function(){
    $('.skill').slideDown();
    $('.skill2').hide();
    $('.skill3').hide();
    });
//マウスリーブ１
    $('.skill_all').mouseleave(function(){
    $('.skill').slideUp();
    });
//二つ目//
    $('.skill_area2').mouseenter(function(){
    $('.skill2').slideDown();
    $('.skill').hide();
    $('.skill3').hide();
  });

//マウスリーブ２
    $('.skill_all').mouseleave(function(){
    $('.skill2').slideUp();
    });
//三つ目//
    $('.skill_area3').mouseenter(function(){
    $('.skill3').slideDown();
    $('.skill').hide();
    $('.skill2').hide();
    });
//マウスリーブ３
    $('.skill_all').mouseleave(function(){
    $('.skill3').slideUp();
    });
}
/*レスポンシブのクリックの反応*/

if (window.matchMedia( "(max-width: 768px)" ).matches) {
  /* ウィンドウサイズが 768px以下の場合のコードをここに */
  $(function() {
    $('.skill_area').click(function(){
     $('.skill').toggle();
   });
 });
 $(function() {
   $('.skill_area').click(function(){
     $('.btn_up').toggle();
   });
 });
 $(function() {
   $('.skill_area').click(function(){
     $('.btn_down').toggle();
   });
 });  
} 
/*１つ目ここまで*/

if (window.matchMedia( "(max-width: 768px)" ).matches) {
  /* ウィンドウサイズが 768px以下の場合のコードをここに */
  $(function() {
    $('.skill_area2').click(function(){
      $('.skill2').toggle();
    });
  });
  $(function() {
    $('.skill_area2').click(function(){
      $('.btn_up2').toggle();
    });
  });
  $(function() {
    $('.skill_area2').click(function(){
      $('.btn_down2').toggle();
    });
  });  
} 

/*２つ目ここまで*/
if (window.matchMedia( "(max-width: 768px)" ).matches) {
  /* ウィンドウサイズが 768px以下の場合のコードをここに */
  　$(function() {
    $('.skill_area3').click(function(){
      $('.skill3').toggle();
    });
  });
  $(function() {
    $('.skill_area3').click(function(){
      $('.btn_up3').toggle();
    });
  });
  $(function() {
    $('.skill_area3').click(function(){
      $('.btn_down3').toggle();
    });
  });
} 
 /*3つ目ここまで*/



$(function() {
 
  // ①タブをクリックしたら発動
  $('.tab li').click(function() {
 
    // ②クリックされたタブの順番を変数に格納
    var index = $('.tab li').index(this);
 
    // ③クリック済みタブのデザインを設定したcssのクラスを一旦削除
    $('.tab li').removeClass('active');
 
    // ④クリックされたタブにクリック済みデザインを適用する
    $(this).addClass('active');
 
    // ⑤コンテンツを一旦非表示にし、クリックされた順番のコンテンツのみを表示
    $('.area ul').removeClass('show').eq(index).addClass('show');
 
  });
});

/*トップスライド*/
/*$('.left').on('click', function () {
  $('#slideshow img.active').removeClass('active');
  $('#slideshow img.active').addClass('last-active')
});*/

/*
(function(){
  // 設定
  var interval =3000; // 切り替わりの間隔（ミリ秒）
  var fade_speed = 1000;// フェード処理の早さ（ミリ秒）
  $(".fade-img-box img").hide();
  $(".fade-img-box img:first").addClass("active").show();
  
  var changeImage = function(){
      var $active = $("#slideshow img.active");
      var $next = $active.next("img").length?$active.next("img"):$("#slideshow img:first");
     
      $active.removeClass("active");
      $next.addClass("active");
  }
  
  
  setInterval(changeImage,interval);
  }());
*/



function slideSwitch() {
  var $active = $('#slideshow img.active');

  if ( $active.length == 0 ) $active = $('#slideshow img:last');

  var $next =  $active.next().length ? $active.next()
     : $('#slideshow img:first');

  $active.addClass('last-active');

  $next.css({opacity: 0.0})
     .addClass('active')
     .animate({opacity: 1.0}, 1000, function() {
          $active.removeClass('active last-active');
     });
}

$(function() {
  setInterval( "slideSwitch()", 3000 );
});

/*スライドショーのレスポンシブ*/
$(window).on('load resize', function() {
  $('#slideshow').height($('#slideshow img').outerHeight(true));
  });




//下部スライド
$('.nav_btn2 .next2').click(function(){
  $('.slide_under:not(:animated)').animate({
    'margin-left' : -1*$('.slide li').width()
  },function(){
    //アニメーション完了時
    $('.slide_under').append($('.slide_under li:first-child'));//先頭の画像を最後に持ってくる
    $('.slide_under').css('margin-left', '0');
  });
});

$('.nav_btn2 .prev2').click(function(){
  $('.slide_under:not(:animated)').prepend($('.slide_under li:last-child')) //最後の画像を先頭に持ってくる
  .css('margin-left', -1*$('.slide li').width())
  .animate({
    'margin-left' : 0
  });
});


 /*ハンバーガーメニューを開く*/
  $('.btn_ham').on('click', function(){
    var s = $('.sub_menu');
      s.animate({'right': '0'}, 500);
    });

    $('.btn_remove').on('click', function(){
      var s = $('.sub_menu'); 
        /*メニューを閉じる */
        var w = s.width();
        s.animate({'right': -w + 'px'}, 500).removeClass('SHOW');
     
    });

    /*レスポンシブ時のアコーディオン*/
    $('.show1').hide();
    $('.show2').hide();
    $('.show3').hide();
    $(function() {
      $('.one').click(function(){
        $('.show1').toggle();
      });
      $('.two').click(function(){
        $('.show2').toggle();
      });
      $('.three').click(function(){
        $('.show3').toggle();
      });

    });

 

