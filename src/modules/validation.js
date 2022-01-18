export const validation = () => {
    const inputs = document.querySelectorAll(".form-control.required");
    inputs.forEach(input => {
        if (input.name == "phone"){
            input.addEventListener("input", (e) => {
                // if (e.target.value.length < 2){
                //     console.dir(e.target)
                //     e.target.classList.add("error");
                    
                // } else {
                //     e.target.classList.remove("error");
                // }

                if(e.target.value.match(/\d+/)){
                    let name = e.target.value.match(/\d+/)[0];
                    e.target.value = name;
                    e.target.value = `+${name}`;
                    if (e.target.value.length > 17){
                        e.target.value = e.target.value.slice(0, 17);
                    }
                } else {
                    e.target.value = "";
                }                
            });
        } else {
            input.addEventListener("input", (e) => {
                if(e.target.value.match(/[а-яa-z\ ]+/i)){
                    let name = e.target.value.match(/[а-яa-z\ ]+/i)[0];
                    e.target.value = name;
                } else {
                    e.target.value = "";
                    e.target.classList.add("error");
                }
            });
        }        
    });
};