export const sendForm = (formName) => {
    const form = document.querySelector(`form[name=${formName}]`);
    const statusBlock = document.createElement("div");

    const loadText = "Загрузка...";
    const errorText = "Ошибка!";
    const successText = "Спасибо! Наш менеджер с Вами свяжется!";

    const validate = (list) => {
        let success = true;
        let successName = false;
        let successPhone = false;

        list.forEach(elem => {
            if (elem.name === "fio" && elem.value.length >= 2){
               successName = /[а-яa-z\ ]+/i.test(elem.value);            
            } 
            if (elem.name === "phone" && elem.value.length <= 17){
                successPhone = /[0-9+]+/.test(elem.value);
            }                    
        });

        if (successName && successPhone){
            success = true;
        } else {
            success = false;
        }
        
        return success;
    };

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', { 
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json"
            }
        }).then(res => res.json());
    };

    const submitForm = () => {
        const formElements = form.querySelectorAll(".form-control");
        const formData = new FormData(form);
        const formBody = {};
        
        statusBlock.textContent = loadText;
        
        statusBlock.style.color = "darkgrey";
        form.append(statusBlock); 

        formData.forEach((value, key) => {
            formBody[key] = value;
        });

        // someElem.forEach((elem) => {
        //     const element = document.getElementById(elem.name);
        //     if (elem.type === "block"){
        //         formBody[elem.name] = element.textContent;
        //     } else if (elem.type === "input"){
        //         formBody[elem.name] = element.textContent;
        //     }
        // });

        // console.log();

        if (validate(formElements)){
            sendData(formBody)
            .then(data => {
                formElements.forEach(elem => {
                    elem.value = "";
                });
                statusBlock.textContent = successText;
            })
            .catch(error => {
                statusBlock.textContent = errorText;
            });
        } else {
            alert("Данные не валидны");
            statusBlock.remove();
        }
    };

    try {
        if(!form){
            throw new Error("Верните форму");
        }
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            submitForm();        
        });
    } catch(error) {
        console.log(error.message);
    }
};