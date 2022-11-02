// JavaScript Document
console.log("hi");

/******************************/

/* menu openen & sluiten de MENU button */

/******************************/

/*var eersteImagesButton = document.querySelector("section.images li:nth-of-type(1) button");

// de button naar kliks later luisteren
// als er geklikt wordt, wordt de functie 'eersteImagesButtonKlik' uitgevoerd
eersteImagesButton.addEventListener("click", eersteImagesButtonKlik);

// de functie 'eersteImagesButtonKlik'
function eersteImagesButtonKlik() {
  // de class 'menuOpen' wordt aan de button toegevoegd
  // de class wordt weer verwijderd als een 2e keer geklikt wordt
  eersteImagesButton.classList.toggle("menuOpen");
}
*/



// menu button opgeslagen als variabelen deButton

var deButton = document.querySelector("header button");
// menu-button luistert naar klik en voert dan een functie uit

deButton.addEventListener("click", toggleMenu);
// Nieuwe functie toggleMenu

function toggleMenu() {
  // nav opgeslagen als variabelen

  var deNav = document.querySelector("header nav");
  // nav krijgt class toonMenu

  deNav.classList.toggle("toonMenu");
}
