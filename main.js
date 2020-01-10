// Адаптив при загрузке страницы
$(document).ready(function(){ 
  adaptive_size_polygon();
  header_adaptive_size();
});

// адаптив при изменении размера страницы
$(window).resize(function(){
  adaptive_size_polygon();
  header_adaptive_size();
});

// Работа с header элементами
function header_adaptive_size(){
  // Зависимость высоты от ширины формы blue в header
  if ($(window).width() <= 420) {
    $('.logo-backgr-blue').width($(window).width()-55);
    $('.logo-backgr-blue').height(($('.logo-backgr-blue').width()/2));

    $('.img-logo').width($(window).width()-256);
  }
  else {
    $('.logo-backgr-blue').width(365);
    $('.logo-backgr-blue').height(184);

    $('.img-logo').width(165);
  };
  
  // Выстроение элементов в header относительно размера window
  if ($(window).width() <= 425) {
    $('.logo-backgr-black').css( 'left', $(window).width()-161 );
  }
  else {
    if ($(window).width() <= 680) {
      $('.logo-backgr-black').css( 'left', '264px' );
    }
    else {
      $('.logo-backgr-black').css( 'left', '355px' );
    };
  };

  // Задний фон
  if ($(window).width() <= 700 && 
      $(window).width() > 500) {
    $('.page1').css('left', ($(window).width() - 700 - 266));
  }
  else {
    if ($(window).width() > 700) $('.page1').css('left', -266);
    else $('.page1').css('left', -494);
  }
};

// Зависимость высоты от ширины форм в s1
// + местоположение полигона blue относительно black
function adaptive_size_polygon(){
    $('.form-black').height($('.form-black').width());
    if ($(window).width() <= 680) {
      $('.form-blue-big').width($('.form-black').width()/2);
      $('.form-blue-big').height($('.form-black').height());

      $('.form-blue-big').css('top', function(){
        return parseInt($('.form-black').css('top')) + 
                          $('.form-black').width() / 2;
      })
    }
    else {
      $('.form-blue-big').width(500);
      $('.form-blue-big').height(500);

      $('.form-blue-big').css('top', 655)
    }
};