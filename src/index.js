import { calc } from './modules/calc';
import { swiper } from "./modules/swiper";
import { slider } from "./modules/slider";
import { modal } from "./modules/modal";
import { timer } from './modules/timer';
import { menu } from './modules/menu';
import { sendForm } from './modules/sendForm';
import { validation } from './modules/validation';
import { smoothScroll } from './modules/smoothScroll';
import { certificates } from './modules/certificates';
import { comments } from './modules/comments';

comments();
smoothScroll();
swiper();
slider();
certificates();

modal(".btn-warning", ".header-modal", "header-modal__close");

modal(".btn-lg", ".header-modal", "header-modal__close");

modal(".open-modal", ".header-modal", "header-modal__close");

modal(".btn-sm", ".services-modal", "services-modal__close");

calc();
validation();
menu();
timer('22 january 2022');

sendForm("action-form");
sendForm("action-form2");
sendForm("callback-form");
sendForm("callback-form2");
sendForm("application-form");
sendForm("application-form2");

