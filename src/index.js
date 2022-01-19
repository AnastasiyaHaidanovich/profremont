import { swiper } from "./modules/swiper";
import { modal } from "./modules/modal";
import { timer } from './modules/timer';
import { menu } from './modules/menu';

modal(".btn-warning", ".header-modal", "header-modal__close");

modal(".btn-lg", ".header-modal", "header-modal__close");

modal(".open-modal", ".header-modal", "header-modal__close");

modal(".btn-sm", ".services-modal", "services-modal__close");

menu();
swiper();
timer('12 january 2022');