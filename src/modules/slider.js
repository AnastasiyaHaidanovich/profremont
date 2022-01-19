export const slider = () => {
    const services = document.getElementById("services");
    const sliderBlock = services.querySelector(".row");
    let slides = services.querySelectorAll(".col-md-12.col-lg-6");
    const arrows = services.querySelector(".services-arrows");
    if (sliderBlock){

        const showSlides = (slides) => {
            slides = services.querySelectorAll(".col-md-12.col-lg-6");
            slides.forEach((slide, index) => {
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
            slides = services.querySelectorAll(".col-md-12.col-lg-6");
            let slidesArray = Array.prototype.slice.call(slides);
            let movedSlide = (bool ? slidesArray.shift() : slidesArray.pop());
            slides.forEach((elem,index) => {
                if(index == (bool ? 0 : slides.length-1)){
                    elem.remove();
                }
            });

            bool ? slidesArray.push(movedSlide) : slidesArray.unshift(movedSlide);

            let newSlide = document.createElement("div");
            newSlide.classList.add("col-md-12.col-lg-6");
            newSlide = movedSlide.cloneNode(true);

            bool ? sliderBlock.append(newSlide) : sliderBlock.insertAdjacentElement("afterbegin", newSlide);
        };
        
        showSlides(slides);

        window.addEventListener('resize', () => {
            showSlides(slides);
          });
    
        arrows.addEventListener('click', (e) => {
            e.preventDefault();    
            if (e.target.closest(".services__arrow--right")) {
                addSlide(true);       
                if (document.documentElement.scrollWidth > 576){
                    addSlide(true); 
                }                         
                showSlides(slides);
                
            } else if (e.target.closest(".services__arrow--left")) {                
                addSlide(false);       
                if (document.documentElement.scrollWidth > 576){
                    addSlide(false); 
                }  
                showSlides(slides);
            } 
        });
    } else {return;}
};