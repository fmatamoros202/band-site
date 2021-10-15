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

// let mainBody= document.querySelector('body');
// mainBody.appendChild(mainContainerShows);

let containerShows = document.createElement('section');
containerShows.classList.add('container-shows');

shows.appendChild(mainContainerShows);
mainContainerShows.appendChild(mainShowsHeader);
mainContainerShows.appendChild(containerShows);



function createShows (showsArray) {
    let modularContainer = document.createElement('div');
    modularContainer.classList.add('modular-container');
    containerShows.appendChild(modularContainer);

    let dateTag = document.createElement('p');
    dateTag.classList.add("modular-container__dateTag");
    dateTag.innerHTML = showsArray.dateTag;
    modularContainer.appendChild(dateTag);

    let dateInfo = document.createElement('p');
    dateInfo.classList.add("modular-container__dateInfo");
    dateInfo.innerHTML = showsArray.dateInfo;
    modularContainer.appendChild(dateInfo);

    let venueTag = document.createElement('p');
    venueTag.classList.add("modular-container__venueTag");
    venueTag.innerHTML = showsArray.venueTag;
    modularContainer.appendChild(venueTag);

    let venue = document.createElement('p');
    venue.classList.add("modular-container__venue");
    venue.innerHTML = showsArray.venue;
    modularContainer.appendChild(venue);

    let locationTag = document.createElement('p');
    locationTag.classList.add("modular-container__locationTag");
    locationTag.innerHTML = showsArray.locationTag;
    modularContainer.appendChild(locationTag);

    let location = document.createElement('p');
    location.classList.add("modular-container__location");
    location.innerHTML = showsArray.location;
    modularContainer.appendChild(location);

    let ctaTag = document.createElement('p');
    ctaTag.classList.add("modular-container__ctaTag");
    ctaTag.innerHTML = showsArray.ctaTag;
    modularContainer.appendChild(ctaTag);

    let cta = document.createElement('a');
    cta.classList.add("modular-container__cta");
    cta.innerHTML = showsArray.cta;
    modularContainer.appendChild(cta);
}

showsArray.forEach((element) =>{
    createShows(element);
});