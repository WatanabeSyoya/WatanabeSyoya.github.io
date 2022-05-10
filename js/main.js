'use strict'


//ハンバーガーメニュー
$(function () {
  $('.hamburger').click(function () {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.globalMenuSp').addClass('active');
    } else {
      $('.globalMenuSp').removeClass('active');
    }
    $(".globalMenuSp a[href]").click(function () {
      $(".hamburger").trigger("click");
    });
    $('section').click(function () {
      $('.globalMenuSp').removeClass('active');
      $(".hamburger").trigger("click");
    });
  });

});
