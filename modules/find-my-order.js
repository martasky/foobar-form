export function findMyOrder(myOrder, barInfo) {
  //get barInfo queue and barInfo serving in the same format as myOrder;

  const barInfoQueue = barInfo.queue;
  const barInfoServing = barInfo.serving;

  //first, look into queue. If there's anything, transform queue orders in the same format as myOrder
  if (barInfoQueue.length > 0) {
    const queueFormated = barInfoQueue.map((orderInQueue) => {
      const beersOrdered = orderInQueue.order;
      const copyOfOrder = [...beersOrdered];

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
//remove duplicate items in the queue
    const filteredQueueFormated = queueFormated.map((order) =>
      order.filter((elm, index, self) => {
        return index === self.findIndex((e) => e.name === elm.name && e.amount === elm.amount);
      })
    );

    //compare with myOrder
    orderFound(filteredQueueFormated, myOrder);
  
  } else {
      //If there's nothing on queue, we'll look for our order in the orders being served
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

    const servingQueueFormated = servingFormated.map((order) =>
      order.filter((elm, index, self) => {
        return index === self.findIndex((e) => e.name === elm.name && e.amount === elm.amount);
      })
    );

    //compare with myOrder
    orderFound(servingQueueFormated, myOrder);
  }
}

function orderFound(filteredQueueFormated, myOrder) {
  filteredQueueFormated.forEach((order) => {
    order.forEach((elm) => {
      myOrder.forEach((myorder) => {
        if (elm.amount == myorder.amount && elm.name == myorder.name) {
          let foundOrder = elm.id;
          document.querySelector("#your_order_number").textContent = foundOrder;
        }
      });
    });
  });
}