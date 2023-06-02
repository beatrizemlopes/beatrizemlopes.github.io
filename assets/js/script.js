/*
var anchor = document.querySelector ("#main-navigation").querySelectorAll("a");

for(var i = 0; i < anchor.length; i++) {
    if(window.location.href === anchor[i].href) {
    anchor[i].classList.add("active");
    }
}
*/

var btnToggleMenu = document.querySelector(".btn--toggle-menu");

function toggleMenu() {
    var mainNav = document.querySelector("#main-navigation");
    mainNav.classList.toggle("menu-is-open");
}
btnToggleMenu.addEventListener("click", toggleMenu);