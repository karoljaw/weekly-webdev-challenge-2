let nav = document.querySelector(".navbar");
let navBrand = document.querySelector(".navbar-brand");

window.addEventListener("scroll", function(){
    if (window.scrollY > 0) {
        nav.style.backgroundColor = "rgba(255,255,255, 0.8)";
        nav.style.top = 0;
        navBrand.style.fontSize = "25px";
    }
});

window.addEventListener("scroll", function(){
    if (window.scrollY === 0) {
        nav.style.backgroundColor = "transparent";
        nav.style.top = "50px";
        navBrand.style.fontSize = "50px";
    }
});