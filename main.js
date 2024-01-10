///-------- Copy to clipboard--------
function copyTextToClipboard(textToCopy, nameOfObject) {
	try {
		
		// console.log(thisObject.className);

		if (navigator?.clipboard?.writeText) {
			navigator.clipboard.writeText(textToCopy);

			console.log("Copied");
			alert(nameOfObject + " was copied to clipboard");
		}
	} 
	catch (err) {
		console.error(err);
	}

	// thisObject.addEventListener("animationend", () => {
	// 	thisObject.classList.remove('copied-enable-animation');
	// });
}





///--------Appear--------
 // Name of the class which will add transition
 const className = "appear-object";

 const observer = new IntersectionObserver(entries => {
	 entries.forEach(entry => {
	   if (entry.isIntersecting) {
		 entry.target.classList.add(className);
		 return;
	   }
	    // To make "Appear animation" work every time
	 	//entry.target.classList.remove(className);
	 });
   });
   
// Get multiple elements instead of a single one using "querySelectorAll"
const elements = document.querySelectorAll('.' + className);

// Delete animation to re-add it
elements.forEach((element) => element.classList.remove(className));

// Observe element
elements.forEach((element) => observer.observe(element));





/// -------Fading while scrolling--------
function fadeOutOnScroll(element) {

	if (!element) {
    	console.log("Return");
		return;
	}
	
	var distanceToTop = window.scrollY + element.getBoundingClientRect().top;
	var elementHeight = element.offsetHeight;
	var scrollTop = document.documentElement.scrollTop;
	
	var opacity = 1;

	//When higher than middle
	if (scrollTop > distanceToTop) {
		opacity = 1.2 - (scrollTop - distanceToTop) / elementHeight * 2;
	}
	//When lower than middle
	else if(scrollTop < distanceToTop){
		opacity = 1.4 - (distanceToTop - scrollTop)/ screen.height * 2;
	}

		
	// console.log("ScrollTop: " + scrollTop);
	// console.log("DistanceToTop: " + distanceToTop);
	// console.log("Opacity: " + opacity);

	if (opacity >= 0 ) {
		element.style.opacity = opacity;
	}
  
}



// Move Photos while scrolling
function FindBetween(minNumber, maxNumber, number)
{
	if(number>maxNumber){
		return maxNumber;
	}
	else if(number<minNumber)
	{
		return minNumber
	}
	return number;
}
function MovePhotosOnScroll(element) {

	if (!element) {
    	console.log("Return");
		return;
	}
	
	var distanceToTop = window.scrollY + element.getBoundingClientRect().top;
	var scrollTop = document.documentElement.scrollTop;
	
	var translate = (distanceToTop - scrollTop) * 0.4 - 100;
	
	var borderOfMoving = 200; // In pixels
	translate = FindBetween(-borderOfMoving, borderOfMoving, translate);
	element.style.transform = "translate(0px, " + translate + "px)";

	// console.log("Translate: " + translate);
	// console.log("ScrollTop: " + scrollTop);
	// console.log("DistanceToTop: " + distanceToTop);
}


const photosToMove = document.querySelectorAll('.Photo');

var sectionAbout = document.getElementById('idAbout');
var sectionProjectTitle = document.getElementById('idProjectsTitle');
var sectionProject1 = document.getElementById('idProject1');
var sectionProject2 = document.getElementById('idProject2');
var sectionProject3 = document.getElementById('idProject3');
var sectionProject4 = document.getElementById('idProject4');
var sectionProject5 = document.getElementById('idProject5');
var sectionProject6 = document.getElementById('idProject6');

function scrollHandler() {
	photosToMove.forEach((element) => MovePhotosOnScroll(element));
	

	fadeOutOnScroll(sectionAbout);
	fadeOutOnScroll(sectionProjectTitle);
	fadeOutOnScroll(sectionProject1);
	fadeOutOnScroll(sectionProject2);
	fadeOutOnScroll(sectionProject3);
	fadeOutOnScroll(sectionProject4);
	fadeOutOnScroll(sectionProject5);
	fadeOutOnScroll(sectionProject6);

}

window.addEventListener("scroll", function() {
  scrollHandler();
}, false);







