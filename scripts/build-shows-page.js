
const API_KEY = "api_key=2e915d20-0296-46f3-9c06-431d21e71b86"

// axios
// .get("https://project-1-api.herokuapp.com/register")
// .then(result=>{
//     console.log(result);
//     const API_KEY = result.data.api_key;
//     console.log(API_KEY);    
// })
// .catch(error=>{
//     console.log("The registration didn't work");
// });

axios 
.get("https://project-1-api.herokuapp.com/showdates?"+API_KEY)
.then(result=>{
    console.log(result);
})

.catch(error=>{
    console.log("Data is not available");
});



let showsArray =[
    {
        dateTag: "DATE",
        dateInfo: "Mon Sept 06 2021",
        venueTag: "VENUE",
        venue: "Ronald Lane",
        locationTag: "LOCATION",
        location: "San Francisco, CA",
        ctaTag:"",
        cta: "BUY TICKETS"
    },
    {
        dateTag: "DATE",
        dateInfo: "Tue Sept 21 2021",
        venueTag: "VENUE",
        venue: "Pier 3 East",
        locationTag: "LOCATION",
        location: "San Francisco, CA",
        ctaTag:"",
        cta: "BUY TICKETS"
    },
    {
        dateTag: "DATE",
        dateInfo: "Fri Oct 15 2021",
        venueTag: "VENUE",
        venue: "View Lounge",
        locationTag: "LOCATION",
        location: "San Francisco, CA",
        ctaTag:"",
        cta: "BUY TICKETS"
    },
    {
        dateTag: "DATE",
        dateInfo: "Sat Nov 06 2021",
        venueTag: "VENUE",
        venue: "Hyatt Agency",
        locationTag: "LOCATION",
        location: "San Francisco, CA",
        ctaTag:"",
        cta: "BUY TICKETS"
    },
    {
        dateTag: "DATE",
        dateInfo: "Fri Nov 26 2021",
        venueTag: "VENUE",
        venue: "Moscow Center",
        locationTag: "LOCATION",
        location: "San Francisco, CA",
        ctaTag:"",
        cta: "BUY TICKETS"
    },
    {
        dateTag: "DATE",
        dateInfo: "Wed Dec 15 2021",
        venueTag: "VENUE",
        venue: "Press Club",
        locationTag: "LOCATION",
        location: "San Francisco, CA",
        ctaTag:"",
        cta: "BUY TICKETS"
    }
]

// This section will create the container for the show's table. 
// It will be appended to body.

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



function createShows (showsArray) {
    let modularContainer = document.createElement('div');
    modularContainer.classList.add('modular-container');
    containerShows.appendChild(modularContainer);

    let modularSubContainer1 = document.createElement('div');
    modularSubContainer1.classList.add('modular-subcontainer1');

    let dateTag = document.createElement('p');
    dateTag.classList.add("modular-subcontainer1__dateTag");
    dateTag.innerHTML = showsArray.dateTag;

    let dateInfo = document.createElement('p');
    dateInfo.classList.add("modular-subcontainer1__dateInfo");
    dateInfo.innerHTML = showsArray.dateInfo;
    modularSubContainer1.appendChild(dateTag);
    modularSubContainer1.appendChild(dateInfo);

    let modularSubContainer2 = document.createElement('div');
    modularSubContainer2.classList.add('modular-subcontainer2');

    let venueTag = document.createElement('p');
    venueTag.classList.add("modular-subcontainer2__venueTag");
    venueTag.innerHTML = showsArray.venueTag;

    let venue = document.createElement('p');
    venue.classList.add("modular-subcontainer2__venue");
    venue.innerHTML = showsArray.venue;
    modularSubContainer2.appendChild(venueTag);
    modularSubContainer2.appendChild(venue);

    let modularSubContainer3 = document.createElement('div');
    modularSubContainer3.classList.add('modular-subcontainer3');

    let locationTag = document.createElement('p');
    locationTag.classList.add("modular-subcontainer3__locationTag");
    locationTag.innerHTML = showsArray.locationTag;
    

    let location = document.createElement('p');
    location.classList.add("modular-subcontainer3__location");
    location.innerHTML = showsArray.location;
    modularSubContainer3.appendChild(locationTag);
    modularSubContainer3.appendChild(location);

    let modularSubContainer4 = document.createElement('div');
    modularSubContainer4.classList.add('modular-subcontainer4');

    let ctaTag = document.createElement('p');
    ctaTag.classList.add("modular-subcontainer4__ctaTag");
    ctaTag.innerHTML = showsArray.ctaTag;

    let cta = document.createElement('a');
    cta.classList.add("modular-subcontainer4__cta");
    cta.innerHTML = showsArray.cta;
    modularSubContainer4.appendChild(ctaTag);
    modularSubContainer4.appendChild(cta);

    modularContainer.appendChild(modularSubContainer1);
    modularContainer.appendChild(modularSubContainer2);
    modularContainer.appendChild(modularSubContainer3);
    modularContainer.appendChild(modularSubContainer4);
}

showsArray.forEach((element) =>{
    createShows(element);
});
