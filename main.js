import "./sass/style.scss";

window.addEventListener("DOMContentLoaded", start);

function start() {
  loadJSON();
}

function loadJSON() {
  let urlBeers = "https://foo-bar-project.herokuapp.com/beertypes";
  fetch(urlBeers)
    .then((response) => response.json())
    .then((jsonData) => {
      prepareObjects(jsonData);
    });
}

function prepareObjects(jsonData) {
  //modify json here
  jsonData.forEach((elm) => {
    console.log(elm);
    // I thought we will create object like in hogwarts to add beer prices and push the new objects in a global array
  });

  displayBeer();
}

function displayBeer() {}
