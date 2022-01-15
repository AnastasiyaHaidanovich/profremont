import { Console } from 'console';
import { animate } from './helpers';

export const modal = () => {
    const btn = document.querySelector(".btn-block.fancyboxModal");
    const modal = document.querySelector(".header-modal");
    const overlay = document.querySelector(".overlay");

    btn.addEventListener('click', (e) => {
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

    });

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

    // closeBtn.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     modal.style.display = "none";
    //     overlay.style.display = "none";
    // });

    modal.addEventListener('click', (e) => {
        if(e.target.classList.contains("header-modal__close")){
            if (window.innerWidth > 768){
                smoothClose();
            } else {
                modal.style.display = "none";
                overlay.style.display = "none";
            }
        }
        
    });
};

