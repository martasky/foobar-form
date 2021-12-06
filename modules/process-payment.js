import { displayOrderNumbers } from "./thankyou.js"
let info =[];

export function processOrder(order, barInfo){

  // lets try fetching the queue instead of getting the queue passed


const queue = barInfo.queue
const servingOrders = barInfo.serving
const beersOrdered = [];
class Beer{
  constructor(name, amount){
    this.name = name;
    this.amount = amount
  }
}

order.forEach((order)=>{
  const beer = new Beer(order.name, order.amount)
 
 beersOrdered.push(beer)
});
console.log("beers ordered", beersOrdered)
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
   .then(setTimeout(updateQueue, 1000, beersOrdered))
   

    

}

function updateQueue(beersOrdered) {
  let urlBar = "https://foo-bar-project.herokuapp.com/";

  fetch(urlBar)
    .then((response) => response.json())
    .then((jsonData) => {
      info = jsonData
      console.log("info", info);
      displayOrderNumbers(beersOrdered, info)
    })
  

    
}








