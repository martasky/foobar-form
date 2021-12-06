import "./sass/style.scss";
import { setEventListeners } from "./modules/event-listeners.js";
import {hourFromMs} from "./modules/convertTime.js"

window.addEventListener("DOMContentLoaded", start);

let allBeers = [];
let barInfo = [];
let currentTaps = [];

class Beer{
  constructor(name, category, alc, price, label, description){
    this.name = name;
    this.category = category;
    this.alc = alc;
    this.price = price;
    this.label = label; 
    this.description = description
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
function displayMenu(queue, timestamp) {
  const today = new Date(timestamp);
  const day = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();

  const closingDate = new Date(year, month, day, 22);
  const closingTime = closingDate.getTime();
  const remainingTime = closingTime - timestamp;
  const timeUntilClosure = hourFromMs(remainingTime);

  document.querySelector("#people_queue").textContent = queue;
  document.querySelector("#remaining_time").textContent = timeUntilClosure;
}
function prepareObjects(jsonData) {
  //modify json here
  jsonData.forEach((elm) => {
    
    // add price to each beer
    let beerPrice = getBeerPrice(elm);
    // get label url
    let label = getLabel(elm);
    // setting properties in the new object to that values
    const beer = new Beer (elm.name, elm.category, elm.alc, beerPrice, label, elm.description)
    
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
function getLabel(elm) {
  let label = elm.label;
  let imgUrl = "/assets/beer-images/" + label;
  return imgUrl;
}

function displayBeers() {
  currentTaps.forEach((beer) => {
    const clone = document.querySelector("template#beers").content.cloneNode(true);
    const chosenBeer = beer.name.replaceAll(" ", "-");

    clone.querySelector(".beer_name").textContent = beer.name;
    clone.querySelector(".read_more").setAttribute("id", `${beer.name.replaceAll(" ", "-")}`);
    clone.querySelector(".beer_type_name").textContent = `${beer.category},`;
    clone.querySelector(".beer_alkohol").textContent = `${beer.alc}%`;
    clone.querySelector(".beer_price").textContent = `${beer.price} kr`;
    clone.querySelector(".beer_img img").src = beer.label;
    clone.querySelector('input[type="checkbox"').setAttribute("id", `${chosenBeer}-chosen`);

    document.querySelector(".beer_cards_wrapper").appendChild(clone);
  });

  setEventListeners(currentTaps, barInfo);
}


