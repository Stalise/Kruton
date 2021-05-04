'use strict'

filter__buttons.addEventListener('click', event => {
   if (event.target.tagName == 'BUTTON') {
      let filterList = filter__blocks.children
      event.target.classList.add('_active');

      for (let i of filter__buttons.children) {
         if (i != event.target) {
            i.classList.remove('_active')
         }
      }
      for (let i of filterList) {
         if (i.dataset.type != event.target.dataset.type) {
            i.style.display = 'none';
         }
         else {
            i.style.display = '';
         }
         if (event.target.dataset.all == 'all') {
            i.style.display = '';
         }
      }

      if (document.body.clientWidth >= 1200) {
         if (!filter__buttons.children[0].classList.contains('_active')) {
            console.log(1)
            document.querySelector('.main__portfolio').style.height = '1160px';
            document.querySelector('.portfolio__content').style.height = '1000px';
            document.querySelector('.portfolio__filter').style.height = '775px';
            filter__blocks.style.height = '705px';
            filter__blocks.dataset.view = 'close';
            portfolio__button.innerHTML = 'Load More'
         }
      } else if (document.body.clientWidth >= 992 && document.body.clientWidth < 1200) {
         if (!filter__buttons.children[0].classList.contains('_active')) {
            console.log(1)
            document.querySelector('.main__portfolio').style.height = '970px';
            document.querySelector('.portfolio__content').style.height = '835px';
            document.querySelector('.portfolio__filter').style.height = '610px';
            filter__blocks.style.height = '540px';
            filter__blocks.dataset.view = 'close';
            portfolio__button.innerHTML = 'Load More'
         }
      }

      // if (!filter__buttons.children[0].classList.contains('_active')) {
      //    console.log(1)
      //    document.querySelector('.main__portfolio').style.height = '1160px';
      //    document.querySelector('.portfolio__content').style.height = '1000px';
      //    document.querySelector('.portfolio__filter').style.height = '775px';
      //    filter__blocks.style.height = '705px';
      //    filter__blocks.dataset.view = 'close';
      //    portfolio__button.innerHTML = 'Load More'
      // }

      if (event.target.dataset.type == 'mob' || event.target.dataset.type == 'illus' || event.target.dataset.type == 'photo') {
         filter__blocks.style.justifyContent = 'flex-start';
         document.querySelector('.filter__blocks')
            .querySelector(`[data-type="${event.target.dataset.type}"]`)
            .style.marginRight = '30px';
      } else {
         filter__blocks.style.justifyContent = 'space-between';
         for (let i of filterList) {
            i.style.marginRight = '';
         }
      }
   }
})


if (document.body.clientWidth >= 1200) {
   portfolio__button.onclick = function () {
      if (filter__buttons.children[0].classList.contains('_active')) {
         if (filter__blocks.dataset.view == 'close') {
            document.querySelector('.main__portfolio').style.height = '1560px';
            document.querySelector('.portfolio__content').style.height = '1400px';
            document.querySelector('.portfolio__filter').style.height = '1175px';
            filter__blocks.style.height = '1105px';
            filter__blocks.dataset.view = 'show';
            portfolio__button.innerHTML = 'Close'
         }
         else if (filter__blocks.dataset.view == 'show') {
            document.querySelector('.main__portfolio').style.height = '1160px';
            document.querySelector('.portfolio__content').style.height = '1000px';
            document.querySelector('.portfolio__filter').style.height = '775px';
            filter__blocks.style.height = '705px';
            filter__blocks.dataset.view = 'close';
            portfolio__button.innerHTML = 'Load More';
         }
      }
   }
} else if (document.body.clientWidth >= 992 && document.body.clientWidth < 1200) {
   portfolio__button.onclick = function () {
      if (filter__buttons.children[0].classList.contains('_active')) {
         if (filter__blocks.dataset.view == 'close') {
            document.querySelector('.main__portfolio').style.height = '1230px';
            document.querySelector('.portfolio__content').style.height = '1100px';
            document.querySelector('.portfolio__filter').style.height = '875px';
            filter__blocks.style.height = '805px';
            filter__blocks.dataset.view = 'show';
            portfolio__button.innerHTML = 'Close'
         }
         else if (filter__blocks.dataset.view == 'show') {
            document.querySelector('.main__portfolio').style.height = '970px';
            document.querySelector('.portfolio__content').style.height = '835px';
            document.querySelector('.portfolio__filter').style.height = '610px';
            filter__blocks.style.height = '540px';
            filter__blocks.dataset.view = 'close';
            portfolio__button.innerHTML = 'Load More'
         }
      }
   }
}

window.addEventListener('resize', () => {

   if (document.body.clientWidth >= 1200) {

      document.querySelector('.main__portfolio').style.height = '1160px';
      document.querySelector('.portfolio__content').style.height = '1000px';
      document.querySelector('.portfolio__filter').style.height = '775px';
      filter__blocks.style.height = '705px';
      filter__blocks.dataset.view = 'close';
      portfolio__button.innerHTML = 'Load More'

      portfolio__button.onclick = function () {

         if (filter__buttons.children[0].classList.contains('_active')) {
            if (filter__blocks.dataset.view == 'close') {
               document.querySelector('.main__portfolio').style.height = '1560px';
               document.querySelector('.portfolio__content').style.height = '1400px';
               document.querySelector('.portfolio__filter').style.height = '1175px';
               filter__blocks.style.height = '1105px';
               filter__blocks.dataset.view = 'show';
               portfolio__button.innerHTML = 'Close'
            }
            else if (filter__blocks.dataset.view == 'show') {
               document.querySelector('.main__portfolio').style.height = '1160px';
               document.querySelector('.portfolio__content').style.height = '1000px';
               document.querySelector('.portfolio__filter').style.height = '775px';
               filter__blocks.style.height = '705px';
               filter__blocks.dataset.view = 'close';
               portfolio__button.innerHTML = 'Load More'
            }
         }
      }
   } else if (document.body.clientWidth >= 992 && document.body.clientWidth < 1200) {

      document.querySelector('.main__portfolio').style.height = '970px';
      document.querySelector('.portfolio__content').style.height = '835px';
      document.querySelector('.portfolio__filter').style.height = '610px';
      filter__blocks.style.height = '540px';
      filter__blocks.dataset.view = 'close';
      portfolio__button.innerHTML = 'Load More'

      portfolio__button.onclick = function () {
         if (filter__buttons.children[0].classList.contains('_active')) {
            if (filter__blocks.dataset.view == 'close') {
               document.querySelector('.main__portfolio').style.height = '1230px';
               document.querySelector('.portfolio__content').style.height = '1100px';
               document.querySelector('.portfolio__filter').style.height = '875px';
               filter__blocks.style.height = '805px';
               filter__blocks.dataset.view = 'show';
               portfolio__button.innerHTML = 'Close'
            }
            else if (filter__blocks.dataset.view == 'show') {
               document.querySelector('.main__portfolio').style.height = '970px';
               document.querySelector('.portfolio__content').style.height = '835px';
               document.querySelector('.portfolio__filter').style.height = '610px';
               filter__blocks.style.height = '540px';
               filter__blocks.dataset.view = 'close';
               portfolio__button.innerHTML = 'Load More'
            }
         }
      }
   }
})
