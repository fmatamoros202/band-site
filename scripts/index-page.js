let comments = [
    {
        // avatar: url=(""),
        // name: "Connor Walton",
        // timeStamp: "02/17/2021",
        // text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
        avatar: url=(""),
        name:"Miles Acosta",
        timeStamp: "12/20/2020",
        text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    },
    {
        avatar: url=(""),
        name: "Emilie Beach",
        timeStamp: "01/09/2021",
        text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    },
    {
        // avatar: url=(""),
        // name:"Miles Acosta",
        // timeStamp: "12/20/2020",
        // text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
        avatar: url=(""),
        name: "Connor Walton",
        timeStamp: "02/17/2021",
        text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    }
]

let mainContainerConvo = document.querySelector('.container-convo');
// mainContainerConvo.classList.add('container-convo');

let containerConvoElements = document.createElement('div');
containerConvoElements.classList.add('convo-elements');

let convoHeader = document.createElement('h2');
convoHeader.classList.add('elements-header');
convoHeader.innerText = "Join the Conversation";

let convoElementForm = document.createElement('div');
convoElementForm.classList.add('elements-form');

let elementFormPhoto = document.createElement('img');
elementFormPhoto.classList.add('elements-form__photo')
elementFormPhoto.setAttribute('src', '../assets/images/Mohan-muruge.jpg');
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

// let infoCta = document.createElement('a');
// infoCta.classList.add('info-cta');
// infoCta.innerText ="COMMENT";


convoElementForm.appendChild(elementFormPhoto);
convoElementForm.appendChild(elementFormInfo);

elementFormInfo.appendChild(infoInput);
// elementFormInfo.appendChild(infoCta);

infoInput.appendChild(infoInputNameLabel);
infoInput.appendChild(infoInputName);
infoInput.appendChild(infoInputCommentLabel);
infoInput.appendChild(infoInputComment);
infoInput.appendChild(infoInputCta);


// This is the section that auto populates at first and adds a comment afterwards

let convoElementComment = document.createElement('div');
convoElementComment.classList.add('elements-comment');

function createComments (comments) {
    let elementCommentInnerContainer = document.createElement('div');
    elementCommentInnerContainer.classList.add('elements-comment__innerContainer');

    let elementCommentPhoto = document.createElement('img');
    elementCommentPhoto.classList.add('elements-comment__innerContainer__photo');
    elementCommentPhoto.setAttribute('src', comments.avatar);
    elementCommentPhoto.setAttribute('alt','');

    let elementCommentInfo = document.createElement('div');
    elementCommentInfo.classList.add('elements-comment__innerContainer__info');

    let infoCommentContainer = document.createElement('div');
    infoCommentContainer.classList.add('info-comment-container')

    let infoPerson = document.createElement('p');
    infoPerson.classList.add('info-comment-container__person');
    infoPerson.innerText = comments.name;

    let infoTimeStamp = document.createElement('p');
    infoTimeStamp.classList.add('info-comment-container__timeStamp');
    infoTimeStamp.innerText = comments.timeStamp;

    let infoCommentDescription = document.createElement('p');
    infoCommentDescription.classList.add('info-comment-description');
    infoCommentDescription.innerText = comments.text;

    elementCommentInnerContainer.appendChild(elementCommentPhoto);
    elementCommentInnerContainer.appendChild(elementCommentInfo);

    elementCommentInfo.appendChild(infoCommentContainer);
    elementCommentInfo.appendChild(infoCommentDescription);

    infoCommentContainer.appendChild(infoPerson);
    infoCommentContainer.appendChild(infoTimeStamp);

    convoElementComment.appendChild(elementCommentInnerContainer);
}

comments.forEach((element) =>{
    createComments(element);
});

containerConvoElements.appendChild(convoHeader);
containerConvoElements.appendChild(convoElementForm);
containerConvoElements.appendChild(convoElementComment);

mainContainerConvo.appendChild(containerConvoElements);

// ***************************************************************
// This is the submit event

let formEvent = document.querySelector(".info-input");
formEvent.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(e);
    // console.log(e.target.name.value);
    // console.log(e.target.comment.value);
    // console.log(e.timeStamp);
    let nameNewComment = e.target.name.value;
    let commentNewComment = e.target.comment.value;
    let timeComment = e.timeStamp;

    console.log(timeComment);
    let myDate = (timeComment *1000);
    console.log(myDate);
    myDate = new Date();
    let timeNewComment = myDate.toLocaleDateString();
    console.log(timeNewComment);

    let newComment = {
        avatar: url=(''),
        name: nameNewComment,
        timeStamp: timeNewComment,
        text: commentNewComment,
    };
    // e.target.submit.setAttribute('disabled', "true");

    comments.push(newComment);
    console.log(comments);

    createComments(newComment);

});







