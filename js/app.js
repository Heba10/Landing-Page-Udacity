/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navbar__list = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
//let sectionCount = document.getElementsByTagName("section").length;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



// build the nav

    for (let i of sections) {
        let newLine = document.createElement('li');
        newLine.className = 'menu__link';
        newLine.dataset.nav = i.id;
       // console.log(newLine.dataset.nav);
        newLine.innerText = i.dataset.nav;
        navbar__list.appendChild(newLine);
    };


// Scroll to anchor ID using scrollTO event

    navbar__list.addEventListener('click', function (event) {
        const clicked = document.querySelector('#' + event.target.dataset.nav)
        clicked.scrollIntoView();
    });


// Add class 'active' to section when near top of viewport

    window.addEventListener('scroll', function (event) {
    sectionPos = sections[0];
    minValue = 10000000000;
    for (i of sections) {
        let bounding = i.getBoundingClientRect();
        if (bounding.top > -300 & bounding.top < minValue) {
            minValue = bounding.top;
            sectionPos = i;
        };
    };
        let section = sectionPos;
        section.classList.add('your-active-class');
    
        for (let i of sections) {
            if (i.id != section.id & i.classList.contains('your-active-class')) {
                i.classList.remove('your-active-class');
            }
        }
        
        const active = document.querySelector('li[data-nav="' + section.id + '"]');
        active.classList.add('active__link');
       
        const headers = document.querySelectorAll('.menu__link');
        for (let i of headers) {
            
            if (i.dataset.nav != active.dataset.nav & i.classList.contains('active__link')) {
                i.classList.remove('active__link');
            }
        };
    });








