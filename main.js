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
		opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
	}
	//When lower than middle
	else if(scrollTop < distanceToTop){
		opacity = 1.2 - (distanceToTop - scrollTop)/ screen.height;
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
	
	var translate = (distanceToTop - scrollTop) * 0.3 - 110;
	
	translate = FindBetween(-100, 100, translate);
	element.style.transform = "translate(0px, " + translate + "px)";

	// console.log("Translate: " + translate);
	// console.log("ScrollTop: " + scrollTop);
	// console.log("DistanceToTop: " + distanceToTop);
}


const photosToMove = document.querySelectorAll('.Photo');

var sectionAbout = document.getElementById('idAbout');
var sectionProjectTitle = document.getElementById('idProjectsTitle');
var sectionProject1 = document.getElementById('idPortfolio1');
var sectionProject2 = document.getElementById('idPortfolio2');

function scrollHandler() {
	photosToMove.forEach((element) => MovePhotosOnScroll(element));
	
	fadeOutOnScroll(sectionAbout);
	fadeOutOnScroll(sectionProjectTitle);
	fadeOutOnScroll(sectionProject1);
	fadeOutOnScroll(sectionProject2);

}

window.addEventListener("scroll", function() {
  scrollHandler();
}, false);






///--------Appear--------
 // Name of the class which will add transition
const className = "appear-object";

// Animation will be applied to each element with this class
// Create the observer like the examples above
const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
	  if (entry.isIntersecting) {
		entry.target.classList.add(className);
		return;
	  }
  
	  entry.target.classList.remove(className);
	});
  });
  
  // Get multiple elements instead of a single one using "querySelectorAll"
  const squares = document.querySelectorAll('.' + className);
  
  // Loop over the elements and add each one to the observer
  squares.forEach((element) => observer.observe(element));
