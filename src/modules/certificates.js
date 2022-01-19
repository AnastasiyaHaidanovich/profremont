export const certificates = () => {
    const docs = document.querySelectorAll(".sertificate-document");
    const docsSection = document.getElementById("documents");
    const mainOverlay = document.querySelector(".overlay");
    
    docs.forEach(doc => {
        doc.parentElement.addEventListener('mouseenter',() => {
            const overlay = doc.querySelector(".document-overlay");
            overlay.style.opacity = "1";
        });
        doc.parentElement.addEventListener('mouseout',() => {
            const overlay = doc.querySelector(".document-overlay");
            overlay.style.opacity = "";
        });
        doc.addEventListener('click',(e) => {
            e.preventDefault();
            const modal = document.createElement("div");
            const img = document.createElement("img");
            mainOverlay.style.display = "block";

            img.setAttribute("src", `${doc.href}`);
            img.style.height = "100%";

            modal.style.display = "block";
            modal.style.position = "fixed";
            modal.style.height = "100%";
            modal.style.top = "50%";
            modal.style.left = "50%";
            modal.style.transform = "translate(-50%, -50%)";
            modal.style.zIndex = "9999";

            modal.append(img);
            docsSection.append(modal);   

            mainOverlay.addEventListener('click', () => {
                mainOverlay.style.display = "none";
                modal.remove();
            });
        });
    });
};