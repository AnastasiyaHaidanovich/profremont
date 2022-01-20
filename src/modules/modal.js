import { animate } from './helpers';

export const modal = () => {

    
    // modal(".btn-warning", ".header-modal", "header-modal__close");

    // modal(".btn-lg", ".header-modal", "header-modal__close");

    // modal(".open-modal", ".header-modal", "header-modal__close");

    // modal(".btn-sm", ".services-modal", "services-modal__close");
    const overlay = document.querySelector(".overlay");
    const body = document.querySelector("body");

    const smoothOpen = (modal) => {
        modal.style.display = "block";
        modal.style.opacity = 0;
        overlay.style.display = "block";
        overlay.style.opacity = 0;

        animate({
            duration: 1000,
            timing(timeFraction) {
            return timeFraction;
            },
            draw(progress) {
            modal.style.opacity = progress;
            overlay.style.opacity = progress;
            }
        });
    };

    const smoothClose = (modal) => {
        animate({
            duration: 1000,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                modal.style.opacity = 1 - progress;
                overlay.style.opacity = 1 - progress;
            }
        });
        setTimeout(()=> {
            modal.style.display = "none";
            overlay.style.display = "none";
        }, 1000);
    };

    body.addEventListener('click', (e) => {
        if(e.target.closest(".btn-warning") || e.target.closest(".btn-lg") || e.target.closest(".open-modal")){
            e.preventDefault();
            
            if(window.innerWidth > 768){
                smoothOpen(document.querySelector(".header-modal"));
            } else {
                document.querySelector(".header-modal").style.display = "block";
                overlay.style.display = "block";
            }
        }
        if(e.target.closest(".btn-sm")){
            e.preventDefault();
            
            if(window.innerWidth > 768){
                smoothOpen(document.querySelector(".services-modal"));
            } else {
                document.querySelector(".services-modal").style.display = "block";
                overlay.style.display = "block";
            }
        }
        if(e.target.classList.contains("header-modal__close") || e.target.classList.contains("services-modal__close")){
            if (window.innerWidth > 768){
                smoothClose(e.target.classList.contains("header-modal__close") ? document.querySelector(".header-modal") : document.querySelector(".services-modal"));
            } else {
                (e.target.classList.contains("header-modal__close") ? document.querySelector(".header-modal") : document.querySelector(".services-modal")).style.display = "none";
                overlay.style.display = "none";
            }
        }        
    });
};