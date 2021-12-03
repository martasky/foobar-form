import { displayOrderNumbers } from "./thankyou"

export function processOrder(order, barInfo){
const queue = barInfo.queue
const servingOrders = barInfo.serving
const beersOrdered = [];
const Beer = {
    name: "",
    amount: 0
};
order.forEach((order)=>{
 const beer = Object.create(Beer);
 beer.amount = order.amount;
 beer.name = order.name;
 
 beersOrdered.push(beer)
});
console.log(beersOrdered)
//send payload
//enpoint /order
/* structure[
    { name: "Hoppily Ever After", amount: 1 },
    { name: "Row 26", amount: 2 },
  ]; */

fetch("https://foo-bar-project.herokuapp.com/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(beersOrdered),
  })
    .then((response) => {
      console.log(response);}

    )
    .then(displayOrderNumbers(order, servingOrders, queue))

    

}





