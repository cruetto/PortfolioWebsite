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
 const animationName = "appear-animation";

const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) 
		{
			entry.target.classList.add(animationName);
			return;
		}
	});
});
   
// Get multiple elements instead of a single one using "querySelectorAll"
const elements = document.querySelectorAll('.' + className);

// // Delete animation to re-add it
// elements.forEach((element) => element.classList.remove(className));

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
	

	var translate;
	var borderOfMoving;// In pixels 

	if(window.innerWidth > 950){

		translate = (distanceToTop - scrollTop) * 0.4 - 100;
		borderOfMoving = 200;// In pixels
		translate = FindBetween(-borderOfMoving, borderOfMoving, translate);
	} 
	else if(window.innerWidth < 1100){
		translate = (distanceToTop - scrollTop) * 0.4 - 200;
		borderOfMoving = 200;// In pixels
		translate = FindBetween(30, borderOfMoving, translate);
	}
	


	element.style.transform = "translate(0px, " + translate + "px)";

	// console.log("Translate: " + translate);
	// console.log("ScrollTop: " + scrollTop);
	// console.log("DistanceToTop: " + distanceToTop);
}


const photosToMove = document.querySelectorAll('.Photo');

const elementsTofade = document.querySelectorAll('.fadeOutOnScroll');


function scrollHandler() {
	elementsTofade.forEach((element) => fadeOutOnScroll(element));
	photosToMove.forEach((element) => MovePhotosOnScroll(element));
	
}

window.addEventListener("scroll", function() {
  scrollHandler();
}, false);

window.onbeforeunload = function () {
	window.scrollTo(0, 0);
  }