import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/scss';

export const useArticlesSlider = () => {
  new Swiper('.articles__slider', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 35,
    loop: true,
    navigation: {
      prevEl: '.articles__button-prev',
      nextEl: '.articles__button-next',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      769: {
        slidesPerView: 2.2,
      },
      1001: {
        slidesPerView: 2.5,
      },
      1201: {
        slidesPerView: 2.6,
      },
      1301: {
        slidesPerView: 2.7,
      },
      1401: {
        slidesPerView: 3,
      },
      1501: {
        slidesPerView: 3.4,
      }
    }
  });
};