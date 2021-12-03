import { removeBeer } from "./remove-beer";
import { calculateTotalPrice } from "./checkout-price";
import { addBeer } from "./add-beer";
import { goToPayment } from "./payment";

let isDisplayedBefore = {};

export function goToCheckOut(allBeers) {
  let selectedBeers = [];

  let selectedBeersAmount = [];

  document.querySelector(".beers-wrapper").classList.add("hidden");
  document.querySelector(".checkout-wrapper").classList.remove("hidden");
  //get the information about selected beers
  let beer_1;
  let beer;

  document.querySelectorAll('input[type="checkbox"]').forEach((input) => {
    if (input.checked) {
      beer_1 = input.id.replace("-chosen", "");
      beer = beer_1.replaceAll("-", " ");

      allBeers.forEach((elm) => {
        if (elm.name == beer) {
          selectedBeers.push(elm);
        }
      });
    }
  });

  selectedBeers.forEach((beer) => {
    console.log("selected beers in chceckout", selectedBeers);
    console.log("isdisplayedbifre what cintains", isDisplayedBefore);
    // add amount property for each object

    console.log("displayebdefoe", beer.name);
    if (beer.name in isDisplayedBefore) {
      return;
    }
    isDisplayedBefore[beer.name] = true;
    beer.amount = 1;
    console.log("is it added", selectedBeers);
    const copy = document
      .querySelector("template#checkout")
      .content.cloneNode(true);
    let beerid = beer.name.replaceAll(" ", "-");
    copy.querySelector("img").src = beer.label;
    copy.querySelector("h3").textContent = beer.name;
    copy.querySelector(".beer_category").textContent = beer.category;
    copy.querySelector(".alc_percentaje").textContent = beer.alc;
    copy.querySelector(".calculated_price").textContent = beer.price;
    copy
      .querySelector(".calculated_price")
      .setAttribute("id", `price-${beerid}`);
    copy.querySelector(".remove_beer").setAttribute("id", `remove-${beerid}`);
    copy.querySelector(".add_beer").setAttribute("id", `add-${beerid}`);
    copy.querySelector(".beer_amount").setAttribute("id", `amount-${beerid}`);

    // add event listener
    copy.querySelector(".remove_beer").addEventListener("click", (e) => {
      removeBeer(e, selectedBeers);
    });
    copy.querySelector(".add_beer").addEventListener("click", (e) => {
      console.log("add beer", e.target.id);
      addBeer(e, selectedBeers);
    });

    document.querySelector(".beers_ordered").appendChild(copy);
  });

  //calculate the total price
  calculateTotalPrice();

  // if you proceed send the selectedBeers array
  document.querySelector("#checkout_next").addEventListener("click", () => {
    console.log("next");
    document.querySelector(".checkout-wrapper").classList.add("hidden");
    //loop throught the added beers, build an object with info and push it to the array selectedBeersAmount
    //document.querySelector("").classList.remove("hidden");
    //displayOrderSummary(selectedBeers)
  });

  // if you go back clean the selectedBeers array and the html

  document.querySelector("#checkout_back").addEventListener("click", () => {
    console.log("backwe go");
    document.querySelector(".checkout-wrapper").classList.add("hidden");
    document.querySelector(".beers-wrapper").classList.remove("hidden");

    /*  document.querySelector(".beers_ordered").innerHTML = "";
    document.querySelector(".total_price span").textContent = "0"; */
    /* selectedBeers = []; */
    selectedBeersAmount = [];
  });

  document.querySelector("#checkout_next").addEventListener("click", () => {
    goToPayment(allBeers, selectedBeers);
  });
}
