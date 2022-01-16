export const slider = () => {
    const services = document.getElementById("services");
    const sliderBlock = services.querySelector(".row");
    const slides = services.querySelectorAll(".service-block");
    
    if (sliderBlock && slides){

    let currentSlide = 0;
    let interval;
    let timeInterval = 1000;

    const prevSlide = (elems, index) => {
        elems[index].style.display = "none";
    };

    const nextSlide = (elems, index) => {
        elems[index].style.display = "inline-block";
    };

    const autoSlide = () => {
        prevSlide(slides, currentSlide);currentSlide ++;

        if(currentSlide >= slides.length){
            currentSlide = 0;
        }
        nextSlide(slides, currentSlide);
    };

    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault();

        prevSlide(slides, currentSlide);

        if (e.target.closest(".services__arrow--right")) {
            currentSlide ++;
        } else if (e.target.closest(".services__arrow--left")) {
            currentSlide --;
        } 

        if (currentSlide >= slides.length){
            currentSlide = 0;
        }

        if (currentSlide < 0){
            currentSlide = slides.length-1;
        }

        nextSlide(slides, currentSlide);
    });

    startSlide(timeInterval);
    // console.log();
    // portfolio-item-active
    // portfolio-btn
    // portfolio-dots
    } else {return;}
};