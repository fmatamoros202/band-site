const API_KEY = "api_key=2e915d20-0296-46f3-9c06-431d21e71b86"

axios 
.get("https://project-1-api.herokuapp.com/comments?"+API_KEY)
.then(result=>{
    console.log(result);
    let comments = result.data;
    console.log(comments);

    comments.map((element) =>{
        element.timestamp = dateConvert(element.timestamp);
    });

    comments.forEach((element) =>{
        displayComment(element);
    });

})

.catch(error=>{
    console.log("Data is not available");
});

function dateConvert (datetoConvert) {
    datetoConvert = (datetoConvert *1000);
    date = new Date();
    return convertedDate = date.toLocaleDateString();
    }

// let comments = [
//     {
//         avatar: url=(""),
//         name:"Miles Acosta",
//         timeStamp: "12/20/2020",
//         text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
//     },
//     {
//         avatar: url=(""),
//         name: "Emilie Beach",
//         timeStamp: "01/09/2021",
//         text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
//     },
//     {
//         avatar: url=(""),
//         name: "Connor Walton",
//         timeStamp: "02/17/2021",
//         text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
//     }
// ]

let mainContainerConvo = document.querySelector('.container-convo');


let containerConvoElements = document.createElement('div');
containerConvoElements.classList.add('convo-elements');

let convoHeader = document.createElement('h2');
convoHeader.classList.add('elements-header');
convoHeader.innerText = "Join the Conversation";

let convoElementForm = document.createElement('div');
convoElementForm.classList.add('elements-form');

let elementFormPhoto = document.createElement('img');
elementFormPhoto.classList.add('elements-form__photo')
elementFormPhoto.setAttribute('src', './assets/images/Mohan-muruge.jpg');
elementFormPhoto.setAttribute('alt',"User's Avatar");

let elementFormInfo = document.createElement('div');
elementFormInfo.classList.add('elements-form__info');

let infoInput = document.createElement('form');
infoInput.classList.add('info-input');

let infoInputNameLabel = document.createElement('label');
infoInputNameLabel.setAttribute('for','name');
infoInputNameLabel.classList.add('info-input__label-name');
infoInputNameLabel.innerText = "NAME";

let infoInputName = document.createElement('input');
infoInputName.setAttribute('type','text');
infoInputName.setAttribute('name','name');
infoInputName.setAttribute('placeholder','Enter your name');
infoInputName.classList.add('info-input__name');

let infoInputCommentLabel = document.createElement('label');
infoInputCommentLabel.setAttribute('for','comment');
infoInputCommentLabel.classList.add('info-input__label-comment');
infoInputCommentLabel.innerText = "COMMENT";

let infoInputComment = document.createElement('input');
infoInputComment.setAttribute('type','textarea');
infoInputComment.setAttribute('name','comment');
infoInputComment.setAttribute('placeholder','Add a new comment');
infoInputComment.classList.add('info-input__comment');

let infoInputCta = document.createElement('input');
infoInputCta.setAttribute('type','submit');
infoInputCta.setAttribute('value','COMMENT');
infoInputCta.classList.add('info-input__cta');

convoElementForm.appendChild(elementFormPhoto);
convoElementForm.appendChild(elementFormInfo);

elementFormInfo.appendChild(infoInput);

infoInput.appendChild(infoInputNameLabel);
infoInput.appendChild(infoInputName);
infoInput.appendChild(infoInputCommentLabel);
infoInput.appendChild(infoInputComment);
infoInput.appendChild(infoInputCta);


// This is the section that auto populates at first and adds a comment afterwards

let convoElementComment = document.createElement('div');
convoElementComment.classList.add('elements-comment');

