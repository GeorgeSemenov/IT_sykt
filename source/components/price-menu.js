$(document).ready(function(){
  $(".price-menu__item").click(function(){
    var tab_id = $(this).attr('data-tab');

    $(".price-menu__item .line-with-corner").removeClass('line-with-corner_theme_price-active');
    $('.price-menu__item .price-menu__item-container').removeClass('price-menu__item-container_active');

    $(".line-with-corner",this).addClass('line-with-corner_theme_price-active');
    $('.price-menu__item-container', this).addClass('price-menu__item-container_active');
  })
})