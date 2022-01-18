export const slider = () => {
    const services = document.getElementById("services");
    const sliderBlock = services.querySelector(".row");
    let slides = services.querySelectorAll(".col-md-12.col-lg-6");
    const arrows = services.querySelector(".services-arrows");
    if (sliderBlock){

        const showSlides = (slides) => {
            slides = services.querySelectorAll(".col-md-12.col-lg-6");
            slides.forEach((slide, index) => {
                if (document.documentElement.scrollWidth > 1200){
                    if(index == 0 || index == 1){
                        slide.style.display = "inline";
                        slide.style.width = "50%";
                        slide.querySelector("img").style.width = "220px";
                        slide.querySelector(".service-text").style.marginLeft = "220px";
                        slide.querySelector("h3").style.fontSize = "";
                        slide.querySelector(".service-block").style.margin = "";
                        slide.querySelector(".service-button").style.display = "";
                    } else {
                        slide.style.display = "none";
                    }
                } else if (document.documentElement.scrollWidth > 991 && document.documentElement.scrollWidth <= 1200){
                    if(index == 0 || index == 1){
                        slide.style.display = "inline-block";
                        slide.style.width = "50%";
                        slide.querySelector(".service-block").style.margin = "0";
                        slide.querySelector("h3").style.fontSize = "18px";
                        slide.querySelector("img").style.width = "150px";
                        slide.querySelector("img").style.height = "100%";
                        slide.querySelector(".service-text").style.marginLeft = "150px";
                    } else {
                        slide.style.display = "none";
                    }
                } else if (document.documentElement.scrollWidth > 576 && document.documentElement.scrollWidth <= 991){
                    if(index == 0 || index == 1){
                        slide.style.display = "inline-block";
                        slide.style.width = "48%";
                        slide.querySelector(".service-block").style.margin = "0";
                        slide.querySelector(".service-button").style.display = "none";
                        slide.querySelector("h3").style.fontSize = "18px";
                        slide.querySelector("img").style.width = "150px";
                        slide.querySelector("img").style.height = "100%";
                        slide.querySelector(".service-text").style.marginLeft = "150px";
                        if (document.documentElement.scrollWidth <= 767){
                            slide.querySelector("h3").style.fontSize = "14px";
                            slide.querySelector("img").style.width = "100px";
                            slide.querySelector(".service-text").style.marginLeft = "100px";
                        }
                    } else {
                        slide.style.display = "none";
                    }                    
                }else {
                    if (index == 0){
                        slide.style.display = "inline";
                        slide.style.width = "";
                        slide.querySelector(".service-button").style.display = "";
                        slide.querySelector("img").style.width = "220px";
                        slide.querySelector(".service-text").style.marginLeft = "220px";
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
                // slidesArray.push(movedSlide);
                showSlides(slides);
                
            } else if (e.target.closest(".services__arrow--left")) {
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
                // slidesArray.push(movedSlide);
                
                showSlides(slides);
            } 
        });
    } else {return;}
};