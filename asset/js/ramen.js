'use strict'

$(function () {

  var height = $(window).height();
  var nav_pos = $('.fv1').offset().top;
  //画面上から#global_navまでの高さを取得
  var nav_height = $('.fv2').outerHeight();
  //#global_navの高さを取得
  $(window).scroll(function () {
    // windowがスクロールされた時に実行する処理
    if ($(this).scrollTop() > nav_height) {
      //スクロール位置が#global_nav以上になったら
      //$('.fv-img').css('position', 'absolute');
      $('#header-menu').css('top', '0');
      $('#header-menu').removeClass('UpMove');
      $('#header-menu').addClass('DownMove');

      //body要素にpadding-top:nav_height ;を付与
      //$("").addClass("fixed");
      //#global_navにfixedクラスを付与
    } else {
      //$('.fv-img').css('position', 'fixed');
      $('#header-menu').css('top', '-100px');
      $('#header-menu').removeClass('DownMove');
      $('#header-menu').addClass('UpMove');
      //スクロール位置が#global_nav以下になったら
      //$("body").css("padding-top", 0);
      //body要素にpadding-top: ０ ;を付与
      //$("#global_nav").removeClass("fixed");
      //#global_navからfixedクラスを取り除く
    }
  });

  $('.slide').slick({
    dots: true,
    autoplay: true,         //自動再生
    autoplaySpeed: 5000,  //自動再生のスピード
    speed: 1500,		//スライドするスピード
  });

  $(".fv2")
    // 最初のスライドに"add-animation"のclassを付ける(data-slick-index="0"が最初のスライドを指す)
    .on("init", function () {
      $('.slick-slide[data-slick-index="0"]').addClass("add-animation");
    })
    // 通常のオプション
    .slick({
      autoplay: true, // 自動再生ON
      fade: true, // フェードON
      arrows: false, // 矢印OFF
      speed: 3000, // スライド、フェードアニメーションの速度1000ミリ秒
      autoplaySpeed: 6000, // 自動再生速度3000ミリ秒
      pauseOnFocus: false, // フォーカスで一時停止OFF
      pauseOnHover: false, // マウスホバーで一時停止OFF
    })
    .on({
      // スライドが移動する前に発生するイベント
      beforeChange: function (event, slick, currentSlide, nextSlide) {
        // 表示されているスライドに"add-animation"のclassをつける
        $(".slick-slide", this).eq(nextSlide).addClass("add-animation");
        // あとで"add-animation"のclassを消すための"remove-animation"classを付ける
        $(".slick-slide", this).eq(currentSlide).addClass("remove-animation");
      },
      // スライドが移動した後に発生するイベント
      afterChange: function () {
        // 表示していないスライドはアニメーションのclassを外す
        $(".remove-animation", this).removeClass(
          "remove-animation add-animation"
        );
      },
    });
  //スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
  $('.fv2').on('touchmove', function (event, slick, currentSlide, nextSlide) {
    $('.fv2').slick('slickPlay');
  });


});
//$(window).on('load', function () {
//  $('.fv1').addClass('fadeIn');
//});
