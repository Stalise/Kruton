'use strict'

let newsSlider = new Swiper('.news__slider-container', {
   navigation: {
      nextEl: '.news__swiper-button-next',
      prevEl: '.news__swiper-button-prev',
   },

   slidesPerView: 3,

   spaceBetween: 30,

   loop: true,

   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      767: {
         slidesPerView: 2,
      },
      1200: {
         slidesPerView: 3,
      },
   }
})