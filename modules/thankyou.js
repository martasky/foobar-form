let foundOrder;
export function displayOrderNumbers(myorder, info) {
  //to find out which order is ours, we'll compare the queue and serving orders with ours
  const serving = info.serving;
  document.querySelector(".payment-wrapper").classList.add("hidden");
  document.querySelector(".thank-you-wrapper").classList.remove("hidden");
  document.querySelector("#order_again").addEventListener("click", ()=>{
     window.location.reload();
  } )

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

function findMyOrder(myOrder, barInfo) {
  //get barInfo queue and barInfo serving in the same format as myOrder;

  const barInfoQueue = barInfo.queue;
  const barInfoServing = barInfo.serving;

  //first, look into queue 1) transform queue orders in the same format as myOrder
  if (barInfoQueue.length > 0) {
    console.log("is my order in queue? ", barInfoQueue);

    const queueFormated = barInfoQueue.map((orderInQueue) => {
      const beersOrdered = orderInQueue.order;
      const copyOfOrder = [...beersOrdered];

      console.log("order in queue", orderInQueue);
      return beersOrdered.map((elm) => {
        let counter = 0;

        copyOfOrder.forEach((copy) => {
          if (copy == elm) {
            counter++;
          }
        });
        return { name: elm, amount: counter, id: orderInQueue.id };
      });
    });

    console.log("queue formated to get amount of beers", queueFormated);
    const filteredQueueFormated = queueFormated.map((order) =>
      order.filter((elm, index, self) => {
        return index === self.findIndex((e) => e.name === elm.name && e.amount === elm.amount);
      })
    );
    console.log("queue after filtering", filteredQueueFormated);

    //compare with myOrder
    orderFound(filteredQueueFormated, myOrder);
    //console.log("is this my order?", foundMyOrder);
  } else {
    console.log("my order is being served ", barInfoServing);

    const servingFormated = barInfoServing.map((orderBeingServed) => {
      const order = orderBeingServed.order;
      const copyOfOrder = [...order];

      return order.map((elm) => {
        let counter = 0;

        copyOfOrder.forEach((copy) => {
          if (copy == elm) {
            counter++;
          }
        });
        return { name: elm, amount: counter, id: orderBeingServed.id };
      });
    });
    // filter formated order
    console.log("serving orders formated to get amount of beers", servingFormated);

    const servingQueueFormated = servingFormated.map((order) =>
    order.filter((elm, index, self) => {
      return index === self.findIndex((e) => e.name === elm.name && e.amount === elm.amount);
    })
  );


  console.log("serving after filtering", servingQueueFormated);

    //compare with myOrder
    orderFound(servingQueueFormated, myOrder);
  }
}

function orderFound(filteredQueueFormated, myOrder) {
  filteredQueueFormated.forEach((order) => {
    order.forEach((elm) => {
      myOrder.forEach((myorder) => {
        if (elm.amount == myorder.amount && elm.name == myorder.name) {
          console.log(elm.id);
          foundOrder = elm.id;
          document.querySelector("#your_order_number").textContent = foundOrder;
        }
      });
    });
  });
}


