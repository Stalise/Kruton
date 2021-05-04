'use strict'

examples__pages.onclick = function (event) {

   if (event.target.className == 'examples__page1') {
      examples__pages.children[0].style.animationName = 'animate';
      examples__pages.children[0].style.zIndex = 3;
      examples__pages.children[1].style.zIndex = 2;
      examples__pages.children[2].style.zIndex = 1;
      setTimeout(() => examples__pages.children[0].style.animationName = '', 1500)
   }

   else if (event.target.className == 'examples__page2') {
      examples__pages.children[1].style.animationName = 'animate';
      examples__pages.children[0].style.zIndex = 1;
      examples__pages.children[2].style.zIndex = 1;
      setTimeout(() => examples__pages.children[1].style.animationName = '', 1500)
   }

   else if (event.target.className == 'examples__page3') {
      examples__pages.children[2].style.animationName = 'animate';
      examples__pages.children[0].style.zIndex = 1;
      examples__pages.children[2].style.zIndex = 3;
      setTimeout(() => examples__pages.children[2].style.animationName = '', 1500)
   }
}

window.addEventListener('scroll', () => {

   if (document.body.clientWidth >= 1200) {

      if (window.pageYOffset >= 1250) {
         document.querySelector('.purchase__txt').classList.add('_active');
         document.querySelector('.purchase__button').classList.add('_active');
      }

      if (window.pageYOffset >= 4050) {
         document.querySelector('.statistics__content').classList.add('_active');
      }
   }

   if (document.body.clientWidth >= 992) {

      if (window.pageYOffset >= 1350) {
         document.querySelector('.purchase__txt').classList.add('_active');
         document.querySelector('.purchase__button').classList.add('_active');
      }

      if (window.pageYOffset >= 4150) {
         document.querySelector('.statistics__content').classList.add('_active');
      }
   }
})

