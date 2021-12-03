export function displayOrderNumbers(myorder, serving, queue) {
  //to find out which order is ours, we'll compare the queue and serving orders with ours
  document.querySelector(".payment-wrapper").classList.add("hidden");
  document.querySelector(".thank-you-wrapper").classList.remove("hidden");

  console.log("my order", myorder, "orders", serving, "queue", queue);

  findMyOrder(myorder, serving);

  document.querySelector("#serving").innerHTML = "";
  if (serving.length > 0) {
   serving.forEach((order) => {
      const copy = document.querySelector("#orders_template").content.cloneNode(true);
      copy.querySelector(".now_serving").textContent = order.id;
      document.querySelector("#serving").appendChild(copy);
    });
  }
}

function findMyOrder(myorder, serving, queue) {
  const cleanedOrders = serving.map((order) => {
    return (order.order) ;
  });
  console.log("cleaned orders", cleanedOrders);
  const formatedOrders = formatArray(cleanedOrders);
  /* const myOrder = formatedOrders.filter((order) => {
    myorder.map((beer) => {
      beer == order;
    });
  }); */
  //console.log("I found my order", myOrder);
}

function formatArray(orders) {
  const copyOfOrders = orders.map((elm)=>elm)
  console.log("copy of orders", copyOfOrders);
  const formatedOrders = orders.map((order) => {
    let counter = 0;
    const orderCopy = order.map(elm=>elm)    
    order.forEach((beer)=>{
       const selectedBeer = orderCopy.forEach((copy)=>{
          if(copy == beer){
            counter++;
          }
          return { name: copy, amount: counter };
       })

    })
   
    
  });
  console.log("formated orders", formatedOrders);
  return formatedOrders;
}

