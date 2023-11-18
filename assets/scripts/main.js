
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


function selectButton(selectedButton) {
    // Obtén referencias a los botones
    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");

    // Desselecciona ambos botones
    button1.classList.remove("selected");
    button2.classList.remove("selected");

    // Selecciona el botón que se ha presionado
    var selectedButtonElement = document.getElementById("button" + selectedButton);
    selectedButtonElement.classList.add("selected");

    var priceSection = document.getElementById("price-card-1");
    var price2Section = document.getElementById("price-card-2");
    var priceElement = document.getElementById("price");
    var price2Element = document.getElementById("price2");
    var periodElement = document.getElementById("period");
    var period2Element = document.getElementById("period2");


    if(selectedButton === 1 && periodElement.innerText !== "/month"){
        priceSection.classList.add("flip");
        price2Section.classList.add("flip");
        // Cambia el valor del precio después de un breve retraso
        setTimeout(function () {
            // Puedes cambiar el valor del precio aquí
            price2Element.innerText = "S/. 130";
            priceElement.innerText = "S/. 350";
            periodElement.innerText ="/month"// Cambia según tu lógica
            period2Element.innerText ="/month"
            // Quita la clase después de otro breve retraso para permitir la animación inversa
            setTimeout(function () {
                priceSection.classList.remove("flip");
                price2Section.classList.remove("flip");
            }, 1000); // Ajusta según la duración de la animación de volteo
        }, 500); // Ajusta según la duración de la animación de volteo

    }

    if(selectedButton === 2 && periodElement.innerText !== "/year"){
        // Agrega una clase para activar la animación de volteo
        priceSection.classList.add("flip");
        price2Section.classList.add("flip");
        // Cambia el valor del precio después de un breve retraso
        setTimeout(function () {
            // Puedes cambiar el valor del precio aquí
            price2Element.innerText = "S/. 1300";
            priceElement.innerText = "S/. 3500";
            periodElement.innerText ="/year"// Cambia según tu lógica
            period2Element.innerText ="/year"
            // Quita la clase después de otro breve retraso para permitir la animación inversa
            setTimeout(function () {
                priceSection.classList.remove("flip");
                price2Section.classList.remove("flip");
            }, 1000); // Ajusta según la duración de la animación de volteo
        }, 500); // Ajusta según la duración de la animación de volteo
    }

}

function selectButtonS(selectedButton) {
    // Obtén referencias a los botones
    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");

    // Desselecciona ambos botones
    button1.classList.remove("selected");
    button2.classList.remove("selected");

    // Selecciona el botón que se ha presionado
    var selectedButtonElement = document.getElementById("button" + selectedButton);
    selectedButtonElement.classList.add("selected");

    var priceSection = document.getElementById("price-card-1");
    var price2Section = document.getElementById("price-card-2");
    var priceElement = document.getElementById("price");
    var price2Element = document.getElementById("price2");
    var periodElement = document.getElementById("period");
    var period2Element = document.getElementById("period2");


    if(selectedButton === 1 && periodElement.innerText !== "/mes"){
        priceSection.classList.add("flip");
        price2Section.classList.add("flip");
        // Cambia el valor del precio después de un breve retraso
        setTimeout(function () {
            // Puedes cambiar el valor del precio aquí
            price2Element.innerText = "S/. 130";
            priceElement.innerText = "S/. 350";
            periodElement.innerText ="/mes"// Cambia según tu lógica
            period2Element.innerText ="/mes"
            // Quita la clase después de otro breve retraso para permitir la animación inversa
            setTimeout(function () {
                priceSection.classList.remove("flip");
                price2Section.classList.remove("flip");
            }, 1000); // Ajusta según la duración de la animación de volteo
        }, 500); // Ajusta según la duración de la animación de volteo

    }

    if(selectedButton === 2 && periodElement.innerText !== "/año"){
        // Agrega una clase para activar la animación de volteo
        priceSection.classList.add("flip");
        price2Section.classList.add("flip");
        // Cambia el valor del precio después de un breve retraso
        setTimeout(function () {
            // Puedes cambiar el valor del precio aquí
            price2Element.innerText = "S/. 1300";
            priceElement.innerText = "S/. 3500";
            periodElement.innerText ="/año"// Cambia según tu lógica
            period2Element.innerText ="/año"
            // Quita la clase después de otro breve retraso para permitir la animación inversa
            setTimeout(function () {
                priceSection.classList.remove("flip");
                price2Section.classList.remove("flip");
            }, 1000); // Ajusta según la duración de la animación de volteo
        }, 500); // Ajusta según la duración de la animación de volteo
    }

}
