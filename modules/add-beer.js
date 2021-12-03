import { calculateTotalPrice } from "./checkout-price";

export function addBeer(button, selected) {
  let myBeer = button.id.replace("add-", "");
  let currentPrice = document.querySelector(`#price-${myBeer}`).textContent;
  let currentAmount = document.querySelector(`#amount-${myBeer}`).textContent;
  if (myBeer == "El-Hefe") {
    document.querySelector(`#amount-${myBeer}`).textContent =
      Number(currentAmount) + 1;

    document.querySelector(`#price-${myBeer}`).textContent =
      Number(currentPrice) + 40;
  } else if (myBeer == "Fairy-Tale-Ale") {
    document.querySelector(`#amount-${myBeer}`).textContent =
      Number(currentAmount) + 1;
    document.querySelector(`#price-${myBeer}`).textContent =
      Number(currentPrice) + 60;
  } else if (myBeer == "GitHop") {
    document.querySelector(`#amount-${myBeer}`).textContent =
      Number(currentAmount) + 1;
    document.querySelector(`#price-${myBeer}`).textContent =
      Number(currentPrice) + 60;
  } else if (myBeer == "Hollaback-Lager") {
    document.querySelector(`#amount-${myBeer}`).textContent =
      Number(currentAmount) + 1;
    document.querySelector(`#price-${myBeer}`).textContent =
      Number(currentPrice) + 50;
  } else if (myBeer == "Hoppily-Ever-After") {
    document.querySelector(`#amount-${myBeer}`).textContent =
      Number(currentAmount) + 1;
    document.querySelector(`#price-${myBeer}`).textContent =
      Number(currentPrice) + 65;
  } else if (myBeer == "Mowintime") {
    document.querySelector(`#amount-${myBeer}`).textContent =
      Number(currentAmount) + 1;
    document.querySelector(`#price-${myBeer}`).textContent =
      Number(currentPrice) + 30;
  } else if (myBeer == "Row-26") {
    document.querySelector(`#amount-${myBeer}`).textContent =
      Number(currentAmount) + 1;
    document.querySelector(`#price-${myBeer}`).textContent =
      Number(currentPrice) + 80;
  } else if (myBeer == "Ruined-Childhood") {
    document.querySelector(`#amount-${myBeer}`).textContent =
      Number(currentAmount) + 1;
    document.querySelector(`#price-${myBeer}`).textContent =
      Number(currentPrice) + 70;
  } else if (myBeer == "Sleighride") {
    document.querySelector(`#amount-${myBeer}`).textContent =
      Number(currentAmount) + 1;
    document.querySelector(`#price-${myBeer}`).textContent =
      Number(currentPrice) + 70;
  } else {
    document.querySelector(`#amount-${myBeer}`).textContent =
      Number(currentAmount) + 1;
    document.querySelector(`#price-${myBeer}`).textContent =
      Number(currentPrice) + 50;
  }
  //updated amount of beers for each object
  selected.forEach((e) => {
    console.log("e.name", e.name);
    console.log("mybeer", myBeer);
    console.log("currentamount", currentAmount);
    if (e.name == myBeer.replaceAll("-", " "))
      e.amount = Number(currentAmount) + 1;
  });
  console.log("selected", selected);
  calculateTotalPrice();
}
