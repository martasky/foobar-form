import { displayOrderNumbers } from "./thankyou.js";

export function processOrder(order) {
  // we want to determine what beers we order in a specific format
  const beersOrdered = [];
  class Beer {
    constructor(name, amount) {
      this.name = name;
      this.amount = amount;
    }
  }

  order.forEach((order) => {
    const beer = new Beer(order.name, order.amount);
    beersOrdered.push(beer);
  });
  

  //send payload & we need to fetch the bar info again in order to get the latest info

  fetch("https://foo-bar-project.herokuapp.com/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(beersOrdered),
  })
    .then(setTimeout(updateQueue, 1000, beersOrdered));
}

function updateQueue(beersOrdered) {
  let info;
  let urlBar = "https://foo-bar-project.herokuapp.com/";

  fetch(urlBar)
    .then((response) => response.json())
    .then((jsonData) => {
      info = jsonData;
      displayOrderNumbers(beersOrdered, info);
    });
}
