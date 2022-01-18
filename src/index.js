import { calc } from './modules/calc';
import { swiper } from "./modules/swiper";
import { slider } from "./modules/slider";
import { modal } from "./modules/modal";
import { timer } from './modules/timer';
import { menu } from './modules/menu';
import { sendForm } from './modules/sendForm';
import { validation } from './modules/validation';


const btn = document.querySelector(".btn-block.fancyboxModal");
modal(btn, ".header-modal", "header-modal__close");

const link = document.getElementById("about").querySelector(".fancyboxModal");
modal(link, ".header-modal", "header-modal__close");

const saleBtn = document.querySelector(".btn-success.fancyboxModal");
modal(saleBtn, ".header-modal", "header-modal__close");

const btnCall = document.querySelectorAll(".service-button");
btnCall.forEach(btn => {
    modal(btn, ".services-modal", "services-modal__close");
});

calc();
validation();
menu();
swiper();
slider();
timer('22 january 2022');

sendForm("action-form");
sendForm("action-form2");
sendForm("callback-form");
sendForm("callback-form2");
sendForm("application-form");
sendForm("application-form2");

