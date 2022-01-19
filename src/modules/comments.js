export const comments = () => {
    const commentsContainer = document.querySelector(" .comments-container");
    let commentItems = document.querySelectorAll(".comments-item");
    let newComment = commentItems[0].cloneNode(true);
    let newComment2 = commentItems[1].cloneNode(true);

    commentItems.forEach(comment => {
        comment.remove();
    });    
    
    return fetch('./../comments.json').then(res => res.json()).then(data => {
        console.log(data);

        const addComment = (index) => {
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
        addComment(1);
        addComment(2);
        addComment(3);

        let counter = 4;
        let timerId = setInterval(() => {
            commentItems = document.querySelectorAll(".comments-item");
            commentItems[0].remove();
            addComment(counter%6);
            counter++;
            
            // console.log(paragraphs[0]);
        }, 20000);
        
    });
};