function displayComment (comments) {
    let elementCommentInnerContainer = document.createElement('div');
    elementCommentInnerContainer.classList.add('elements-comment__innerContainer');

    let elementCommentPhoto = document.createElement('div');
    elementCommentPhoto.classList.add('elements-comment__innerContainer__photo');

    let elementCommentInfo = document.createElement('div');
    elementCommentInfo.classList.add('elements-comment__innerContainer__info');

    let infoCommentContainer = document.createElement('div');
    infoCommentContainer.classList.add('info-comment-container')

    let infoPerson = document.createElement('p');
    infoPerson.classList.add('info-comment-container__person');
    infoPerson.innerText = comments.name;

    let infoTimeStamp = document.createElement('p');
    infoTimeStamp.classList.add('info-comment-container__timeStamp');
    infoTimeStamp.innerText = comments.timestamp;

    let infoCommentDescription = document.createElement('p');
    infoCommentDescription.classList.add('info-comment-description');
    infoCommentDescription.innerText = comments.comment;

    elementCommentInnerContainer.appendChild(elementCommentPhoto);
    elementCommentInnerContainer.appendChild(elementCommentInfo);

    elementCommentInfo.appendChild(infoCommentContainer);
    elementCommentInfo.appendChild(infoCommentDescription);

    infoCommentContainer.appendChild(infoPerson);
    infoCommentContainer.appendChild(infoTimeStamp);

    convoElementComment.appendChild(elementCommentInnerContainer);
}

// comments.forEach((element) =>{
//     displayComment(element);
// });

containerConvoElements.appendChild(convoHeader);
containerConvoElements.appendChild(convoElementForm);
containerConvoElements.appendChild(convoElementComment);

mainContainerConvo.appendChild(containerConvoElements);

// *************************************
let formEvent = document.querySelector(".info-input");
formEvent.addEventListener('submit',(e)=>{
    e.preventDefault();

    let name = e.target.name.value;
    let comment = e.target.comment.value;
    let virtualtimestamp = e.timeStamp;

    if (name === ""){
        const errorStateName =document.querySelector(".info-input__name");
        errorStateName.classList.add("info-input__name--error");

    }   else if(comment === ""){
        const errorStateName =document.querySelector(".info-input__name");
        const errorStateComment =document.querySelector(".info-input__comment");
        errorStateComment.classList.add("info-input__comment--error");
        errorStateName.classList.remove("info-input__name--error");
    } else{
        const errorStateName =document.querySelector(".info-input__name");
        const errorStateComment =document.querySelector(".info-input__comment");
        errorStateComment.classList.remove("info-input__comment--error");
        errorStateName.classList.remove("info-input__name--error");

        function dateConvert (datetoConvert) {
        datetoConvert = (datetoConvert *1000);
        date = new Date();
        return convertedDate = date.toLocaleDateString();
        }
        console.log(dateConvert(virtualtimestamp));

        // let newComment = {
        //     avatar: url=(''),
        //     name: name,
        //     timeStamp: timestamp,
        //     text:comment,
        // };

        axios 
        .post("https://project-1-api.herokuapp.com/comments?"+API_KEY, {
                "name": `${name}`,
                "comment": `${comment}`
                },

                {headers: {
                    'Content-Type' : 'application/json'
                  }
        })
        // .then(result=>{
        //     console.log(result);
        //     let comments = result.data;
        //     console.log(comments);

        //     comments.forEach((element) =>{
        //         displayComment(element);
        //     });

        // })
        .then(result=>{
            console.log(result);
            let newComments = result.data;
            console.log(newComments);
            comments.push(newComments);
        
            comments.map((element) =>{
                element.timestamp = dateConvert(element.timestamp);
            });
        
            comments.forEach((element) =>{
                displayComment(element);
            });
        
        })

        .catch(error=>{
            console.log("Data is not available");
        });
        // This disables the button after submitting the formEvent.
        // I targeted the button itself.
        // e.target[2].disabled=true;

        // comments.unshift(newComment);

        let elementsToRemove = document.querySelectorAll(".elements-comment__innerContainer");

        // I found this way of using the for each method to remove the nodeList on Stack Overflow
        // I could manipulate the NodeList as I wanted to.
        elementsToRemove.forEach(comments => comments.remove());
        e.target[0].value = "";
        e.target[1].value = "";

    }
    

});





