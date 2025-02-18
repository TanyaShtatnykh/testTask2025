
$(function () {
  $('.header__burger').on('click', function () {
    $(this).toggleClass('header__burger--open');
  })
});

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


$(function () {
  let timer = document.querySelector('.timer__timer');
  let time = 600;
  let startTime = 600;

  function countDown() {
    if (window.innerWidth >= 767) {
      let hours = Math.floor(time / 3600);
      let minutes = Math.floor((time % 3600) / 60);
      let seconds = time % 60;

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      timer.innerHTML = `${hours} : ${minutes} : ${seconds}`;

      if (time > 0) {
        time--;
      } else if (time === 0) {
        time = startTime;
      }
    }
  }
  countDown();
  setInterval(countDown, 1000)
  window.addEventListener('resize', countDown);
});