$(document).ready(function(){
  $(".feedback-button").click(function(){
    $("body").css({"overflow":"hidden"});
    $("#feedback-form").fadeIn();
    $("#feedback-form").css({"top":($(window).scrollTop()+"px")});
  })
  $("#form__form-background, .form__close-button-wrapper, .form__send-button").click(function(){
    $("#feedback-form").fadeOut();
    $("body").css({"overflow":"auto"});
  })
})