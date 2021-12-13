import {findMyOrder} from "/modules/find-my-order.js"


export function displayOrderNumbers(myorder, info) {
  //to find out which order is ours, we'll compare the queue and serving orders with ours
  const serving = info.serving;
  document.querySelector(".payment-wrapper").classList.add("hidden");
  document.querySelector(".thank-you-wrapper").classList.remove("hidden");
  document.querySelector("#order_again").addEventListener("click", () => {
    window.location.reload();
  });

  console.log("my order", myorder, "orders", info);

  findMyOrder(myorder, info);

  document.querySelector("#serving").innerHTML = "";
  if (serving.length > 0) {
    serving.forEach((order) => {
      const copy = document.querySelector("#orders_template").content.cloneNode(true);
      copy.querySelector(".now_serving").textContent = order.id;
      document.querySelector("#serving").appendChild(copy);
    });
  }
}


