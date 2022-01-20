export const comments = () => {
    const commentsContainer = document.querySelector(" .comments-container");
    let commentItems = document.querySelectorAll(".comments-item");
    let newComment = commentItems[0].cloneNode(true);
    let newComment2 = commentItems[1].cloneNode(true);

    const addLoader = () => {
        commentItems.forEach(comment => {
            comment.remove();
        }); 
        const loaderImg = document.createElement("img");
        const loaderBlock = document.createElement("div");

        loaderImg.setAttribute("src","./images/loader.svg");
        loaderImg.setAttribute("width","100px");
        loaderImg.setAttribute("id","loader");

        loaderBlock.style.width = "200px";
        loaderBlock.style.display = "flex";
        loaderBlock.style.justifyContent = "center";
        loaderBlock.style.margin = "auto";
        loaderBlock.classList.add("loader-block");

        loaderBlock.appendChild(loaderImg);
        document.getElementById("reviews").querySelector(".row").insertAdjacentElement("afterbegin",loaderBlock);
    };

    

    const addComment = (index,data) => {
        let comment = ((index % 2 == 1) ? newComment : newComment2).cloneNode(true);
        let paragraphs = comment.querySelectorAll("p");
        let avatar = comment.querySelector("img");
        // console.dir(avatar);

        paragraphs[0].textContent = data.comments[index].author;
        paragraphs[1].textContent = data.comments[index].comment;
        avatar.src = data.comments[index].image !== "" ? `./../images/users/${data.comments[index].image}` : "./../images/users/avatar.png";
        avatar.setAttribute("height", "121px");
        avatar.setAttribute("width", "121px");

        commentsContainer.append(comment);
    };

    const getData = () => {
        return fetch('../comments.json').then(res => res.json()).then(data => {
            if(document.querySelector(".loader-block")){
                document.querySelector(".loader-block").remove();
            }        
        
            addComment(1, data);
            addComment(2, data);
            addComment(3, data);

            let counter = 4;
            let timerId = setInterval(() => {
                commentItems = document.querySelectorAll(".comments-item");
                commentItems[0].remove();
                addComment(counter%6, data);
                counter++;
            }, 20000); 
        })
        .catch(function(error) {
            console.log(error.message);
        });    
    };
    document.addEventListener("DOMContentLoaded", addLoader());

    window.onload =  function() {
        getData();
    };
    // setTimeout(getData,2000);

};