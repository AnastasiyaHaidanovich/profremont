export const smoothScroll = () => {
        const scrollBtn = document.querySelector('.smooth-scroll');
        const header = document.getElementById("header");
        const nav = document.getElementById("navigation");
        const offer = document.getElementById("offer");
        scrollBtn.style.display = 'none';
        
        window.addEventListener('scroll', (e) => {
            if (window.scrollY > (header.offsetHeight + nav.offsetHeight + offer.offsetHeight)) {
                scrollBtn.style.display = 'block';
            } else {
                scrollBtn.style.display = 'none';
            }
        });
       
        scrollBtn.addEventListener("click", (e) => {
            e.preventDefault();
           
            document.getElementById('header').scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
            
            
        });
};