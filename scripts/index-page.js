let comments = [
    {
        avatar: url=(""),
        name: "Connor Walton",
        timeStamp: "02/17/2021",
        text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    },
    {
        avatar: url=(""),
        name: "Emilie Beach",
        timeStamp: "01/09/2021",
        text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    },
    {
        avatar: url=(""),
        name:"Miles Acosta",
        timeStamp: "12/20/2020",
        text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
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

let infoCta = document.createElement('a');
infoCta.classList.add('info-cta');
infoCta.innerText ="COMMENT";


convoElementForm.appendChild(elementFormPhoto);
convoElementForm.appendChild(elementFormInfo);

elementFormInfo.appendChild(infoInput);
elementFormInfo.appendChild(infoCta);


// This is the section that auto populates at first and adds a comment afterwards

let convoElementComment = document.createElement('div');
convoElementComment.classList.add('elements-comment');

for (let i = 0; i < comments.length; i++ ){

    let elementCommentInnerContainer = document.createElement('div');
    elementCommentInnerContainer.classList.add('elements-comment__innerContainer');

    let elementCommentPhoto = document.createElement('img');
    elementCommentPhoto.classList.add('elements-comment__innerContainer__photo');
    elementCommentPhoto.setAttribute('src',comments[i].avatar);
    elementCommentPhoto.setAttribute('alt','');

    let elementCommentInfo = document.createElement('div');
    elementCommentInfo.classList.add('elements-comment__innerContainer__info');

    let infoCommentContainer = document.createElement('div');
    infoCommentContainer.classList.add('info-comment-container')

    let infoPerson = document.createElement('p');
    infoPerson.classList.add('info-comment-container__person');
    infoPerson.innerText = comments[i].name;

    let infoTimeStamp = document.createElement('p');
    infoTimeStamp.classList.add('info-comment-container__timeStamp');
    infoTimeStamp.innerText = comments[i].timeStamp;

    let infoCommentDescription = document.createElement('p');
    infoCommentDescription.classList.add('info-comment-description');
    infoCommentDescription.innerText = comments[i].text;

    elementCommentInnerContainer.appendChild(elementCommentPhoto);
    elementCommentInnerContainer.appendChild(elementCommentInfo);

    elementCommentInfo.appendChild(infoCommentContainer);
    elementCommentInfo.appendChild(infoCommentDescription);

    infoCommentContainer.appendChild(infoPerson);
    infoCommentContainer.appendChild(infoTimeStamp);

    convoElementComment.appendChild(elementCommentInnerContainer);
}

containerConvoElements.appendChild(convoHeader);
containerConvoElements.appendChild(convoElementForm);
containerConvoElements.appendChild(convoElementComment);

mainContainerConvo.appendChild(containerConvoElements);


