import "./sass/style.scss";

import { getLabel } from "./modules/get-label.js";
import { getBeerPrice } from "./modules/get-beer-price";
import { displayBeers } from "./modules/display-beers";
import { displayMenu } from "./modules/display-menu";

window.addEventListener("DOMContentLoaded", start);

let allBeers = [];
let barInfo = [];
let currentTaps = [];

class Beer {
  constructor(name, category, alc, price, label, description) {
    this.name = name;
    this.category = category;
    this.alc = alc;
    this.price = price;
    this.label = label;
    this.description = description;
  }
}

const Tap = {
  id: "",
  name: "",
  category: "",
  alc: "",
  price: "",
  label: "",
  description: "",
};

function start() {
  getJSONfiles();
  setInterval(updateQueue, 5000);
  updateQueue();
  document.querySelector(".logo img").addEventListener("click", goToStart);
}

function goToStart() {
  window.location.reload();
}
function getJSONfiles() {
  let urlBeers = "https://foo-bar-project.herokuapp.com/beertypes";
  let urlBar = "https://foo-bar-project.herokuapp.com/";
  function loadJSON() {
    fetch(urlBeers)
      .then((response) => response.json())
      .then((jsonData) => {
        prepareObjects(jsonData);
      });
  }

  fetch(urlBar)
    .then((response) => response.json())
    .then((jsonData) => {
      barInfo = jsonData;
      loadJSON();
    });
}

function updateQueue() {
  let urlBar = "https://foo-bar-project.herokuapp.com/";

  fetch(urlBar)
    .then((response) => response.json())
    .then((jsonData) => {
      prepareMenuData(jsonData);
    });
}

function prepareMenuData(jsonData) {
  let timestamp = jsonData.timestamp;
  let queue = jsonData.queue.length;

  displayMenu(queue, timestamp);
}

function prepareObjects(jsonData) {
  //modify json here
  jsonData.forEach((elm) => {
    // add price to each beer
    let beerPrice = getBeerPrice(elm);
    // get label url
    let label = getLabel(elm);
    // setting properties in the new object to that values
    const beer = new Beer(
      elm.name,
      elm.category,
      elm.alc,
      beerPrice,
      label,
      elm.description
    );

    allBeers.push(beer);
  });

  currentTaps = [];
  document.querySelector(".beer_cards_wrapper").innerHTML = "";
  let isFoundBefore = {};
  barInfo.taps.forEach((elm) => {
    // check if the name appeared before
    if (elm.beer in isFoundBefore) {
      return;
    }
    isFoundBefore[elm.beer] = true;
    const tap = Object.create(Tap);
    tap.id = elm.id;
    tap.name = elm.beer;
    allBeers.forEach((beer) => {
      // if the name in allBeers array is the name as in tap obj,
      //then loop through all the keys in all beers obj,
      //and copy it to the new object
      if (beer.name == tap.name) {
        for (let key in beer) {
          tap[key] = beer[key];
        }
      }
    });

    currentTaps.push(tap);
  });

  displayBeers(currentTaps, barInfo);
}
