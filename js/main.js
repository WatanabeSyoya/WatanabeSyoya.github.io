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


  $("#01-A").change(function () {
    // チェックが入っていたら有効化
    if ($(this).is(":checked")) {
      // ボタンを有効化
      $("#button").css({ "pointer-events": "auto" });
      $("#button").prop("disabled", false);
      // 有効化したらボタンの色を変える
      $("#button").css({ "background-color": "#359B87" });
      $("#button").css({ "cursor": "pointer" });
      $("#button").hover(
        function () {
          //マウスカーソルが重なった時の処理
          $('button').css('background-color', '#5DAF9F');
        },
        function () {

          //マウスカーソルが離れた時の処理
          $('button').css('background-color', '#359B87');

        }
      );

    } else {
      // ボタンを無効化
      $("#button").prop("disabled", true);
      // 無効化したらボタンの色を戻す
      $("#button").css({ "background-color": "#c1c1c1" });
      $("#button").css({ "pointer-events": "none" });

    }
  });
});
