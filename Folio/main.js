///-------- Copy to clipboard--------
function copyTextToClipboard(textToCopy, thisdocument) {
	try {
		
		console.log(thisdocument.className);

		if (navigator?.clipboard?.writeText) {
		navigator.clipboard.writeText(textToCopy);

		//Animation
		console.log("Copied");

		thisdocument.classList.add('copied-enable-animation');
		}
	} 
	catch (err) {
		console.error(err);
	}

	thisdocument.addEventListener("animationend", () => {
		thisdocument.classList.remove('copied-enable-animation');
	});
}




/// -------Fading while scrolling--------
function fadeOutOnScroll(element) {

	if (!element) {
    	console.log("Return");
		return;
	}
	
  	var distanceToBottom = window.scrollY;
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
var sectionAbout = document.getElementById('idAbout');
var sectionProjectTitle = document.getElementById('idProjectsTitle');
var sectionProject1 = document.getElementById('idPortfolio1');
var sectionProject2 = document.getElementById('idPortfolio2');


function scrollHandler() {

	fadeOutOnScroll(sectionAbout);
	fadeOutOnScroll(sectionProjectTitle);
	fadeOutOnScroll(sectionProject1);
	fadeOutOnScroll(sectionProject2);

}

//window.addEventListener('scroll', scrollHandler);
window.addEventListener("scroll", function () {
  scrollHandler();
}, false);





///--------Appear--------
 // Name of the class which will add transition
const className = "appear-transition";

// Animation will be applied to each element with this class
const elemsToAdd = document.querySelectorAll('.appear-object');
;


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
		entry.target.classList.add(className);
      return;
    }

    entry.target.classList.remove(className);
  });
});


elemsToAdd.forEach((element) => observer.observe(element));
