// console.log($(window).width());

// Зависимость высоты от ширины форм в s1
$(function(){
  $(window).resize(function(){
    $('.form-black').height($('.form-black').width());
    $('.form-blue-big').height($('.form-blue-big').width());
  });
});

// Зависимость высоты от ширины формы blue в header
$(function(){
  $(window).resize(function(){
    if ($(window).width() <= 420) {
      $('.logo-backgr-blue').width($(window).width()-55);
      $('.logo-backgr-blue').height(($('.logo-backgr-blue').width()/2));
      
      $('.img-logo').width($(window).width()-256);

      console.log($('.logo-backgr-blue').width());
    }
    else {
      $('.logo-backgr-blue').width(365);
      $('.img-logo').width(165);
    };

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
  });
});

