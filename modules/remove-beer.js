import { calculateTotalPrice } from "./checkout-price";

export function removeBeer(e, selected) {
  let myBeer = e.target.id.replace("remove-", "");
  let currentPrice = document.querySelector(`#price-${myBeer}`).textContent;
  let currentAmount = document.querySelector(`#amount-${myBeer}`).textContent;
  if (myBeer == "El-Hefe") {
    if (currentPrice > 0 && currentAmount > 0) {
      document.querySelector(`#amount-${myBeer}`).textContent =
        Number(currentAmount) - 1;
      document.querySelector(`#price-${myBeer}`).textContent =
        Number(currentPrice) - 40;
    }
  } else if (myBeer == "Fairy-Tale-Ale") {
    if (currentPrice > 0 && currentAmount > 0) {
      document.querySelector(`#amount-${myBeer}`).textContent =
        Number(currentAmount) - 1;
      document.querySelector(`#price-${myBeer}`).textContent =
        Number(currentPrice) - 60;
    }
  } else if (myBeer == "GitHop") {
    if (currentPrice > 0 && currentAmount > 0) {
      document.querySelector(`#amount-${myBeer}`).textContent =
        Number(currentAmount) - 1;
      document.querySelector(`#price-${myBeer}`).textContent =
        Number(currentPrice) - 60;
    }
  } else if (myBeer == "Hollaback-Lager") {
    if (currentPrice > 0 && currentAmount > 0) {
      document.querySelector(`#amount-${myBeer}`).textContent =
        Number(currentAmount) - 1;
      document.querySelector(`#price-${myBeer}`).textContent =
        Number(currentPrice) - 50;
    }
  } else if (myBeer == "Hoppily-Ever-After") {
    if (currentPrice > 0 && currentAmount > 0) {
      document.querySelector(`#amount-${myBeer}`).textContent =
        Number(currentAmount) - 1;
      document.querySelector(`#price-${myBeer}`).textContent =
        Number(currentPrice) - 65;
    }
  } else if (myBeer == "Mowintime") {
    if (currentPrice > 0 && currentAmount > 0) {
      document.querySelector(`#amount-${myBeer}`).textContent =
        Number(currentAmount) - 1;
      document.querySelector(`#price-${myBeer}`).textContent =
        Number(currentPrice) - 30;
    }
  } else if (myBeer == "Row-26") {
    if (currentPrice > 0 && currentAmount > 0) {
      document.querySelector(`#amount-${myBeer}`).textContent =
        Number(currentAmount) - 1;
      document.querySelector(`#price-${myBeer}`).textContent =
        Number(currentPrice) - 80;
    }
  } else if (myBeer == "Ruined-Childhood") {
    if (currentPrice > 0 && currentAmount > 0) {
      document.querySelector(`#amount-${myBeer}`).textContent =
        Number(currentAmount) - 1;
      document.querySelector(`#price-${myBeer}`).textContent =
        Number(currentPrice) - 70;
    }
  } else if (myBeer == "Sleighride") {
    if (currentPrice > 0 && currentAmount > 0) {
      document.querySelector(`#amount-${myBeer}`).textContent =
        Number(currentAmount) - 1;
      document.querySelector(`#price-${myBeer}`).textContent =
        Number(currentPrice) - 70;
    }
  } else {
    if (currentPrice > 0 && currentAmount > 0) {
      document.querySelector(`#amount-${myBeer}`).textContent =
        Number(currentAmount) - 1;
      document.querySelector(`#price-${myBeer}`).textContent =
        Number(currentPrice) - 50;
    }
  }
  //updated amount of beers for each object
  selected.forEach((e) => {
    if (e.name == myBeer.replaceAll("-", " "))
      e.amount = Number(currentAmount) - 1;
  });

  calculateTotalPrice();
}
