//Hide Loading Box (Preloader)
function handlePreloader() {
  if($('.loader-wrap').length){
    $('.loader-wrap').delay(1000).fadeOut(500);
  }
}

if ($(".preloader-close").length) {
      $(".preloader-close").on("click", function(){
          $('.loader-wrap').delay(200).fadeOut(500);
      })
  }
	




// Get the navbar ul element
const navbar = document.getElementById('navbar');

// Add a click event listener to the navbar ul element
navbar.addEventListener('click', function(event) {
  // Check if the clicked element is an anchor tag (a)
  if (event.target.tagName === 'A') {
    // Remove the 'current' class from all li elements
    navbar.querySelectorAll('li').forEach(function(li) {
      li.classList.remove('current');
    });
    // Add the 'current' class to the parent li element of the clicked anchor tag
    event.target.parentElement.classList.add('current');
  }
});


// Get the original navbar and the new fixed navbar
const originalNavbar = document.getElementById('first-header');
const fixedNavbar = document.getElementById('fixedNavbar');
const menuContainer = document.getElementById('menuContainer')
const homeHeader = document.getElementById('navbarSupportedContent')

// Set up the Intersection Observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      // Scrolling up
      fixedNavbar.classList.add('fixed-header');
    } else {
      // Scrolling down
      fixedNavbar.classList.remove('fixed-header');
    }
  });
}, { threshold: 0 });

// Observe the original navbar
observer.observe(originalNavbar);



// Clone the original navbar and append it to the fixed navbar
const clonedNavbar = homeHeader.cloneNode(true);
menuContainer.appendChild(clonedNavbar);


// add the open class to nice-select
// Select the element
const niceSelect = document.querySelector('.nice-select');
const spanCurrent = niceSelect.querySelector('.current');
let isNiceSelectOpen = false;

// Add event listener
niceSelect.addEventListener('click', function(event) {
  if (!isNiceSelectOpen) {
    niceSelect.classList.add('open');
    isNiceSelectOpen = true;
  } else {
    niceSelect.classList.remove('open');
    isNiceSelectOpen = false;
  }
});

// Add event listener to each li the child of list class which is also the child of nice-select
// Add the selected and fucus class to it
// Dynamically change the content of the span according to the li selected

const listItems = niceSelect.querySelectorAll('.list li');
listItems.forEach(function(li) {
  li.addEventListener('click', function() {
    listItems.forEach(function(item) {
      item.classList.remove('selected');
      item.classList.remove('focus');
    });
    li.classList.add('selected');
    li.classList.add('focus');
    spanCurrent.textContent = li.textContent;
  });
});


// when the user click on the signin button it should redirect them to login url
document.getElementById('tab-1').onclick = function() {
  window.location.href = '/account/login';
};

// when the user click on the signup button it should redirect them to signup url
document.getElementById('tab-2').onclick = function() {
  window.location.href = '/account/signup';
};


/* ==========================================================================
   When document is loaded, do
   ========================================================================== */
	
   $(window).on('load', function() {
		handlePreloader();
		// enableMasonry();
	});