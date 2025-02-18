$(function () {
  let initSwiper = false;
  let swiper;

  function onSlider() {
    if (window.innerWidth <= 767) {
      if (initSwiper === false) {
        initSwiper = true;
        $('.offers__list').wrapInner('<div class="swiper-wrapper"></div>');
        $('.offers__list').append('<div class="offers__pagination"></div>');
        swiper = new Swiper ('.offers__list', {
          enabled: true,
          autoHeight: true,
          spaceBetween: 10,
          slidesPerView: 1,
          pagination: {
            el: ".offers__pagination",
            type: 'bullets',
          },
        });
      } 
    } else if (initSwiper === true && window.innerWidth > 768) {
      swiper.destroy();
      initSwiper = false;
      $('.offers__list .swiper-wrapper').contents().unwrap();
      $('.offers__list .offers__pagination').remove();  
    }
  }
  onSlider();
  window.addEventListener('resize', onSlider);
});