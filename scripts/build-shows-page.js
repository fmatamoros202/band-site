
const API_KEY = "api_key=2e915d20-0296-46f3-9c06-431d21e71b86"

function dateConvert (datetoConvert) {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    let parsedDate = parseInt(datetoConvert,10);
    return dateConverted = new Date(parsedDate).toLocaleDateString("en-US",options);
}

axios 
.get("https://project-1-api.herokuapp.com/showdates?"+API_KEY)
.then(result=>{
    arrayApi = result.data;

    arrayApi.map((element) => {
        element.date = dateConvert(element.date);
    });

    arrayApi.forEach((element) =>{
        createShows(element);
    });
})

.catch(error=>{
    console.log("Data is not available");
});


// This section will create the container for the show's table. 
// It will be appended to body.

const dateTagHeader  ="DATE";
const venueTagHeader  ="VENUE";
const locationTagHeader  ="LOCATION";
const ctaTagHeader  ="";

let shows = document.querySelector('main');
shows.classList.add('shows');

let mainContainerShows = document.createElement('section');
mainContainerShows.classList.add('shows__main');

let mainShowsHeader = document.createElement('h2');
mainShowsHeader.classList.add('shows__header');
mainShowsHeader.innerHTML = "Shows";


let containerShows = document.createElement('section');
containerShows.classList.add('container-shows');

shows.appendChild(mainContainerShows);
mainContainerShows.appendChild(mainShowsHeader);
mainContainerShows.appendChild(containerShows);



function createShows (element) {
    let modularContainer = document.createElement('div');
    modularContainer.classList.add('modular-container');
    containerShows.appendChild(modularContainer);
    
    let modularSubContainer1 = document.createElement('div');
    modularSubContainer1.classList.add('modular-subcontainer1');

    let dateTag = document.createElement('p');
    dateTag.classList.add("modular-subcontainer1__dateTag");
    dateTag.innerHTML = dateTagHeader;

    let dateInfo = document.createElement('p');
    dateInfo.classList.add("modular-subcontainer1__dateInfo");
    dateInfo.innerHTML = element.date;
    modularSubContainer1.appendChild(dateTag);
    modularSubContainer1.appendChild(dateInfo);

    let modularSubContainer2 = document.createElement('div');
    modularSubContainer2.classList.add('modular-subcontainer2');

    let venueTag = document.createElement('p');
    venueTag.classList.add("modular-subcontainer2__venueTag");
    venueTag.innerHTML = venueTagHeader;

    let venue = document.createElement('p');
    venue.classList.add("modular-subcontainer2__venue");
    venue.innerHTML = element.place;
    modularSubContainer2.appendChild(venueTag);
    modularSubContainer2.appendChild(venue);

    let modularSubContainer3 = document.createElement('div');
    modularSubContainer3.classList.add('modular-subcontainer3');

    let locationTag = document.createElement('p');
    locationTag.classList.add("modular-subcontainer3__locationTag");
    locationTag.innerHTML = locationTagHeader;
    

    let location = document.createElement('p');
    location.classList.add("modular-subcontainer3__location");
    location.innerHTML = element.location;
    modularSubContainer3.appendChild(locationTag);
    modularSubContainer3.appendChild(location);

    let modularSubContainer4 = document.createElement('div');
    modularSubContainer4.classList.add('modular-subcontainer4');

    let ctaTag = document.createElement('p');
    ctaTag.classList.add("modular-subcontainer4__ctaTag");
    ctaTag.innerHTML = ctaTagHeader;

    let cta = document.createElement('a');
    cta.classList.add("modular-subcontainer4__cta");
    cta.innerHTML = "BUY TICKETS";
    modularSubContainer4.appendChild(ctaTag);
    modularSubContainer4.appendChild(cta);

    modularContainer.appendChild(modularSubContainer1);
    modularContainer.appendChild(modularSubContainer2);
    modularContainer.appendChild(modularSubContainer3);
    modularContainer.appendChild(modularSubContainer4);
}


