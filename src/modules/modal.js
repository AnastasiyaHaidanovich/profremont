import { animate } from './helpers';

export const modal = () => {
    const overlay = document.querySelector(".overlay");
    const body = document.querySelector("body");
    const headerModal = document.querySelector(".header-modal");
    const servicesModal = document.querySelector(".services-modal");

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
        if(e.target.closest(".btn-warning.btn-block") || e.target.closest(".btn-lg") || e.target.closest(".open-modal")){
            e.preventDefault();
            
            if(window.innerWidth > 768){
                smoothOpen(headerModal);
            } else {
                headerModal.style.display = "block";
                overlay.style.display = "block";
            }
        }
        if(e.target.closest(".btn-sm")){
            e.preventDefault();
            
            if(window.innerWidth > 768){
                smoothOpen(servicesModal);
            } else {
                servicesModal.style.display = "block";
                overlay.style.display = "block";
            }
        }
        if(e.target.classList.contains("header-modal__close") || e.target.classList.contains("services-modal__close")){
            if (window.innerWidth > 768){
                smoothClose(e.target.classList.contains("header-modal__close") ? headerModal : servicesModal);
            } else {
                (e.target.classList.contains("header-modal__close") ? headerModal : servicesModal).style.display = "none";
                overlay.style.display = "none";
            }
        }        
    });
};