// JavaScript Document

// de verschillende variabelen die bepaalde onderdelen aanroepen
var deButton = document.querySelector("header button");
var deButtonImg = document.querySelector("header button img");
var deNav = document.querySelector("header nav");



// De nieuwe functie toggleMenu
deButton.addEventListener("click", toggleMenu);

function toggleMenu() {


  // toggleMenu krijgt class toonMenu
  deNav.classList.toggle("toonMenu");

  // deButtonImg.classList.toggle("swapImg")
  deButton.classList.toggle("swapImg")
}
