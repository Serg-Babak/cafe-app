var swiper = new Swiper('.mySwiper', {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  });