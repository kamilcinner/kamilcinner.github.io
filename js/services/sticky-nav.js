// When the user scrolls the page, execute myFunction.
window.onscroll = function() { myFunction(); };

// Get the navbar.
var navbar = document.getElementById("navbar");

// Get the main content div.
var main = document.getElementsByTagName('main')[0];

// Get the offset position of the navbar.
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position.
// Remove "sticky" when you leave the scroll position.
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky-top");
        // Add some top padding to the page content to prevent sudden quick movement
        // (as the navigation bar gets a new position at the top of the page (position:fixed and top:0).
        main.setAttribute('style', 'padding-top: 50px;');
    } else {
        navbar.classList.remove("sticky-top");
        // Remove top padding.
        main.removeAttribute('style');
    }
}
