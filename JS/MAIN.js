'use strict'

// document.onclick = function (event) {
//    console.log(event.target)
// }



// скролл до элемента при нажатии на элементы навигации в header
document.querySelector('.header__nav').onclick = function (event) {
   if (event.target.tagName == 'A') {
      let scrollNav = setInterval(() => {
         scrollBy(0, 10)
         if (window.pageYOffset >= document.querySelector(`.${event.target.dataset.scroll}`).offsetTop) {
            clearInterval(scrollNav);
         } else if (window.pageYOffset == document.body.scrollHeight - window.innerHeight) {
            clearInterval(scrollNav);
         }
      }, 5)
   }
}
// скролл до элемента при нажатии на элементы навигации в burger
document.querySelector('.burger__menu').onclick = function (event) {
   if (event.target.tagName == 'A') {
      document.querySelector('.burger__content').style.transform = 'translate(-400px, 0)';
      document.querySelector('.burger__stopper').style.transform = 'translate(-400px, 0)';
      setTimeout(() => {
         document.querySelector('.header__burger').style.opacity = '0';
         setTimeout(() => document.querySelector('.header__burger').style.display = 'none', 300)
      }, 300);
      document.querySelector('.header__burger').dataset.burg = 'close';
      document.querySelector('.header__burger-icon').style.background = 'url(ICON/BURGER.png) 0 0/contain no-repeat';
      document.body.style.overflow = 'visible';
      let scrollNav = setInterval(() => {
         scrollBy(0, 10)
         if (window.scrollY >= document.querySelector(`.${event.target.dataset.scroll}`).offsetTop) {
            clearInterval(scrollNav)
         } else if (window.pageYOffset == document.body.scrollHeight - window.innerHeight) {
            clearInterval(scrollNav);
         }
      }, 0)
   }
}


// анимация смены окон в блоке main__examples
if (document.body.clientWidth >= 767) {
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
}

// анимация при скроле страницы блоков main__purchase и main__statistic
window.addEventListener('scroll', () => {
   if (document.body.clientWidth >= 992) {
      if (window.pageYOffset + window.innerHeight >= main__purchase.offsetTop + main__purchase.offsetHeight) {
         document.querySelector('.purchase__txt').classList.add('_active');
         document.querySelector('.purchase__button').classList.add('_active');
      }
      if (window.pageYOffset + window.innerHeight >= (main__statistics.offsetTop + main__statistics.offsetHeight) - 50) {
         document.querySelector('.statistics__content').classList.add('_active');
      }
   }
})

// header-popup анимация появления
document.querySelector('.header-popup__button-open').onclick = function () {
   document.querySelector('.header-popup').style.display = 'block';
   document.querySelector('.header-popup').style.opacity = '1';
   setTimeout(() => document.querySelector('.header-popup').style.boxShadow = '0 0 200px 500px rgba(0, 0, 0,0.7) inset', 10);
   setTimeout(() => document.querySelector('.header-popup__wrapper').style.transform = 'scale(1, 1)', 400);
   document.body.style.overflow = 'hidden';

   //анимая закрытия popup при клике за его предлелами(на экран)
   document.querySelector('.header-popup').onclick = function (event) {
      if (event.target.getAttribute('class') == 'header-popup') {
         document.querySelector('.header-popup__wrapper').style.transform = 'scale(0, 0)';
         setTimeout(() => {
            document.querySelector('.header-popup').style.boxShadow = '0 0 100px 0 rgba(0, 0, 0,0.7) inset';
            document.querySelector('.header-popup').style.opacity = '0';
         }, 500);
         setTimeout(() => document.querySelector('.header-popup').style.display = 'none', 800);
         document.body.style.overflow = 'visible';
      }
   }
}

// header-popup анимация закрытия
document.querySelector('.header-popup__button-close').onclick = function () {
   document.querySelector('.header-popup__wrapper').style.transform = 'scale(0, 0)';
   setTimeout(() => {
      document.querySelector('.header-popup').style.boxShadow = '0 0 100px 0 rgba(0, 0, 0,0.7) inset';
      document.querySelector('.header-popup').style.opacity = '0';
   }, 500);
   setTimeout(() => document.querySelector('.header-popup').style.display = 'none', 800);
   document.body.style.overflow = 'visible';
}