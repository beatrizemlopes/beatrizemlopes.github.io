var anchor = document.querySelector ("#main-navigation").querySelectorAll("a");

for(var i = 0; i < anchor.length; i++) {
    if(window.location.href === anchor[i].href) {
    anchor[i].classList.add("active");
    }
}