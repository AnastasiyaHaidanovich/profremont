export const slider = () => {
    const services = document.getElementById("services");
    const sliderBlock = services.querySelector(".row");
    let slides = services.querySelectorAll(".col-md-12.col-lg-6");  
    let slidesArray = Array.prototype.slice.call(slides);  
    const arrows = services.querySelector(".services-arrows");
    if (sliderBlock){
        const showSlides = (slides) => {
            slidesArray.forEach((slide, index) => {
                if (document.documentElement.scrollWidth > 576){
                    if(index == 0 || index == 1){
                        slide.style.display = "inline";
                    } else {
                        slide.style.display = "none";
                    }
                } else {
                    if (index == 0){
                        slide.style.display = "inline";
                    } else {
                        slide.style.display = "none";
                    }
                }                
            });
        };        

        const addSlide = (bool) => {
            let movedSlide = (bool ? slidesArray.shift() : slidesArray.pop());
            bool ? slidesArray.push(movedSlide) : slidesArray.unshift(movedSlide);
        };
        
        showSlides(slides);

        window.addEventListener('resize', () => {
            showSlides(slides);
          });
    
        arrows.addEventListener('click', (e) => {
            e.preventDefault();    
            const right = e.target.closest(".services__arrow--right");
            const left = e.target.closest(".services__arrow--left");

            if (!(left || right)) return;
            addSlide(!!right);       
            if (document.documentElement.scrollWidth > 576){
                addSlide(!!right); 
            }  
            showSlides(slides);
        });
    } else {return;}
};