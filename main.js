$(function() {
    // Адаптив при загрузке страницы
  $(document).ready(function() { 
    adaptive_size_polygon();
    header_adaptive_size();
    s1_adaptive_size();
    s3_adaptive();
  });


  // Адаптив при изменении размера страницы
  $(window).resize(function() {
    adaptive_size_polygon();
    header_adaptive_size();
    s1_adaptive_size();
    s3_adaptive();
  });


  // Работа с header элементами
  function header_adaptive_size() {
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
  };


  // Работа с элементами секции s1
  function s1_adaptive_size() {
    // Задний фон
    if ($(window).width() <= 700 && $(window).width() > 500) {
      $('.page1').css('left', ($(window).width() - 700 - 266));
    }
    else {
      if ($(window).width() > 700) $('.page1').css('left', 7);
      else $('.page1').css('left', -494);
    };
    if ($(window).width() <= 1024 && $(window).width() > 700) {
      $('.page1').css('left', -266);
    }
    else if ($(window).width() >= 1570) {$('.page1').css('left', -200)};
  };


  // Зависимость высоты от ширины форм в s1
  // + местоположение полигона blue относительно black
  function adaptive_size_polygon() {
      $('.form-black').height($('.form-black').width());
      if ($(window).width() <= 680) {
        $('.form-blue-big').width($('.form-black').width()/2 -5);
        $('.form-blue-big').height($('.form-black').height());

        $('.form-blue-big').css('top', function() {
          return parseInt($('.form-black').css('top')) + 
                            $('.form-black').width() / 2;
        })
      }
      else {
        $('.form-blue-big').width(500);
        $('.form-blue-big').height(500);

        $('.form-blue-big').css('top', 655);
      }
  };


  // Адаптив фона в секции .s3 
  function s3_adaptive() {
    if ($(window).width() <= 1395) {
      let y = -($(window).width() - 1395)/2;
      console.log(y)
      $('.backgr-wall-2').css('clip-path', 'polygon(0 ' + 
                              y + 'px, 50% 730px, 100% ' + 
                              y + 'px, 100% 100%, 0 100%)');
    }
    else  $('.backgr-wall-2').css('clip-path', 
            'polygon(0 0, 50% 730px, 100% 0, 100% 100%, 0 100%)');
  };
});
