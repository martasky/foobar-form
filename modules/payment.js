import { calculateTotalPrice } from "./checkout-price";

export function goToPayment(allBeers, selected) {
  document.querySelector(".checkout-wrapper").classList.add("hidden");
  document.querySelector(".payment-wrapper").classList.remove("hidden");

  console.log("selected beers", selected);

  selected.forEach((e) => {
    const copy = document
      .querySelector("template#payment")
      .content.cloneNode(true);

    copy.querySelector("[data-order=name]").textContent = e.name;
    copy.querySelector("[data-order=type]").textContent = e.category;
    copy.querySelector("[data-order=alc]").textContent = `${e.alc}%`;
    copy.querySelector("[data-order=img] img").src = e.label;
    copy.querySelector("[data-order=amount]").textContent = `x ${e.amount}`;
    document.querySelector(
      "[data-order=total]"
    ).textContent = `Total: ${calculatePrice(selected)} DKK`;

    document.querySelector("#orders-list").appendChild(copy);
  });

  document
    .querySelector("#payment_back")
    .addEventListener("click", goBackToCheckOut);
}

function goBackToCheckOut() {
  document.querySelector(".checkout-wrapper").classList.remove("hidden");
  document.querySelector(".payment-wrapper").classList.add("hidden");
  document.querySelector("#orders-list").innerHTML = "";
}

function calculatePrice(selected) {
  let totalPrice = 0;
  console.log(selected);
  let prices = [];
  selected.forEach((e) => {
    let oneBeerPrice = e.amount * e.price;
    console.log("oneprice", oneBeerPrice);
    prices.push(oneBeerPrice);
    console.log("prices", prices);
  });
  totalPrice = prices.reduce((a, b) => a + b);
  console.log("total", totalPrice);
  return totalPrice;
}
