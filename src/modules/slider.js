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

        showSlides(slides);

        window.addEventListener('resize', () => {
            showSlides(slides);
          });
    
        arrows.addEventListener('click', (e) => {
            e.preventDefault();    
            if (e.target.closest(".services__arrow--right")) {
                const addSlide = () => {
                    slides = services.querySelectorAll(".col-md-12.col-lg-6");
                    let slidesArray = Array.prototype.slice.call(slides);
                    let movedSlide = slidesArray.shift();
                    slides.forEach((elem,index) => {
                        if(index == 0){
                            elem.remove();
                        }
                    });
                    slidesArray.push(movedSlide);

                    let newSlide = document.createElement("div");
                    newSlide.classList.add("col-md-12.col-lg-6");
                    newSlide = movedSlide.cloneNode(true);
                    sliderBlock.append(newSlide);
                };
                addSlide();       
                if (document.documentElement.scrollWidth > 576){
                    addSlide(); 
                }                         
                // slidesArray.push(movedSlide);
                showSlides(slides);
                
            } else if (e.target.closest(".services__arrow--left")) {
                const addSlide = () => {
                    slides = services.querySelectorAll(".col-md-12.col-lg-6");
                    let slidesArray = Array.prototype.slice.call(slides);
                    let movedSlide = slidesArray.pop();
                    slides.forEach((elem,index) => {
                        if(index == slides.length-1){
                            elem.remove();
                        }
                    });
                    slidesArray.unshift(movedSlide);

                    let newSlide = document.createElement("div");
                    newSlide.classList.add("col-md-12.col-lg-6");
                    newSlide = movedSlide.cloneNode(true);
                    sliderBlock.insertAdjacentElement("afterbegin", newSlide);
                };
                
                // slidesArray.push(movedSlide);
                addSlide();       
                if (document.documentElement.scrollWidth > 576){
                    addSlide(); 
                }  
                showSlides(slides);
            } 
        });
    } else {return;}
};