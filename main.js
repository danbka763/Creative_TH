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

// Зависимость высоты от ширины формы blue в header
// А так-же выстроение элементов в header относительно размера window
function header_adaptive_size(){
  if ($(window).width() <= 420) {
    $('.logo-backgr-blue').width($(window).width()-55);
    $('.logo-backgr-blue').height(($('.logo-backgr-blue').width()/2));
    
    $('.img-logo').width($(window).width()-256);
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
};

let firstTop_blue = parseInt($('.form-blue-big').css('top'))
// Зависимость высоты от ширины форм в s1
function adaptive_size_polygon(){
    $('.form-black').height($('.form-black').width());
    $('.form-blue-big').height($('.form-blue-big').width());

    let top = firstTop_blue - 284 + $('.form-black').height()/2;
    $('.form-blue-big').css('top', top);

    console.log($('.form-blue-big').css('top'))
}