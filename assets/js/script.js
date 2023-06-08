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
    document.body.classList.toggle("no-scroll");
}
btnToggleMenu.addEventListener("click", toggleMenu);

$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
	});
});