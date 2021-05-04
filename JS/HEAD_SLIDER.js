'use strict'

let headerSlider = new Swiper('.header__slider-container', {

   pagination: {
      el: '.swiper-pagination',

      clickable: true,
   },

   simulateTouch: true,

   loop: true,

   speed: 1000,

   autoplay: {
      delay: 6000,
   },

   effect: 'fade',
})

