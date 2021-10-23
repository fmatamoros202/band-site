const API_KEY = "api_key=2e915d20-0296-46f3-9c06-431d21e71b86"

axios 
.get("https://project-1-api.herokuapp.com/comments?"+API_KEY)
.then(result=>{
    console.log(result);
    let comments = result.data;
    console.log(comments);

    comments.sort((a,b)=> b.timestamp - a.timestamp);

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
    // return dateConverted = new Date(datetoConvert).getMonth()+ 1 + "/" + new Date(datetoConvert).getDate() + "/" + new Date (datetoConvert).getFullYear();
    return dateConverted = new Date(datetoConvert).toLocaleDateString();
}


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
    // let virtualtimestamp = e.timeStamp;

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


        axios.all 
        ([axios.post("https://project-1-api.herokuapp.com/comments?"+API_KEY, {
                "name": `${name}`,
                "comment": `${comment}`
                },

                {headers: {
                    'Content-Type' : 'application/json'
                  }
        }),axios.get("https://project-1-api.herokuapp.com/comments?"+API_KEY)])

        .then(axios.spread(function (objectPostedComment, objectComments) {
            
            console.log(objectPostedComment);
            let postedComment = objectPostedComment.data;
            let comments = objectComments.data;
            console.log(objectComments);
            comments.unshift(postedComment);

        
            comments.map((element) =>{
                element.timestamp = dateConvert(element.timestamp);
            });

            console.log(comments);
        
            comments.forEach((element) =>{
                displayComment(element);
            });
        
        }))

        .catch(error=>{
            console.log("Data is not available");
        });
        // This disables the button after submitting the formEvent.
        // I targeted the button itself.
        // e.target[2].disabled=true;

        let elementsToRemove = document.querySelectorAll(".elements-comment__innerContainer");

        // I found this way of using the for each method to remove the nodeList on Stack Overflow
        // I couldn't manipulate the NodeList as I wanted to.
        elementsToRemove.forEach(comments => comments.remove());
        // e.target[0].value = "";
        // e.target[1].value = "";
        e.target.reset();

    }
    

});





