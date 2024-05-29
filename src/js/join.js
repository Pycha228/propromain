import '/scss/join.scss';

// components

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useJoinBeliefSlider, useJoinTeamSlider } from './join/slider.js';
import { useScroll } from './components/scroll.js';

useTheme();
useBurger();
useJoinBeliefSlider();
useScroll();
useJoinTeamSlider();
