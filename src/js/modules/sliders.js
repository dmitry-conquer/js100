import Swiper, { Navigation, Pagination, Autoplay, Parallax, Scrollbar } from 'swiper';

// Slider init function
export function initSliders() {
   //  Sliders list
   if (document.querySelector('.slider')) {
      let defaultSlider;
      defaultSlider = new Swiper('.slider', {
         // Сonnect modules (P.S dont forget !import)
         modules: [Navigation, Pagination, Autoplay, Parallax],

         // Custom classes
         wrapperClass: 'slider__wrapper',
         slideClass: 'slider__slide',

         // Common settings
         slidesPerView: 1,
         spaceBetween: 30,
         speed: 800,
         observer: true,
         observeParents: true,
         loop: true,
         loopedSlides: 2,
         // centeredSlides: true,
         // parallax: true,
         // watchOverflow: false,
         //autoHeight: true,
         // watchSlidesProgress: true,

         // Effects
         //effect: 'fade',
         //autoplay: {
         //  delay: 1000,
         //  disableOnInteraction: false,
         //  pauseOnMouseEnter: true,
         //},

         // Pagination
         // pagination: {
         //    el: '.slider-default__pagination',
         //    clickable: true,
         // },

         // Scrollbar
         // //scrollbar: {
         // //  el: '.swiper-scrollbar',
         // //  draggable: true,
         // //},

         // Navigation
         // navigation: {
         //    prevEl: '.slider-default__button_prev',
         //    nextEl: '.slider-default__button_next',
         // },



         // Breakpoints
         /*
         breakpoints: {
            320: {
               slidesPerView: 1,
               spaceBetween: 0,
            },
            576: {
               slidesPerView: 1,
               spaceBetween: 0,
            },
            768: {
               slidesPerView: 2,
               spaceBetween: 20,
            },
            992: {
               slidesPerView: 3,
               spaceBetween: 20,
            },
         },
         */


         // Events
            /*
         on: {
            // - - - - - - - [custom fraction] - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            init: function (swiper) {
              const allSliders = document.querySelector('.slider__all');
              allSliders.innerHTML = swiper.slides.length;
              console.log(allSliders.innerHTML);
            },
            slideChange: function (swiper) {
              const currentSlide = document.querySelector('.slider__current');
              currentSlide.innerHTML = swiper.realIndex + 1;
              console.log(currentSlide.innerHTML);
            },


            // - - - - - - - [tabs] - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            init: function(swiper) {
               const captions = document.querySelectorAll('.captions-courses__item');
               captions.forEach((item, index) => {
                  item.addEventListener('click', function(e) {
                     swiper.slideTo(index, 800)
                  });
               })
            },
            slideChange: function(swiper) {
               const captions = document.querySelectorAll('.captions-courses__item');
               captions.forEach((item) => {
                  item.classList.remove('_active');
               })
               captions[swiper.realIndex].classList.add('_active');
            },
         },
            */
      });

      // stop slider on mouseenter
      // defaultSlider.el.addEventListener('mouseenter', () => {
      //    defaultSlider.autoplay.stop();
      // });
      // defaultSlider.el.addEventListener('mouseleave', () => {
      //    defaultSlider.autoplay.start();
      // });
   }
}