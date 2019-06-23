$(document).ready(function(){

  //Вызов формы обратной связи
  $(".call-feedback-form-button").click(function(){
    $("body").css({"overflow":"hidden"});
    $("#feedback-form").fadeIn();
    $("#feedback-form").css({"top":($(window).scrollTop()+"px")});
  })
  //закрытие формы обратной связи
  $("#form__form-background, .form__close-button-wrapper, .form__send-button").click(function(){
    $("#feedback-form").fadeOut();
    $("body").css({"overflow":"auto"});
  })

  //Вызов формы заявки
  $(".call-request-form-button").click(function(){
    $("body").css({"overflow":"hidden"});
    $("#request-form").fadeIn();
    $("#request-form").css({"top":($(window).scrollTop()+"px")});
  })
  //закрытие формы заявки
  $("#form__form-background, .form__close-button-wrapper, .form__send-button").click(function(){
    $("#request-form").fadeOut();
    $("body").css({"overflow":"auto"});
  })
})