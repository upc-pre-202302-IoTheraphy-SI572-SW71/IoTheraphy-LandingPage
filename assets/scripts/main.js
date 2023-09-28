
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navItem1 = document.querySelector(".item1");
const navItem2 = document.querySelector(".item2");
const navItem3 = document.querySelector(".item3");
const navItem4 = document.querySelector(".item4");


navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

});


navItem1.addEventListener("click", () => {
    navMenu.classList.remove("nav-menu_visible");
});

navItem2.addEventListener("click", () => {
    navMenu.classList.remove("nav-menu_visible");
});


navItem3.addEventListener("click", () => {
    navMenu.classList.remove("nav-menu_visible");
});


navItem4.addEventListener("click", () => {
    navMenu.classList.remove("nav-menu_visible");
});


function yousendit(){
    if(document.getElementById('yousendit').checked){
        window.location='https://upc-pre-202302-iotheraphy-si572-sw71.github.io/IoTheraphy-LandingPage/index-spanish.html';
        return false;
    }
    return true;

}

function yousendit2(){
    if(document.getElementById('yousendit2').checked){
        window.location='https://upc-pre-202302-iotheraphy-si572-sw71.github.io/IoTheraphy-LandingPage/';
        return false;
    }
    return true;

}
