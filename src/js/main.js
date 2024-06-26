import '/scss/main.scss';

// components

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import {
  useInsightSlider,
  usePartnersSlider,
  useTestimonialsSlider,
} from './components/home/slider.js';
import { useScroll } from './components/scroll.js';
import { useAccordion } from './components/accordion.js';

useTheme();
useBurger();
useScroll();
useInsightSlider();
useTestimonialsSlider();
usePartnersSlider();
useAccordion();
