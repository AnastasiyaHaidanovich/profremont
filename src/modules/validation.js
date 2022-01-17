export const validation = () => {
    const inputs = document.querySelectorAll(".form-control");
    inputs.forEach(input => {
        if (input.name == "phone"){
            input.addEventListener("input", (e) => {
                e.target.value = e.target.value.replace(/\D+/, "");
            });
        } else {
            input.addEventListener("input", (e) => {
                e.target.value = e.target.value.replace(/[^A-ZА-Я_]+/i, "");
            });
        }        
    });
};