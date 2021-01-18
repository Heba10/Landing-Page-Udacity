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
let navbar__list = document.getElementById("navbar__list");
let sectionCount = document.getElementsByTagName("section").length;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


for (i = 1; i <= sectionCount; i++) {
 let item = "section" + i ;

 let sectionId = document.getElementById(item);

 // Build menu 
 let sectionHead =sectionId.getElementsByTagName('h2')[0].innerHTML;




  let newLine = document.createElement("li");

  let lineHead = document.createTextNode(sectionHead);
  let listItem =  i;
  newLine.setAttribute("id", listItem);
  newLine.setAttribute("class", "menu__link");

 
  
  newLine.appendChild(lineHead);
  navbar__list.appendChild(newLine);

// Scroll to section on link click

newLine.addEventListener('click', function(){


// Scroll to anchor ID using scrollTO event
let lineId =newLine.getAttribute("id");

let activeItem = "#section" +lineId ;
 
window.location.href = activeItem 



});

  





  
}
// Add class 'active' to section when near top of viewport
const sections =Array.from(document.querySelectorAll('section'));

function sectionInViewPort (e){
	let sectionPos =e.getBoundingClientRect();
	return (sectionPos.top >= 0); 
}
	
function toggleActiveClass(){
    
for (section of sections) {
	        let Id =section.getAttribute("id");
	       
	        //console.log(Id);
	        var res = Id.substr(7, 7);
	        //console.log(res);
	        var element = document.getElementById(res);
             //console.log(element);
    

       


	if(sectionInViewPort(section)){
		if(!section.classList.contains('your-active-class' )){
			section.classList.add('your-active-class');
          
          
             element.classList.add("menul");
		}

	}else{ 
		section.classList.remove('your-active-class');
		 element.classList.remove("menul");
  
	}
}


}

  
document.addEventListener('scroll',toggleActiveClass);





/**
 * End Main Functions
 * Begin Events
 * 
*/





// Set sections as active


