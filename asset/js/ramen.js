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
    speed: 1000,		//スライドするスピード

  });
  $('.fv2').slick({
    fade: true,
    autoplay: true,         //自動再生
    autoplaySpeed: 3000,  //自動再生のスピード
    speed: 1000,		//スライドするスピード
    pauseOnHover: false,
  });



});
//$(window).on('load', function () {
//  $('.fv1').addClass('fadeIn');
//});
