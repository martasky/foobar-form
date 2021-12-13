import "/sass/style.scss";
import { displayBeers } from "/modules/display-beers";
import { getBeerPrice } from "/modules/get-beer-price";
import { getLabel } from "/modules/get-label.js";
export function prepareObjects(jsonData, barInfo) {
//we create the objects structure and the consts for the arrays of beers and beers available on tap
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

  let allBeers = [];

  let currentTaps = [];
 

  //modify json here
  jsonData.forEach((elm) => {
    // add price to each beer
    let beerPrice = getBeerPrice(elm);
    // get label url
    let label = getLabel(elm);
    // setting properties in the new object to that values
    const beer = new Beer(elm.name, elm.category, elm.alc, beerPrice, label, elm.description);

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
