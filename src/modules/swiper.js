import Swiper, { Autoplay, Navigation } from 'swiper';
Swiper.use([Autoplay,Navigation]);

export const swiper = () => {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        centeredSlides: true,
        loop: true,

        slidesPerView: 1,

        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        
        breakpoints: {
          576: {
            slidesPerView: 3,
          }
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.benefits__arrow--right',
          prevEl: '.benefits__arrow--left',
        },
      
      });
 };

