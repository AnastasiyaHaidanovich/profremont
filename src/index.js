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

smoothScroll();
swiper();
slider();
certificates();

calc();
validation();
modal();
menu();
timer('22 january 2022');

sendForm("action-form");
sendForm("action-form2");
sendForm("callback-form");
sendForm("callback-form2");
sendForm("application-form");
sendForm("application-form2");

