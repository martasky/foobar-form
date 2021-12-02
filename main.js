import "./sass/style.scss";
import {setEventListeners} from './modules/event-listeners.js'

window.addEventListener("DOMContentLoaded", start);

let allBeers = [];
console.log(allBeers);

const Beer = {
  name: "",
  cateogry: "",
  alc: "",
  price: "",
  label: "",
  description: "",
};

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
    const beer = Object.create(Beer);

    // add price to each beer
    let beerPrice = getBeerPrice(elm);
    // setting properties in the new object to that values
    beer.name = elm.name;
    beer.category = elm.category;
    beer.alc = elm.alc;
    beer.price = beerPrice;
    beer.label = elm.label;
    beer.description = elm.description;
    allBeers.push(beer);
  });

  displayBeers();
}

function getBeerPrice(elm) {
  let name = elm.name;
  let price = "";
  if (name == "El Hefe") {
    price = 40;
  } else if (name == "Fairy Tale Ale") {
    price = 60;
  } else if (name == "GitHop") {
    price = 60;
  } else if (name == "Hollaback Lager") {
    price = 50;
  } else if (name == "Hoppily Ever After") {
    price = 65;
  } else if (name == "Mowintime") {
    price = 30;
  } else if (name == "Row 26") {
    price = 80;
  } else if (name == "Ruined Childhood") {
    price = 70;
  } else if (name == "Sleighride") {
    price = 70;
  } else {
    price = 50;
  }
  return price;
}
function displayBeers() {
  allBeers.forEach((beer) => {
    const clone = document
      .querySelector("template#beers")
      .content.cloneNode(true);

    clone.querySelector(".beer_name").textContent = beer.name;
    clone.querySelector(".read_more").setAttribute('id', `${beer.name.replaceAll(" ", "-")}`)
    document.querySelector(".beer_cards_wrapper").appendChild(clone);
    
  });
  setEventListeners(allBeers)
  
}
