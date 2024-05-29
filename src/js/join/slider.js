import Swiper from 'swiper';
import { Scrollbar } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/scrollbar';

export const useJoinBeliefSlider = () => {
  new Swiper('.belief__slider', {
    modules: [Scrollbar],
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    variableWidth: true,
    scrollbar: {
      el: '.belief__slider-scrollbar',
      horizontalClass: 'belief__slider-scrollbar',
      draggable: true,
      dragClass: 'belief__slider-scrollbar-drag',
      dragSize: 100,
    },
  });
};

export const useJoinTeamSlider = () => {
  new Swiper('.team__slider', {
    modules: [Scrollbar],
    slidesPerView: 1,
    spaceBetween: 32,
    loop: true,
    scrollbar: {
      el: '.team__slider-scrollbar',
      horizontalClass: 'team__slider-scrollbar',
      draggable: true,
      dragClass: 'team__slider-scrollbar-drag',
      dragSize: 100,
    },
    breakpoints: {
      576: {
        slidesPerView: 1.5,
      },
      768: {
        slidesPerView: 2,
      },
      993: {
        slidesPerView: 3,
      }
    }
  });
};

export const useAboutHeroSlider = () => {
  new Swiper('.about__hero-slider', {
    modules: [Scrollbar],
    slidesPerView: 1,
    spaceBetween: 32,
    loop: true,
    variableWidth: true,
    scrollbar: {
      el: '.about__slider-scrollbar',
      horizontalClass: 'about__slider-scrollbar',
      draggable: true,
      dragClass: 'about__slider-scrollbar-drag',
      dragSize: 100,
    },
    breakpoints: {
      501: {
        slidesPerView: 1.2,
      },
      601: {
        slidesPerView: 1.5,
      },
      701: {
        slidesPerView: 1.8,
      },
      801: {
        slidesPerView: 2,
      },
      901: {
        slidesPerView: 2.2,
      },
      1001: {
        slidesPerView: 2.45,
      },
      1301: {
        slidesPerView: 2.6,
      },
      1501: {
        slidesPerView: 3,
      },
    }
  });
};
