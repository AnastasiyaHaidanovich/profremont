import { animate } from './helpers';

export const modal = (btn, modalClass, closeBtnClass) => {
    const modal = document.querySelector(modalClass);
    const overlay = document.querySelector(".overlay");
    const body = document.querySelector("body");

    const smoothClose = () => {
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
        if(e.target.closest(btn)){
            e.preventDefault();
            const smoothOpen = () => {
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
            
            if(window.innerWidth > 768){
                smoothOpen();
            } else {
                modal.style.display = "block";
                overlay.style.display = "block";
            }
        }
        if(e.target.classList.contains(closeBtnClass)){
            if (window.innerWidth > 768){
                smoothClose();
            } else {
                modal.style.display = "none";
                overlay.style.display = "none";
            }
        }        
    });
};

