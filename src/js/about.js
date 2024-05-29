import './scss/about.scss';

// components

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useScroll } from './components/scroll.js';
import { useAboutHeroSlider } from './join/slider.js';
import { useTabs } from './components/about/tab.js';
import { useArticlesSlider } from './components/about/slider.js';

useTheme();
useBurger();
useScroll();
useAboutHeroSlider();
useArticlesSlider();
useTabs();
