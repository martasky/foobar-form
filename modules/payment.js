let isDisplayedBefore = {};
//import { calculateTotalPrice } from "./checkout-price";
import { processOrder } from "./process-payment";

export function goToPayment(barInfo, selected) {
  document.querySelector(".checkout-wrapper").classList.add("hidden");
  document.querySelector(".payment-wrapper").classList.remove("hidden");

  selected.forEach((e) => {
    if (e.name in isDisplayedBefore) {
      return;
    }
    isDisplayedBefore[e.name] = true;

    if (e.amount <= 0) {
      return;
    }
    const copy = document.querySelector("template#payment").content.cloneNode(true);

    copy.querySelector("[data-order=name]").textContent = e.name;
    copy.querySelector("[data-order=type]").textContent = e.category;
    copy.querySelector("[data-order=alc]").textContent = `${e.alc}%`;
    copy.querySelector("[data-order=img] img").src = e.label;
    copy.querySelector("[data-order=amount]").textContent = `x ${e.amount}`;
    document.querySelector("[data-order=total]").textContent = `Total: ${calculatePrice(selected)} DKK`;

    document.querySelector("#orders-list").appendChild(copy);
  });

  document.querySelector("#payment_back").addEventListener("click", goBackToCheckOut);
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    processOrder(selected, barInfo);
  });
}

function goBackToCheckOut() {
  document.querySelector(".checkout-wrapper").classList.remove("hidden");
  document.querySelector(".payment-wrapper").classList.add("hidden");
  document.querySelector("#orders-list").innerHTML = "";
  document.querySelector("[data-order=total").innerHTML = "";
  isDisplayedBefore = {};
}

function calculatePrice(selected) {
  let totalPrice = 0;
  let prices = [];
  selected.forEach((e) => {
    if (e.amount >= 1) {
      let oneBeerPrice = e.amount * e.price;
        prices.push(oneBeerPrice);
    } else {
      return;
    }
  });

  totalPrice = prices.reduce((a, b) => a + b);
  return totalPrice;
}
