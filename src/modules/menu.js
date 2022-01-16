export const menu = () => {
    const menu = document.getElementById("navbar-collapse");
    const body = document.querySelector("body");

    body.addEventListener('click', (e) => {
        if (e.target.closest(".navbar-toggle.collapsed")){
            menu.classList.toggle("collapse");
        }});
};

