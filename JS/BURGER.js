'use strict'


document.querySelector('.header__burger-icon').onclick = function () {
   if (document.querySelector('.header__burger').dataset.burg == 'close') {
      document.querySelector('.header__burger').style.display = 'block';
      setTimeout(() => {
         document.querySelector('.header__burger').style.opacity = '1';
         document.querySelector('.burger__stopper').style.transform = 'translate(0, 0)';
         document.querySelector('.burger__content').style.transform = 'translate(0, 0)';
      }, 10);
      document.querySelector('.header__burger').dataset.burg = 'open';
      document.querySelector('.header__burger-icon').style.background = 'url(ICON/CROSS.png) 0 0/contain no-repeat';
      document.body.style.overflow = 'hidden';

   } else if (document.querySelector('.header__burger').dataset.burg == 'open') {
      document.querySelector('.burger__content').style.transform = 'translate(-400px, 0)';
      document.querySelector('.burger__stopper').style.transform = 'translate(-400px, 0)';
      setTimeout(() => {
         document.querySelector('.header__burger').style.opacity = '0';
         setTimeout(() => document.querySelector('.header__burger').style.display = 'none', 300)
      }, 300);
      document.querySelector('.header__burger').dataset.burg = 'close';
      document.querySelector('.header__burger-icon').style.background = 'url(ICON/BURGER.png) 0 0/contain no-repeat';
      document.body.style.overflow = 'visible';
   }

   document.querySelector('.header__burger').onclick = function (event) {
      if (event.target.getAttribute('class') == 'header__burger') {
         document.querySelector('.burger__content').style.transform = 'translate(-400px, 0)';
         document.querySelector('.burger__stopper').style.transform = 'translate(-400px, 0)';
         setTimeout(() => {
            document.querySelector('.header__burger').style.opacity = '0';
            setTimeout(() => document.querySelector('.header__burger').style.display = 'none', 300)
         }, 300);
         document.querySelector('.header__burger').dataset.burg = 'close';
         document.querySelector('.header__burger-icon').style.background = 'url(ICON/BURGER.png) 0 0/contain no-repeat';
         document.body.style.overflow = 'visible';
      }
   }
}


window.addEventListener('resize', () => {
   if (document.body.clientWidth >= 993) {
      document.querySelector('.header__burger').style.opacity = '0'
      setTimeout(() => document.querySelector('.header__burger').style.display = 'none', 500);
      document.querySelector('.header__burger').dataset.burg = 'close';
      document.querySelector('.header__burger-icon').style.background = 'url(ICON/BURGER.png) 0 0/contain no-repeat';
      document.body.style.overflow = 'visible';
   }
})