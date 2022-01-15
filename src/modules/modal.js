export const modal = () => {
    const btn = document.querySelector(".btn-block.fancyboxModal");
    const modal = document.querySelector(".header-modal");
    const overlay = document.querySelector(".overlay");

    const closeBtn = document.querySelector(".header-modal__close");

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = "block";
        overlay.style.display = "block";
    });

    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = "none";
        overlay.style.display = "none";
    });
};

